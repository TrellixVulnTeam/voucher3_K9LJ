exports.ids=[11],exports.modules={IYAk:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"createSwipeBackGesture",function(){return createSwipeBackGesture});var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("1vRN"),_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("iWo5");__webpack_require__("y08P");const createSwipeBackGesture=(el,canStartHandler,onStartHandler,onMoveHandler,onEndHandler)=>{const win=el.ownerDocument.defaultView;return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__.createGesture)({el:el,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:detail=>detail.startX<=50&&canStartHandler(),onStart:onStartHandler,onMove:detail=>{const stepValue=detail.deltaX/win.innerWidth;onMoveHandler(stepValue)},onEnd:detail=>{const delta=detail.deltaX,width=win.innerWidth,stepValue=delta/width,velocity=detail.velocityX,z=width/2,shouldComplete=velocity>=0&&(velocity>.2||detail.deltaX>z),missingDistance=(shouldComplete?1-stepValue:stepValue)*width;let realDur=0;if(missingDistance>5){const dur=missingDistance/Math.abs(velocity);realDur=Math.min(dur,540)}onEndHandler(shouldComplete,stepValue<=0?.01:Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.j)(0,stepValue,.9999),realDur)}})}}};