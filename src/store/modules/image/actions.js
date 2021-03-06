export default {
  addOSDImage: async ({
    commit
  }, payload) => {
    if (payload.fileType === 'iiif') {
      const response = await fetch(`${location.origin}/iiif`)
      const iiifURL = await response.text()
      payload.source = new URL(`${encodeURIComponent(payload.source)}/info.json`, iiifURL).toString()
    }
    commit('addOSDImage', payload)
  },

  clearImages: ({
    commit
  }) => {
    commit('clearImages')
  },

  setProjectImageName: ({
    commit
  }, projectImageName) => {
    commit('setProjectImageName', projectImageName)
  },

  setupOsdCanvas: ({
    commit
  }, payload) => {
    commit('setupOsdCanvas', payload)
  },

  resetImageState: ({
    commit,
    rootState
  }) => {
    commit('resetImageState', rootState)
  },

  setActiveImageIndex: ({
    commit
  }, payload) => {
    commit('setActiveImageIndex', payload)
  },

  setActiveImageOpacity: ({
    commit
  }, payload) => {
    commit('setActiveImageOpacity', payload)
  },

  setActiveImageName: ({
    commit
  }, payload) => {
    commit('setActiveImageName', payload)
  },

  setZoom: ({
    state
  }, payload) => {
    const newZoom = payload instanceof KeyboardEvent ? Number(payload.target.value) : Number(payload)
    if (newZoom > 0) { state.OSDviewer.viewport.zoomTo(newZoom) }
  },

  setPixelScaleFactor: ({
    commit
  }, payload) => {
    commit('setPixelScaleFactor', payload)
  }
}
