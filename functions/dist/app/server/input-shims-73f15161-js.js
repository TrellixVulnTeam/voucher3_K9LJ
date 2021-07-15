exports.ids=[8],exports.modules={"3Iwd":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startInputShims",function(){return startInputShims});var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("1vRN");const cloneMap=new WeakMap,relocateInput=(componentEl,inputEl,shouldRelocate,inputRelativeY=0)=>{cloneMap.has(componentEl)!==shouldRelocate&&(shouldRelocate?addClone(componentEl,inputEl,inputRelativeY):removeClone(componentEl,inputEl))},isFocused=input=>input===input.getRootNode().activeElement,addClone=(componentEl,inputEl,inputRelativeY)=>{const parentEl=inputEl.parentNode,clonedEl=inputEl.cloneNode(!1);clonedEl.classList.add("cloned-input"),clonedEl.tabIndex=-1,parentEl.appendChild(clonedEl),cloneMap.set(componentEl,clonedEl);const tx="rtl"===componentEl.ownerDocument.dir?9999:-9999;componentEl.style.pointerEvents="none",inputEl.style.transform=`translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`},removeClone=(componentEl,inputEl)=>{const clone=cloneMap.get(componentEl);clone&&(cloneMap.delete(componentEl),clone.remove()),componentEl.style.pointerEvents="",inputEl.style.transform=""},SKIP_SELECTOR="input, textarea, [no-blur], [contenteditable]",calcScrollData=(inputRect,contentRect,keyboardHeight,platformHeight)=>{const inputTop=inputRect.top,inputBottom=inputRect.bottom,visibleAreaTop=contentRect.top,safeAreaTop=visibleAreaTop+15,distanceToBottom=.75*Math.min(contentRect.bottom,platformHeight-keyboardHeight)-inputBottom,distanceToTop=safeAreaTop-inputTop,desiredScrollAmount=Math.round(distanceToBottom<0?-distanceToBottom:distanceToTop>0?-distanceToTop:0),scrollAmount=Math.min(desiredScrollAmount,inputTop-visibleAreaTop),duration=Math.abs(scrollAmount)/.3;return{scrollAmount:scrollAmount,scrollDuration:Math.min(400,Math.max(150,duration)),scrollPadding:keyboardHeight,inputSafeY:4-(inputTop-safeAreaTop)}},jsSetFocus=async(componentEl,inputEl,contentEl,footerEl,keyboardHeight)=>{if(!contentEl&&!footerEl)return;const scrollData=((componentEl,contentEl,keyboardHeight)=>{const itemEl=componentEl.closest("ion-item,[ion-item]")||componentEl;return calcScrollData(itemEl.getBoundingClientRect(),contentEl.getBoundingClientRect(),keyboardHeight,componentEl.ownerDocument.defaultView.innerHeight)})(componentEl,contentEl||footerEl,keyboardHeight);if(contentEl&&Math.abs(scrollData.scrollAmount)<4)inputEl.focus();else if(relocateInput(componentEl,inputEl,!0,scrollData.inputSafeY),inputEl.focus(),Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.q)(()=>componentEl.click()),"undefined"!=typeof window){let scrollContentTimeout;const scrollContent=async()=>{void 0!==scrollContentTimeout&&clearTimeout(scrollContentTimeout),window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.removeEventListener("ionKeyboardDidShow",scrollContent),contentEl&&await contentEl.scrollByPoint(0,scrollData.scrollAmount,scrollData.scrollDuration),relocateInput(componentEl,inputEl,!1,scrollData.inputSafeY),inputEl.focus()},doubleKeyboardEventListener=()=>{window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.addEventListener("ionKeyboardDidShow",scrollContent)};if(contentEl){const scrollEl=await contentEl.getScrollElement(),totalScrollAmount=scrollEl.scrollHeight-scrollEl.clientHeight;if(scrollData.scrollAmount>totalScrollAmount-scrollEl.scrollTop)return"password"===inputEl.type?(scrollData.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",doubleKeyboardEventListener)):window.addEventListener("ionKeyboardDidShow",scrollContent),void(scrollContentTimeout=setTimeout(scrollContent,1e3))}scrollContent()}},hasPointerMoved=(threshold,startCoord,endCoord)=>{if(startCoord&&endCoord){const deltaX=startCoord.x-endCoord.x,deltaY=startCoord.y-endCoord.y;return deltaX*deltaX+deltaY*deltaY>threshold*threshold}return!1},setScrollPadding=(input,keyboardHeight)=>{if("INPUT"!==input.tagName)return;if(input.parentElement&&"ION-INPUT"===input.parentElement.tagName)return;if(input.parentElement&&input.parentElement.parentElement&&"ION-SEARCHBAR"===input.parentElement.parentElement.tagName)return;const el=input.closest("ion-content");if(null===el)return;const timer=el.$ionPaddingTimer;timer&&clearTimeout(timer),keyboardHeight>0?el.style.setProperty("--keyboard-offset",`${keyboardHeight}px`):el.$ionPaddingTimer=setTimeout(()=>{el.style.setProperty("--keyboard-offset","0px")},120)},startInputShims=config=>{const doc=document,keyboardHeight=config.getNumber("keyboardHeight",290),scrollAssist=config.getBoolean("scrollAssist",!0),hideCaret=config.getBoolean("hideCaretOnScroll",!0),inputBlurring=config.getBoolean("inputBlurring",!0),scrollPadding=config.getBoolean("scrollPadding",!0),inputs=Array.from(doc.querySelectorAll("ion-input, ion-textarea")),hideCaretMap=new WeakMap,scrollAssistMap=new WeakMap,registerInput=async componentEl=>{await new Promise(resolve=>Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(componentEl,resolve));const inputRoot=componentEl.shadowRoot||componentEl,inputEl=inputRoot.querySelector("input")||inputRoot.querySelector("textarea"),scrollEl=componentEl.closest("ion-content"),footerEl=scrollEl?null:componentEl.closest("ion-footer");if(inputEl){if(scrollEl&&hideCaret&&!hideCaretMap.has(componentEl)){const rmFn=((componentEl,inputEl,scrollEl)=>{if(!scrollEl||!inputEl)return()=>{};const scrollHideCaret=shouldHideCaret=>{isFocused(inputEl)&&relocateInput(componentEl,inputEl,shouldHideCaret)},onBlur=()=>relocateInput(componentEl,inputEl,!1),hideCaret=()=>scrollHideCaret(!0),showCaret=()=>scrollHideCaret(!1);return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.a)(scrollEl,"ionScrollStart",hideCaret),Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.a)(scrollEl,"ionScrollEnd",showCaret),inputEl.addEventListener("blur",onBlur),()=>{Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.b)(scrollEl,"ionScrollStart",hideCaret),Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.b)(scrollEl,"ionScrollEnd",showCaret),inputEl.addEventListener("ionBlur",onBlur)}})(componentEl,inputEl,scrollEl);hideCaretMap.set(componentEl,rmFn)}if((scrollEl||footerEl)&&scrollAssist&&!scrollAssistMap.has(componentEl)){const rmFn=((componentEl,inputEl,contentEl,footerEl,keyboardHeight)=>{let coord;const touchStart=ev=>{coord=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.p)(ev)},touchEnd=ev=>{if(!coord)return;const endCoord=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.p)(ev);hasPointerMoved(6,coord,endCoord)||isFocused(inputEl)||(ev.stopPropagation(),jsSetFocus(componentEl,inputEl,contentEl,footerEl,keyboardHeight))};return componentEl.addEventListener("touchstart",touchStart,!0),componentEl.addEventListener("touchend",touchEnd,!0),()=>{componentEl.removeEventListener("touchstart",touchStart,!0),componentEl.removeEventListener("touchend",touchEnd,!0)}})(componentEl,inputEl,scrollEl,footerEl,keyboardHeight);scrollAssistMap.set(componentEl,rmFn)}}};inputBlurring&&(()=>{let focused=!0,didScroll=!1;const doc=document,onScroll=()=>{didScroll=!0},onFocusin=()=>{focused=!0},onTouchend=ev=>{if(didScroll)return void(didScroll=!1);const active=doc.activeElement;if(!active)return;if(active.matches(SKIP_SELECTOR))return;const tapped=ev.target;tapped!==active&&(tapped.matches(SKIP_SELECTOR)||tapped.closest(SKIP_SELECTOR)||(focused=!1,setTimeout(()=>{focused||active.blur()},50)))};Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.a)(doc,"ionScrollStart",onScroll),doc.addEventListener("focusin",onFocusin,!0),doc.addEventListener("touchend",onTouchend,!1)})(),scrollPadding&&(keyboardHeight=>{const doc=document,onFocusin=ev=>{setScrollPadding(ev.target,keyboardHeight)},onFocusout=ev=>{setScrollPadding(ev.target,0)};doc.addEventListener("focusin",onFocusin),doc.addEventListener("focusout",onFocusout)})(keyboardHeight);for(const input of inputs)registerInput(input);doc.addEventListener("ionInputDidLoad",ev=>{registerInput(ev.detail)}),doc.addEventListener("ionInputDidUnload",ev=>{(componentEl=>{if(hideCaret){const fn=hideCaretMap.get(componentEl);fn&&fn(),hideCaretMap.delete(componentEl)}if(scrollAssist){const fn=scrollAssistMap.get(componentEl);fn&&fn(),scrollAssistMap.delete(componentEl)}})(ev.detail)})}}};