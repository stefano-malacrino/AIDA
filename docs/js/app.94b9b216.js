(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},i={app:0},n={app:0},r=[];function s(e){return c.p+"js/"+({"Dashboard~Demo~Editor":"Dashboard~Demo~Editor",Dashboard:"Dashboard",Editor:"Editor",Demo:"Demo",Loading:"Loading"}[e]||e)+"."+{"Dashboard~Demo~Editor":"db6e7760",Dashboard:"a4ce4935",Editor:"358c35bf",Demo:"76ba22a7",Loading:"797dd940"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"Dashboard~Demo~Editor":1,Dashboard:1,Editor:1,Loading:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var o="css/"+({"Dashboard~Demo~Editor":"Dashboard~Demo~Editor",Dashboard:"Dashboard",Editor:"Editor",Demo:"Demo",Loading:"Loading"}[e]||e)+"."+{"Dashboard~Demo~Editor":"34750cbe",Dashboard:"471c7adf",Editor:"b5236a05",Demo:"31d6cfe0",Loading:"585fe70f"}[e]+".css",n=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===n))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],d=l.getAttribute("data-href");if(d===o||d===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),a(r)},m.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){i[e]=0})));var o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,a){o=n[e]=[t,a]}));t.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var p=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",p.name="ChunkLoadError",p.type=o,p.request=i,a[1](p)}n[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/AIDA/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var m=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"74cf":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("14c6"),a("08c1"),a("4842"),a("d9fc");var o=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("router-view")],1),a("v-snackbar",{attrs:{timeout:0},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    This site uses cookies to function optimally.\n    "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.acceptCookies()}}},[e._v("\n      OK\n    ")])],1)],1)},n=[],r={name:"App",data(){return{snackbar:!0}},methods:{acceptCookies(){this.snackbar=!1,window.localStorage.setItem("acceptCookies","false")}},created(){window.localStorage.acceptCookies&&"false"===window.localStorage.acceptCookies&&(this.snackbar=!1)}},s=r,c=a("2877"),l=a("6544"),d=a.n(l),p=a("7496"),m=a("8336"),h=a("a75b"),u=a("2db4"),v=Object(c["a"])(s,i,n,!1,null,null,null),g=v.exports;d()(v,{VApp:p["a"],VBtn:m["a"],VContent:h["a"],VSnackbar:u["a"]});var y=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{staticClass:"primary",attrs:{flat:"",dense:"",dark:""}},[a("router-link",{attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"white--text"},[e._v("\n        AIDA\n      ")])],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",to:"/dashboard"}},[a("v-icon",[e._v("\n          mdi-apps\n        ")])],1),a("v-btn",{attrs:{icon:"",href:"https://github.com/alanaberdeen/AIDA/wiki"}},[a("v-icon",[e._v(" mdi-book-open-outline ")])],1)],1)],1),a("v-container",[a("v-layout",{attrs:{"justify-center":"","pb-3":""}},[a("h1",{staticClass:"display-4 primary--text"},[e._v(" AIDA ")])]),a("v-layout",{attrs:{"justify-center":"","pb-5":""}},[a("h2",{staticClass:"display-1"},[e._v(" Annotate Image Data by Asssigment ")])]),a("v-layout",{attrs:{"justify-center":"",row:"",wrap:"","pb-10":""}},[a("v-flex",{attrs:{xs8:"",sm3:"",md2:"","my-1":"","mx-2":""}},[a("v-btn",{attrs:{dark:"",block:"",to:"/demo"}},[a("v-icon",{attrs:{left:""}},[e._v(" mdi-play ")]),e._v("\n          try it out\n        ")],1)],1),a("v-flex",{attrs:{xs8:"",sm3:"","my-1":"",md2:""}},[a("v-btn",{attrs:{block:"",href:"https://github.com/alanaberdeen/AIDA"}},[a("v-icon",{attrs:{left:""}},[e._v(" mdi-github-circle ")]),e._v("\n          Github\n        ")],1)],1),a("v-flex",{attrs:{xs8:"",sm3:"",md2:"","my-1":"","mx-2":""}},[a("v-btn",{attrs:{block:"",href:"https://github.com/alanaberdeen/AIDA/wiki"}},[a("v-icon",{attrs:{left:""}},[e._v(" mdi-book-open-outline ")]),e._v("\n          Docs\n        ")],1)],1)],1),a("v-layout",{attrs:{"mb-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" The Basic Idea ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v("\n          AIDA brings an open source web-based work-flow to image annotation.\n        ")]),a("p",[e._v("\n          Currently, in the biomedical imaging space, image annotation is largely confined to shrink-wrapped software on a single computer with limited interactive capabilities and few, usually closed, data formats.\n        ")]),a("p",[e._v("\n          AIDA is a web interface that enables distributed teams of researchers to directly annotate images with easy to use on screen drawing tools. AIDA supports the creation of well defined annotation trials which include a series of high resolution images and a specific set of annotation tasks.\n        ")]),a("p",[e._v("\n          For documentation and further information see the "),a("a",{attrs:{href:"https://github.com/alanaberdeen/AIDA/wiki"}},[e._v("Wiki")]),e._v(".\n        ")])],1)],1),a("v-layout",{attrs:{"mb-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" How has it been implemented? ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v("\n          The user interface is a "),a("a",{attrs:{href:"https://vuejs.org/"}},[e._v("VueJS")]),e._v(" Single Page Application, encapsulating and interacting with two other significant JavaScript libraries: "),a("a",{attrs:{href:"https://openseadragon.github.io/"}},[e._v("OpenSeaDragon")]),e._v(" to manipulate the high-res images and "),a("a",{attrs:{href:"http://paperjs.org/"}},[e._v("PaperJS")]),e._v(" to provide the drawing functionality. "),a("a",{attrs:{href:"http://vuetifyjs.com/"}},[e._v("VuetifyJS")]),e._v(" is used as a UI component library which implements the material design language.\n        ")])],1)],1),a("v-layout",{attrs:{"my-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" What's planned? ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v("\n          The software is published as Open Source under the permissive "),a("a",{attrs:{href:"https://github.com/alanaberdeen/AIDA/blob/master/LICENSE"}},[e._v("MIT license")]),e._v(".\n        ")]),a("p",[e._v("\n          The next stage of development will be to integrate intelligent tools that leverage the power of machine learning techniques. We hope to enhance the ability of the user to quickly and accurately mark up images through predictive assistance.\n        ")])],1)],1),a("v-layout",{attrs:{"my-4":""}},[a("v-flex",{attrs:{md8:"","offset-md2":"",sm10:"","offset-sm1":"",xs12:""}},[a("h3",{staticClass:"primary--text title"},[e._v(" About ")]),a("v-divider",{staticClass:"my-1"}),a("p",[e._v("\n          This is a project of "),a("a",{attrs:{href:"https://alanaberdeen.com"}},[e._v("Alan Aberdeen")]),e._v(", Jens Rittscher, and Nasullah Khalid at the University of Oxford, specifically the "),a("a",{attrs:{href:"https://www.ludwig.ox.ac.uk/jens-rittscher-group-page"}},[e._v("Quantitative Biological Imaging Group")]),e._v(".\n        ")])],1)],1)],1)],1)},w=[],S=(a("e1cf"),a("a523")),b=a("ce7e"),x=a("0e8f"),A=a("132d"),D=a("a722"),I=a("2fa4"),C=a("71d9"),k=a("2a7f"),j={},O=Object(c["a"])(j,f,w,!1,null,"c31ff782",null),L=O.exports;d()(O,{VBtn:m["a"],VContainer:S["a"],VDivider:b["a"],VFlex:x["a"],VIcon:A["a"],VLayout:D["a"],VSpacer:I["a"],VToolbar:C["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]}),o["a"].use(y["a"]);var P=new y["a"]({base:"/AIDA/",routes:[{path:"/",name:"landing",component:L},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([a.e("Dashboard~Demo~Editor"),a.e("Dashboard")]).then(a.bind(null,"7277"))}},{path:"/edit",name:"edit",component:function(){return Promise.all([a.e("Dashboard~Demo~Editor"),a.e("Editor")]).then(a.bind(null,"49d7"))}},{path:"/loading/:filePath",name:"loading",component:function(){return a.e("Loading").then(a.bind(null,"45d6"))}},{path:"/demo",name:"demo",component:function(){return Promise.all([a.e("Dashboard~Demo~Editor"),a.e("Editor"),a.e("Demo")]).then(a.bind(null,"680c"))}}]}),T=a("2f62"),E=a("bc3a"),_=a.n(E),N=a("c51a"),F=a.n(N),z=a("df7c"),V=a.n(z),B={loadProject:async({state:e,dispatch:t})=>{await t("image/clearImages",null,{root:!0}),await t("app/synchroniseAnnotationAndOSDCanvas",null,{root:!0});try{const a=V.a.extname(e.projectFilePath),o=e.projectFilePath.split(a)[0],i=location.origin+"/projects/"+o+".json",n=await window.fetch(i),r=await n.json();r.hasOwnProperty("annotation")&&t("annotation/loadAnnotation",r.annotation,{root:!0}),r.hasOwnProperty("images")&&r.images.forEach(e=>{e.source.endsWith(".tif")||e.source.endsWith(".tiff")?t("image/addOSDImage",{name:e.name,fileType:"tiled",source:e.source,function:"project",opacity:1},{root:!0}):e.source.endsWith(".dzi")?t("image/addOSDImage",{name:e.name,fileType:"dzi",source:e.source,function:"project",opacity:1},{root:!0}):t("image/addOSDImage",{name:e.name,fileType:"simple",source:e.source,function:"project",opacity:1},{root:!0})}),r.hasOwnProperty("editor")&&t("app/loadEditorConfig",r.editor,{root:!0})}catch(a){t("getAnnotation"),t("getProjectImage")}},async getArrayOfImages({commit:e}){try{await _.a.post(location.origin+"/checkForImages");const t=location.origin+"/data/images.json",a=await _.a.get(t);e("setAvailableImages",a.data)}catch(t){console.log(t)}},async saveProject({dispatch:e,rootState:t}){try{await e("annotation/refreshAnnotationState",null,{root:!0});const a=location.origin+"/save";await _.a.post(a,{editor:{activeChannel:t.image.activeChannelIndex,activeStep:t.app.activeStep,activeLayer:t.app.activeLayer,type:t.app.type,steps:t.app.setps},annotation:t.annotation.project,images:t.image.images}),e("app/activateSnackbar",{text:"Saved annotation data",color:"success"},{root:!0}),e("annotation/setSaveState",{changesSaved:!0,lastSaveTimeStamp:new Date},{root:!0})}catch(a){try{window.localStorage.setItem("annotation",JSON.stringify(t.annotation.project)),e("app/activateSnackbar",{text:"Could not reach server, data saved in browser",color:"warning"},{root:!0}),e("annotation/setSaveState",{changesSaved:!0,lastSaveTimeStamp:new Date},{root:!0})}catch(a){e("app/activateSnackbar",{text:"Annotation data could not be saved",color:"error"},{root:!0})}}},async saveAnnotation({state:e,dispatch:t,rootState:a}){try{await t("annotation/refreshAnnotationState",null,{root:!0});const o=location.origin+"/save";await _.a.post(o,{projectFilePath:e.projectFilePath,annotationData:a.annotation.project}),t("app/activateSnackbar",{text:"Saved annotation data",color:"success"},{root:!0}),t("annotation/setSaveState",{changesSaved:!0,lastSaveTimeStamp:new Date},{root:!0})}catch(o){try{window.localStorage.setItem("annotation",JSON.stringify(a.annotation.project)),t("app/activateSnackbar",{text:"Could not reach server, data saved in browser",color:"warning"},{root:!0}),t("annotation/setSaveState",{changesSaved:!0,lastSaveTimeStamp:new Date},{root:!0})}catch(o){t("app/activateSnackbar",{text:"Annotation data could not be saved",color:"error"},{root:!0})}}},async getAnnotation({state:e,dispatch:t}){const a=V.a.extname(e.projectFilePath),o=e.projectFilePath.split(a)[0],i=location.origin+"/annotations/"+o+".json";try{const e=await _.a.get(i);t("annotation/loadAnnotation",e.data,{root:!0})}catch(n){console.log("Annotation data either could not be found or could not be loaded"),console.log("Loading the default empty project"),t("annotation/loadAnnotation",null,{root:!0})}},setProjectFilePath({commit:e},t){e("setProjectFilePath",t)},async getProjectImage({state:e,rootState:t,dispatch:a}){await a("image/clearImages",null,{root:!0}),e.projectFilePath.endsWith(".tif")||e.projectFilePath.endsWith(".tiff")?a("image/addOSDImage",{name:t.image.projectImageName,fileType:"tiled",source:e.projectFilePath,function:"project",opacity:1},{root:!0}):e.projectFilePath.endsWith(".dzi")?a("image/addOSDImage",{name:t.image.projectImageName,fileType:"dzi",source:location.origin+"/images/"+e.projectFilePath,function:"project",opacity:1},{root:!0}):a("image/addOSDImage",{name:t.image.projectImageName,fileType:"simple",source:location.origin+"/images/"+e.projectFilePath,function:"project",opacity:1},{root:!0})},async getProjectImageProperties({state:e,dispatch:t}){const a=location.origin+"/images/"+e.projectFilePath.slice(0,-4)+"_files/vips-properties.xml",o=await fetch(a),i=JSON.parse(F.a.xml2json(await o.text(),{ignoreDeclaration:!0,compact:!0,ignoreComment:!0,alwaysChildren:!0,attributesKey:"attributes",textKey:"text"})),n=Number(i.image.properties.property.find(e=>{return"openslide.mpp-x"===e.name.text}).value.text),r=Number(i.image.properties.property.find(e=>{return"openslide.mpp-y"===e.name.text}).value.text);t("image/setPixelScaleFactor",{mppX:n,mppY:r},{root:!0})}},M={setAvailableImages(e,t){e.availableImages=t},setProjectFilePath(e,t){e.projectFilePath=t}};const R={availableImages:[],projectFilePath:""};var U={namespaced:!0,state:R,actions:B,mutations:M},K={loadEditorConfig:({dispatch:e},t)=>{t.hasOwnProperty("activeLayer")&&e("setActiveLayer",t.activeLayer),t.hasOwnProperty("activeChannel")&&e("image/setActiveChannel",t.activeChannel,{root:!0}),t.hasOwnProperty("steps")&&e("setSteps",t.steps),t.hasOwnProperty("activeStep")&&e("setActiveStep",t.steps[t.activeStep])},setSteps:({commit:e},t)=>{e("setSteps",t)},setTask:({commit:e},t)=>{e("setTask",t)},dismissSnackbar:({commit:e})=>{e("dismissSnackbar")},activateSnackbar:({commit:e},t)=>{e("activateSnackbar",t)},synchroniseAnnotationAndOSDCanvas:({commit:e,rootState:t})=>{e("synchroniseAnnotationAndOSDCanvas",t.image.OSDviewer)},setActiveStepAndLayer:({dispatch:e},t)=>{e("setActiveLayer",t),e("setActiveStep",t)},setActiveStep:({commit:e,dispatch:t},a)=>{"number"===typeof a.specificLayer&&t("annotation/setActiveLayer",a.specificLayer,{root:!0}),e("setActiveStep",a.id-1)},setActiveLayer:({commit:e},t)=>{e("setActiveLayer",t)},toggleSettings:({commit:e})=>{e("toggleSettings")},setActiveValidationIndex:({commit:e},t)=>{e("setActiveValidationIndex",t)},setupForValidation:({commit:e})=>{e("setupForValidation")},loadDemo:async({dispatch:e})=>{await e("synchroniseAnnotationAndOSDCanvas");const t=window.localStorage.annotation;t?await e("annotation/loadAnnotation",JSON.parse(t),{root:!0}):e("annotation/loadAnnotation",null,{root:!0}),await e("image/clearImages",null,{root:!0}),await e("image/addOSDImage",{name:"Example image",fileType:"dzi",source:"https://s3-eu-west-1.amazonaws.com/aida-example/SampleKi67.dzi",function:"project",opacity:1},{root:!0})},toggleToolsDrawer:({commit:e})=>{e("toggleToolsDrawer")},setToolsDrawerState:({commit:e},t)=>{e("setToolsDrawerState",t)},toggleStudioDrawer:({commit:e})=>{e("toggleStudioDrawer")},setStudioDrawerState:({commit:e},t)=>{e("setStudioDrawerState",t)},createNewItem:({state:e,rootState:t,commit:a},o)=>{o["studyName"]=e.studyName,o["imageName"]=t.image.projectImageName,a("createNewItem",o)}},W=a("2222"),Z=a.n(W),J={setTask:(e,t)=>{e.task=t},activateSnackbar:(e,t)=>{e.snackbar.active=!0,e.snackbar.text=t.text?t.text:"notification",e.snackbar.color=t.color?t.color:"info",e.snackbar.timeout=t.timeout?t.timeout:4e3},dismissSnackbar:e=>{e.snackbar.active=!1},synchroniseAnnotationAndOSDCanvas:(e,t)=>{t.addHandler("animation",()=>{Z.a.view.autoUpdate=!1,Z.a.project.layers.forEach(e=>{e.getItems({}).forEach(e=>{e.visible=!1})});const e=t.world.getItemAt(0),a=e.viewportToImageCoordinates(t.viewport.getCenter(!0)),o=t.viewport.getZoom(!0);Z.a.view.zoom=e.viewportToImageZoom(o),Z.a.view.center=new Z.a.Point(a.x,a.y);const i=Z.a.view.bounds;Z.a.view.itemsTree.search({minX:i.x,minY:i.y,maxX:i.x+i.width,maxY:i.y+i.height}).forEach(e=>{e.item.visible=!0}),Z.a.view.autoUpdate=!0,Z.a.view.update()}),t.addHandler("resize",(function(a){Z.a.view.autoUpdate=!1,Z.a.project.layers.forEach(e=>{e.getItems({}).forEach(e=>{e.visible=!1})});const o=t.world.getItemAt(0);Z.a.view.viewSize.width=a.newContainerSize.x,Z.a.view.viewSize.height=a.newContainerSize.y;const i=o.viewportToImageCoordinates(t.viewport.getCenter(!0));Z.a.view.center=new Z.a.Point(i.x,i.y);const n=Z.a.view.bounds;Z.a.view.itemsTree.search({minX:n.x,minY:n.y,maxX:n.x+n.width,maxY:n.y+n.height}).forEach(e=>{e.item.visible=!0});const r=Math.ceil(Z.a.view.viewSize.width*e.strokeScale/(1e3*t.viewport.getMaxZoom()));Z.a.project.getItems().forEach(e=>{e.strokeWidth=r,e.hasOwnProperty("drawLabel")&&e.drawLabel()}),Z.a.view.autoUpdate=!0,Z.a.view.update()})),t.world.addHandler("add-item",(function(a){Z.a.view.autoUpdate=!1;const o=t.world.getItemAt(0),i=document.getElementById("view");Z.a.view.viewSize.width=i.offsetWidth,Z.a.view.viewSize.height=i.offsetHeight;const n=t.viewport.getZoom(!0);Z.a.view.zoom=o.viewportToImageZoom(n);const r=o.viewportToImageCoordinates(t.viewport.getCenter(!0));Z.a.view.center=new Z.a.Point(r.x,r.y);const s=Math.ceil(Z.a.view.viewSize.width*e.strokeScale/(1e3*t.viewport.getMaxZoom()));Z.a.project.getItems().forEach(e=>{e.strokeWidth=s,e.hasOwnProperty("drawLabel")&&e.drawLabel()}),Z.a.view.autoUpdate=!0,Z.a.view.update()}))},setActiveStep:(e,t)=>{e.activeStep=t},setActiveLayer:(e,t)=>{e.activeLayer=t},toggleSettings:e=>{e.settingsFlag=!e.settingsFlag},setActiveValidationIndex:(e,t)=>{e.activeValidationIndex=t},setSteps:(e,t)=>{t?e.steps=t:(e.toolsDrawer=!1,e.studioDrawer=!1,"review"===e.task?e.steps=[{id:1,instruction:"Review the data",type:"review"}]:"validate"===e.task?e.steps=[{id:1,instruction:"Cycle through each of the predicted Megakaryocyte classifications and verify whether the prediction is correct or incorrect. In cases where you are not certain, flag the prediction for review.",type:"validate"}]:(e.toolsDrawer=!0,e.studioDrawer=!0,e.steps=null))},toggleToolsDrawer:e=>{e.toolsDrawer=!e.toolsDrawer},toggleStudioDrawer:e=>{e.studioDrawer=!e.studioDrawer},setToolsDrawerState:(e,t)=>{e.toolsDrawer=t},setStudioDrawerState:(e,t)=>{e.studioDrawer=t}},X={getStepTools:e=>{return e.steps&&e.steps[e.activeStep].tools?e.steps[e.activeStep].tools:["pan","circle","rectangle","path","pencil","polygon","paint","paste","edit","move","node","count","delete","megas","filter","super-pixel","ruler"]}};const Y={task:"",toolsDrawer:!0,studioDrawer:!0,snackbar:{active:!1,text:"this is a notification",color:"info",timeout:4e3},type:"dzi",activeChannel:0,activeLayer:0,activeStep:0,steps:null,settingsFlag:!1,activeValidationIndex:0,strokeScale:5};var H={namespaced:!0,state:Y,actions:K,mutations:J,getters:X},q={getMaxZoom:e=>{return e.OSDviewer?Math.round(e.OSDviewer.viewport.getMaxZoom()):10},getZoom:e=>{if(e.OSDviewer){let t=e.OSDviewer.viewport.getZoom();return t<100?Math.round(10*t)/10:Math.round(t)}return"na"},getImageWidth:e=>{if(e.OSDviewer)return e.OSDviewer.world.getItemCount()>0?e.OSDviewer.world.getItemAt(0).getContentSize.x:0},getChannels:e=>{const t=e.images.filter(e=>"overlay"!==e.function);return e.OSDviewer&&e.OSDviewer.world.getItemCount()>0&&t.length>0?t.map(t=>{const a=e.OSDviewer.world.getItemAt(t.index);if(a)return{channel:a,id:t.index,opacity:a.getOpacity(),name:t.name,visible:a.getOpacity()>0,opacityCache:0}}):[]}},G={addOSDImage:({commit:e},t)=>{e("addOSDImage",t)},clearImages:({commit:e})=>{e("clearImages")},setProjectImageName:({commit:e},t)=>{e("setProjectImageName",t)},setupOsdCanvas:({commit:e},t)=>{e("setupOsdCanvas",t)},resetImageState:({commit:e,rootState:t})=>{e("resetImageState",t)},setActiveChannel:({commit:e},t)=>{e("setActiveChannel",t)},setActiveChannelOpacity:({state:e},t)=>{let a=t instanceof KeyboardEvent?t.target.value/100:t/100;a=Math.min(Math.max(a,0),1);const o=e.OSDviewer.world.getItemAt(e.activeChannelIndex);o&&o.setOpacity(a)},setActiveChannelName:({commit:e},t)=>{e("setActiveChannelName",t)},setZoom:({state:e},t)=>{let a=t instanceof KeyboardEvent?Number(t.target.value):Number(t);a>0&&e.OSDviewer.viewport.zoomTo(a)},setPixelScaleFactor:({commit:e},t)=>{e("setPixelScaleFactor",t)}},$=a("aa78"),Q=a.n($),ee={setProjectImageName:(e,t)=>{e.projectImageName=t},resetImageState:e=>{e.OSDviewer.navigator.destroy(),e.OSDviewer.destroy(),e={OSDviewer:null,OSDworld:null,activeChannel:0,view:{viewSize:[null,null],imageSize:[null,null],imageCenter:[null,null],imageZoom:null},image:"",imageAccessToken:""}},setupOsdCanvas:(e,t)=>{e.OSDviewer=new Q.a.Viewer({id:t,showNavigationControl:!1,showNavigator:!0,navigatorId:"navigator",navigatorAutoResize:!1}),e.OSDviewer.addHandler("canvas-key",e=>{"KeyR"!==e.originalEvent.code&&"KeyF"!==e.originalEvent.code||(e.preventDefaultAction=!0)})},setActiveChannel:(e,t)=>{"number"===typeof t?e.activeChannelIndex=t:"string"===typeof t&&(e.activeChannelIndex=e.images.findIndex(e=>{return e.name===t}))},setActiveChannelName:(e,t)=>{t instanceof KeyboardEvent?o["a"].set(e.images[e.activeChannelIndex],"name",t.target.value):o["a"].set(e.images[e.activeChannelIndex],"name",t)},addOSDImage:(e,t)=>{"tiled"===t.fileType?_.a.get(location.origin+"/iiif").then(a=>{e.OSDviewer.addTiledImage({tileSource:new URL(encodeURIComponent(t.source)+"/info.json",a.data.toString()).toString(),opacity:t.opacity})}):"dzi"===t.fileType?e.OSDviewer.addTiledImage({tileSource:t.source,opacity:t.opacity}):"simple"===t.fileType&&e.OSDviewer.addSimpleImage({url:t.source,opacity:t.opacity}),e.images.push({...t,index:e.OSDviewer.world.getItemCount()})},clearImages:e=>{e.images=[]},setPixelScaleFactor:(e,t)=>{e.pixelScaleFactor.mppX=t.mppX,e.pixelScaleFactor.mppY=t.mppY}};const te={OSDviewer:null,OSDworld:null,activeChannelIndex:0,projectImageName:"",images:[],pixelScaleFactor:{mppX:null,mppY:null}};var ae={namespaced:!0,state:te,getters:q,actions:G,mutations:ee},oe={defaultColors(){return[{fill:{hue:170,saturation:.44,lightness:.69,alpha:.7},stroke:{hue:170,saturation:.44,lightness:.69,alpha:1}},{fill:{hue:60,saturation:1,lightness:.85,alpha:.7},stroke:{hue:60,saturation:1,lightness:.85,alpha:1}},{fill:{hue:248,saturation:.3,lightness:.79,alpha:.7},stroke:{hue:248,saturation:.3,lightness:.79,alpha:1}},{fill:{hue:6,saturation:.94,lightness:.72,alpha:.7},stroke:{hue:6,saturation:.94,lightness:.72,alpha:1}},{fill:{hue:205,saturation:.49,lightness:.66,alpha:.7},stroke:{hue:205,saturation:.49,lightness:.66,alpha:1}},{fill:{hue:32,saturation:.97,lightness:.69,alpha:.7},stroke:{hue:32,saturation:.97,lightness:.69,alpha:1}},{fill:{hue:82,saturation:.64,lightness:.64,alpha:.7},stroke:{hue:82,saturation:.64,lightness:.64,alpha:1}},{fill:{hue:329,saturation:.89,lightness:.9,alpha:.7},stroke:{hue:329,saturation:.89,lightness:.9,alpha:1}},{fill:{hue:0,saturation:0,lightness:.85,alpha:.7},stroke:{hue:0,saturation:0,lightness:.85,alpha:1}},{fill:{hue:299,saturation:.32,lightness:.62,alpha:.7},stroke:{hue:299,saturation:.32,lightness:.62,alpha:1}}]},drawItem(e){if(e){let t;if("circle"===e.type)t=new Z.a.Path.Circle({center:e.center,radius:e.radius,data:{type:"circle",countable:!0,class:e.class,data:e.data},locked:e.locked}),this.drawItemColor(t,e);else if("rectangle"===e.type)t=new Z.a.Path.Rectangle({point:[e.x,e.y],size:[e.width,e.height],data:{type:"rectangle",class:e.class,data:e.data},locked:e.locked}),this.drawItemColor(t,e);else if("path"===e.type)t=new Z.a.Path({segments:e.segments,closed:!!e.closed&&e.closed,data:{type:"path",class:e.class,data:e.data},locked:e.locked}),this.drawItemColor(t,e);else if("raster"===e.type){const a=e.hasOwnProperty("position")?new Z.a.Point(e.position.x,e.position.y):new Z.a.Point(0,0);t=new Z.a.Raster({crossOrigin:"anonymous",source:e.source,position:a,data:{type:"raster",countable:!1,class:e.class,data:e.data},locked:e.locked})}return t.strokeScaling=!1,t}},getSegments(e){let t=[];for(let a=0,o=e.segments.length;a<o;a++){const o=e.segments[a];o.hasHandles()?t.push({point:{x:o.point.x,y:o.point.y},handleIn:{x:o.handleIn.x,y:o.handleIn.y},handleOut:{x:o.handleOut.x,y:o.handleOut.y}}):t.push({point:{x:o.point.x,y:o.point.y}})}return t},getColor(e){return{fill:e.fillColor?{hue:e.fillColor.hue,saturation:e.fillColor.saturation,lightness:e.fillColor.lightness,alpha:e.fillColor.alpha}:null,stroke:e.strokeColor?{hue:e.strokeColor.hue,saturation:e.strokeColor.saturation,lightness:e.strokeColor.lightness,alpha:e.strokeColor.alpha}:null}},drawItemColor(e,t){const a=this.defaultColors();e.closed&&t.color&&t.color.fill&&("string"===typeof t.color.fill?(e.fillColor=t.color.fill,e.fillColor.alpha=.2):e.fillColor=new Z.a.Color({hue:t.color.fill.hue,saturation:t.color.fill.saturation,lightness:t.color.fill.lightness,alpha:t.color.fill.alpha})),t.color&&t.color.stroke?"string"===typeof t.color.stroke?e.strokeColor=t.color.stroke:e.strokeColor=new Z.a.Color({hue:t.color.stroke.hue,saturation:t.color.stroke.saturation,lightness:t.color.stroke.lightness,alpha:t.color.stroke.alpha}):e.strokeColor=a[e.layer.index%a.length].stroke}},ie={loadAnnotation:async({dispatch:e,commit:t},a)=>{if(Z.a.view.autoUpdate=!1,t("resetProjectState"),a){let o=[];for(const i of a.layers){await e("createLayer"),await e("setActiveLayerName",i.name),await e("setActiveLayerType",i.type);for(const a of i.items)if("overlay"===a.type)await e("image/addOSDImage",{function:"overlay",fileType:a.fileType,source:a.source,name:i.name,opacity:i.opacity},{root:!0}),await e("image/setActiveChannel",i.name,{root:!0}),t("addItemToActiveLayer",a);else{const e=oe.drawItem(a),t=e.bounds,i={minX:t.x,minY:t.y,maxX:t.x+t.width,maxY:t.y+t.height,item:e};o.push(i)}e("setActiveLayerOpacity",100*i.opacity)}Z.a.view.itemsTree.load(o),a.activeLayer&&e("setActiveLayer",a.activeLayer)}else await e("createLayer"),e("setActiveLayerName","Layer 1"),e("setActiveLayerType","paths");Z.a.view.autoUpdate=!0,Z.a.view.update()},resetAnnotationState:({commit:e})=>{e("resetAnnotationState")},refreshAnnotationState:({commit:e},t)=>{e("refreshAnnotationState",t)},prepareCanvas:({rootState:e})=>{Z.a.view.element.style.pointerEvents="auto",e.app.activeLayer&&Z.a.project.layers[e.app.activeLayer].activate()},createLayer:({commit:e})=>{e("createLayer")},setActiveLayer:({state:e,dispatch:t},a)=>{if(Z.a.project.layers[a].activate(),t("app/setActiveLayer",a,{root:!0}),"overlay"===e.project.layers[a].type){const o=e.project.layers[a].name;t("image/setActiveChannel",o,{root:!0})}},setActiveLayerOpacity:({state:e,dispatch:t,commit:a},o)=>{a("setActiveLayerOpacity",o);const i=Z.a.project.activeLayer.index;"overlay"===e.project.layers[i].type&&t("image/setActiveChannelOpacity",o,{root:!0})},setActiveLayerName:({commit:e},t)=>{e("setActiveLayerName",t)},setActiveLayerType:({commit:e},t)=>{e("setActiveLayerType",t)},deleteActiveLayer:({commit:e})=>{e("deleteActiveLayer")},setProjectName:({commit:e},t)=>{e("setProjectName",t)},setSelectedItems:({commit:e},t)=>{e("setSelectedItems",t)},drawBoundingBoxes:({commit:e},t)=>{e("drawBoundingBoxes",t)},setSaveState:({commit:e},t)=>{e("setSaveState",t)},flagAnnotationEdits:({commit:e})=>{e("setSaveState",{changesSaved:!1})}},ne={resetProjectState:e=>{o["a"].set(e,"project",{name:"An AIDA project",layers:[]})},addItemToActiveLayer:(e,t)=>{const a=e.project.layers[Z.a.project.activeLayer.index];a.items.push(t)},refreshAnnotationState:e=>{Z.a.project.layers.forEach(t=>{const a=e.project.layers[t.index];o["a"].set(e.project.layers,t.index,{name:a.name,opacity:t.opacity,type:a.type,items:a.items.filter(e=>"overlay"===e.type)})});const t=Z.a.project.getItems({className:function(e){return"Path"===e||"Raster"===e}});for(const a of t)if("circle"===a.data.type)e.project.layers[a.layer.index].items.push({class:a.data.class,type:"circle",color:oe.getColor(a),center:{x:a.position.x,y:a.position.y},radius:a.bounds.width/2,locked:a.locked,data:a.data.data});else if("rectangle"===a.data.type)e.project.layers[a.layer.index].items.push({...a.data,color:oe.getColor(a),x:a.bounds.x,y:a.bounds.y,width:a.bounds.width,height:a.bounds.height,locked:a.locked});else if("path"===a.data.type)e.project.layers[a.layer.index].items.push({class:a.data.class,type:"path",color:oe.getColor(a),segments:oe.getSegments(a),closed:a.closed,locked:a.locked,data:a.data.data});else if("imageEdit"===a.data.type){const t=a.rasterize(),o=t.toDataURL();e.project.layers[a.layer.index].items.push({class:a.data.class,type:"raster",source:o,position:{x:a.position.x,y:a.position.y},data:a.data.data})}else if("raster"===a.data.type){const t=a.layer.getItems({match:e=>{return e.locked},overlapping:a.bounds});t.unshift(a);const o=new Z.a.Group(t);o.sendToBack();const i=o.rasterize(a.resolution.height,!1),n=i.toDataURL();e.project.layers[a.layer.index].items.push({class:a.data.class,type:"raster",source:n,position:{x:a.position.x,y:a.position.y},data:a.data.data})}e.projectStateRefreshIndex=e.projectStateRefreshIndex+1},createLayer:e=>{const t=new Z.a.Layer;e.project.layers.push({name:"Layer "+(e.project.layers.length+1),opacity:t.opacity,items:[]})},setActiveLayerOpacity:(e,t)=>{let a=t instanceof KeyboardEvent?t.target.value/100:t/100;a=Math.min(Math.max(a,0),1),Z.a.project.activeLayer.opacity=a,o["a"].set(e.project.layers[Z.a.project.activeLayer.index],"opacity",a)},setActiveLayerName:(e,t)=>{const a=t instanceof KeyboardEvent?t.target.value:t;Z.a.project.activeLayer.name=a,o["a"].set(e.project.layers[Z.a.project.activeLayer.index],"name",a)},setActiveLayerType:(e,t)=>{o["a"].set(e.project.layers[Z.a.project.activeLayer.index],"type",t)},deleteActiveLayer:e=>{e.project.layers.splice(Z.a.project.activeLayer.index,1),Z.a.project.activeLayer.remove()},setProjectName:(e,t)=>{t instanceof KeyboardEvent?e.project.name=t.target.value:e.project.name=t},setSelectedItems:(e,t)=>{e.selectedItems=t},drawBoundingBoxes:(e,t)=>{const a=new Z.a.Layer({name:"Validate"});a.opacity=1,t.forEach(t=>{const a=new Z.a.Path.Rectangle({point:[t.boundingBox.x,t.boundingBox.y],size:[t.boundingBox.width,t.boundingBox.height],data:{name:t.name,type:"rectangle",predictionClass:t.class.predictionClass,predictionScore:t.class.predictionScore,validationClass:t.class.validationClass,validationScore:t.class.validationScore}});a.strokeColor=e.defaultColors[a.layer.index%e.defaultColors.length].stroke})},setSaveState:(e,t)=>{e.saveState.changesSaved=t.changesSaved,t.lastSaveTimeStamp&&(e.saveState.lastSaveTimeStamp=t.lastSaveTimeStamp)}},re={getColor:(e,t,a)=>{let o=a.app.activeLayer;return e.defaultColors[o%e.defaultColors.length]},getItemsForValidation:e=>{let t=e.project.layers.filter(e=>"Validate"===e.name);return t.length>0?t[0].items:[]}};const se={project:{name:"An AIDA project",layers:[]},projectStateRefreshIndex:0,selectedItems:[],currentColor:null,defaultColors:oe.defaultColors(),saveState:{changesSaved:!0,lastSaveTimeStamp:null}};var ce={namespaced:!0,state:se,getters:re,actions:ie,mutations:ne};o["a"].use(T["a"]);var le=new T["a"].Store({modules:{backend:U,app:H,image:ae,annotation:ce}}),de=a("f309");o["a"].use(de["a"]);var pe=new de["a"]({icons:{iconfont:"mdi"}});o["a"].config.productionTip=!1,new o["a"]({router:P,store:le,vuetify:pe,render:function(e){return e(g)}}).$mount("#app")},e1cf:function(e,t,a){"use strict";var o=a("74cf"),i=a.n(o);i.a}});
//# sourceMappingURL=app.94b9b216.js.map