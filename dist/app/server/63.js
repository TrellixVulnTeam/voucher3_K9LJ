exports.ids=[63],exports.modules={STjf:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_ripple_effect",function(){return RippleEffect});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("wEJo"),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("E/Mt");const RippleEffect=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.type="bounded"}async addRipple(x,y){return new Promise(resolve=>{Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(()=>{const rect=this.el.getBoundingClientRect(),width=rect.width,height=rect.height,hypotenuse=Math.sqrt(width*width+height*height),maxDim=Math.max(height,width),maxRadius=this.unbounded?maxDim:hypotenuse+PADDING,initialSize=Math.floor(maxDim*INITIAL_ORIGIN_SCALE),finalScale=maxRadius/initialSize;let posX=x-rect.left,posY=y-rect.top;this.unbounded&&(posX=.5*width,posY=.5*height);const styleX=posX-.5*initialSize,styleY=posY-.5*initialSize,moveX=.5*width-posX,moveY=.5*height-posY;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)(()=>{const div=document.createElement("div");div.classList.add("ripple-effect");const style=div.style;style.top=styleY+"px",style.left=styleX+"px",style.width=style.height=initialSize+"px",style.setProperty("--final-scale",`${finalScale}`),style.setProperty("--translate-end",`${moveX}px, ${moveY}px`);(this.el.shadowRoot||this.el).appendChild(div),setTimeout(()=>{resolve(()=>{removeRipple(div)})},325)})})})}get unbounded(){return"unbounded"===this.type}render(){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{role:"presentation",class:{[mode]:!0,unbounded:this.unbounded}})}get el(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.k)(this)}},removeRipple=ripple=>{ripple.classList.add("fade-out"),setTimeout(()=>{ripple.remove()},200)},PADDING=10,INITIAL_ORIGIN_SCALE=.5;RippleEffect.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}};