exports.ids=[1],exports.modules={Tsnu:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startFocusVisible",function(){return startFocusVisible});const FOCUS_KEYS=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],startFocusVisible=()=>{let currentFocus=[],keyboardMode=!0;const doc=document,setFocus=elements=>{currentFocus.forEach(el=>el.classList.remove("ion-focused")),elements.forEach(el=>el.classList.add("ion-focused")),currentFocus=elements},pointerDown=()=>{keyboardMode=!1,setFocus([])};doc.addEventListener("keydown",ev=>{keyboardMode=FOCUS_KEYS.includes(ev.key),keyboardMode||setFocus([])}),doc.addEventListener("focusin",ev=>{if(keyboardMode&&ev.composedPath){const toFocus=ev.composedPath().filter(el=>!!el.classList&&el.classList.contains("ion-focusable"));setFocus(toFocus)}}),doc.addEventListener("focusout",()=>{doc.activeElement===doc.body&&setFocus([])}),doc.addEventListener("touchstart",pointerDown),doc.addEventListener("mousedown",pointerDown)}}};