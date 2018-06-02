// This file handles the Vuex state changes that are either common, or involve
// using more than one of the different parts: annotation, editor and image.
import axios from 'axios'
import paper from 'paper'

const state = {}

const getters = {}

const actions = {
  // Reset Vuex state to default
  resetState: ({
    dispatch
  }) => {
    dispatch('resetEditorState')
    dispatch('resetAnnotationState')
    dispatch('resetImageState')
  },

  // Load a project into AIDA.
  loadProject: ({
    dispatch
  }, payload) => {
    // Construct endpoint from which to pull the data from
    let endpoint = 'https://aida-private.firebaseio.com/' + payload + '.json'

    // Pull latest test project from REST api
    axios
      .get(endpoint)
      // Update the editor.js state
      .then(function (response) {
        // Load the editor configuration
        dispatch('loadConfig', response.data.editor, {
          root: true
        })

        // Load the images into the viewer
        dispatch('loadImages', response.data.images, {
          root: true
        })

        // Load the PaperJS project representation of the annotation data
        dispatch('loadAnnotation', response.data.annotation, {
          root: true
        })
      })
      .catch(function (error) {
        console.log(`Could not load all data from external source. Returned the following error: \n \n` + error)
      })
  },

  // Save AIDA project to REST API
  saveProject: ({
    rootState,
    dispatch
  }) => {
    // Construct endpoint to store data at
    let endpoint = 'https://aida-private.firebaseio.com/' + rootState.editor.type + '.json'

    dispatch('refreshAnnotationState').then(
      axios
        .put(endpoint, {
          editor: rootState.editor,
          annotation: rootState.annotation,
          images: rootState.image.images
        })
        .then(function (response) {
          console.log(response)
        })
    )
  },

  // Install event hooks to keep the annotations and the OSDcanvas in sync when
  // panning or zooming.
  synchroniseAnnotationAndOSDCanvas: ({
    state,
    commit,
    rootState
  }) => {
    commit('synchroniseAnnotationAndOSDCanvas', rootState.image.OSDviewer)
  },

  // Dispatch mutations to set both the active step and the active layer,
  // ensuring that they are in sync.
  setActiveStepAndLayer: ({
    dispatch
  }, index) => {
    dispatch('setActiveLayer', index)
    dispatch('setActiveStep', index)
  }

}

const mutations = {
  // Add a handler function that will run when osd-viewport is updated.
  // This will synchronously update the paperJS viewport.
  // This is an expensive operation as it ensures all parameters are in sync
  // on every viewport update. For example, zoom may not have changed but it
  // would still fire this event and update the zoom. However, separating into
  // the individual parts led to a far less smooth experience. Leave it here
  // for now at least.
  synchroniseAnnotationAndOSDCanvas: (state, viewer) => {
    // Add functionality that is triggered by the 'update-viewport' event
    viewer.addHandler('update-viewport', function () {
      // Match changes in zoom level
      let viewportZoom = viewer.viewport.getZoom(true)
      let image1 = viewer.world.getItemAt(0)
      paper.view.zoom = image1.viewportToImageZoom(viewportZoom)

      // Ensure the same center point
      let center = image1.viewportToImageCoordinates(
        viewer.viewport.getCenter(true)
      )
      paper.view.center = new paper.Point(center.x, center.y)

      // Update paths to have strokeWidth reactive to zoom level.
      // This might be computationally-expensive but will try for now.
      // TODO: consider the computational expensive of this and find a more
      // effectively method of handling it. Additionally, the hard coded 500
      // is clearly a temporary fix here.
      paper.project.layers.forEach(layer => {
        layer.children.forEach(child => {
          if (child.className === 'Path') {
            child.strokeWidth = image1.getContentSize().x / (viewportZoom * 500)
          }
        })
      })
    })
  }
}

// Export all of the relevant logic so that it can be combined with the
// respective parts in the other modules and complete the store.
export default {
  state,
  getters,
  actions,
  mutations
}
