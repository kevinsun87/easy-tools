import{c as e}from"./index-B3sKL47p.js";import{c as t,u as n,g as o,aB as s,o as r,j as a,a as u,m as c,aY as d,w as i,A as l,n as f,i as p}from"./index-CyyLRP8W.js";import{_ as v}from"./plugin-vue_export-helper-O3gUY6pX.js";import{E as m}from"./aria-BUADUvnR.js";import{c as E,m as y}from"./types-Ci7ev57k.js";const w={prefix:Math.floor(1e4*Math.random()),current:0},h=Symbol("elIdInjection"),L=()=>o()?s(h,w):w,T=o=>{const s=L(),r=e();return t((()=>n(o)||`${r.value}-id-${s.prefix}-${s.current++}`))};let b=[];const g=e=>{const t=e;t.key===m.esc&&b.forEach((e=>e(t)))},F="focus-trap.focus-after-trapped",R="focus-trap.focus-after-released",k={cancelable:!0,bubbles:!1},S={cancelable:!0,bubbles:!1},I="focusAfterTrapped",K="focusAfterReleased",N=Symbol("elFocusTrap"),P=u(),j=u(0),x=u(0);let _=0;const A=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},C=(e,t)=>{for(const n of e)if(!O(n,t))return n},O=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},B=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),x.value=window.performance.now(),e!==n&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t&&e.select()}};function M(e,t){const n=[...e],o=e.indexOf(t);return-1!==o&&n.splice(o,1),n}const $=(()=>{let e=[];return{push:t=>{const n=e[0];n&&t!==n&&n.pause(),e=M(e,t),e.unshift(t)},remove:t=>{var n,o;e=M(e,t),null==(o=null==(n=e[0])?void 0:n.resume)||o.call(n)}}})(),D=()=>{P.value="pointer",j.value=window.performance.now()},q=()=>{P.value="keyboard",j.value=window.performance.now()},H=e=>new CustomEvent("focus-trap.focusout-prevented",{...S,detail:e});var U=v(c({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[I,K,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const o=u();let s,c;const{focusReason:l}=(r((()=>{0===_&&(document.addEventListener("mousedown",D),document.addEventListener("touchstart",D),document.addEventListener("keydown",q)),_++})),a((()=>{_--,_<=0&&(document.removeEventListener("mousedown",D),document.removeEventListener("touchstart",D),document.removeEventListener("keydown",q))})),{focusReason:P,lastUserFocusTimestamp:j,lastAutomatedFocusTimestamp:x});var v;v=n=>{e.trapped&&!w.paused&&t("release-requested",n)},r((()=>{0===b.length&&document.addEventListener("keydown",g),E&&b.push(v)})),a((()=>{b=b.filter((e=>e!==v)),0===b.length&&E&&document.removeEventListener("keydown",g)}));const w={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},h=n=>{if(!e.loop&&!e.trapped)return;if(w.paused)return;const{key:o,altKey:s,ctrlKey:r,metaKey:a,currentTarget:u,shiftKey:c}=n,{loop:d}=e,i=o===m.tab&&!s&&!r&&!a,f=document.activeElement;if(i&&f){const e=u,[o,s]=(e=>{const t=A(e);return[C(t,e),C(t.reverse(),e)]})(e);if(o&&s)if(c||f!==s){if(c&&[o,e].includes(f)){const e=H({focusReason:l.value});t("focusout-prevented",e),e.defaultPrevented||(n.preventDefault(),d&&B(s,!0))}}else{const e=H({focusReason:l.value});t("focusout-prevented",e),e.defaultPrevented||(n.preventDefault(),d&&B(o,!0))}else if(f===e){const e=H({focusReason:l.value});t("focusout-prevented",e),e.defaultPrevented||n.preventDefault()}}};d(N,{focusTrapRef:o,onKeydown:h}),i((()=>e.focusTrapEl),(e=>{e&&(o.value=e)}),{immediate:!0}),i([o],(([e],[t])=>{e&&(e.addEventListener("keydown",h),e.addEventListener("focusin",S),e.addEventListener("focusout",O)),t&&(t.removeEventListener("keydown",h),t.removeEventListener("focusin",S),t.removeEventListener("focusout",O))}));const L=e=>{t(I,e)},T=e=>t(K,e),S=r=>{const a=n(o);if(!a)return;const u=r.target,d=r.relatedTarget,i=u&&a.contains(u);if(!e.trapped){d&&a.contains(d)||(s=d)}i&&t("focusin",r),w.paused||e.trapped&&(i?c=u:B(c,!0))},O=s=>{const r=n(o);if(!w.paused&&r)if(e.trapped){const n=s.relatedTarget;y(n)||r.contains(n)||setTimeout((()=>{if(!w.paused&&e.trapped){const e=H({focusReason:l.value});t("focusout-prevented",e),e.defaultPrevented||B(c,!0)}}),0)}else{const e=s.target;e&&r.contains(e)||t("focusout",s)}};async function M(){await f();const t=n(o);if(t){$.push(w);const n=t.contains(document.activeElement)?s:document.activeElement;s=n;if(!t.contains(n)){const o=new Event(F,k);t.addEventListener(F,L),t.dispatchEvent(o),o.defaultPrevented||f((()=>{let o=e.focusStartEl;p(o)||(B(o),document.activeElement!==o&&(o="first")),"first"===o&&((e,t=!1)=>{const n=document.activeElement;for(const o of e)if(B(o,t),document.activeElement!==n)return})(A(t),!0),document.activeElement!==n&&"container"!==o||B(t)}))}}}function U(){const e=n(o);if(e){e.removeEventListener(F,L);const t=new CustomEvent(R,{...k,detail:{focusReason:l.value}});e.addEventListener(R,T),e.dispatchEvent(t),t.defaultPrevented||"keyboard"!=l.value&&j.value>x.value&&!e.contains(document.activeElement)||B(null!=s?s:document.body),e.removeEventListener(R,T),$.remove(w)}}return r((()=>{e.trapped&&M(),i((()=>e.trapped),(e=>{e?M():U()}))})),a((()=>{e.trapped&&U()})),{onKeydown:h}}}),[["render",function(e,t,n,o,s,r){return l(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","focus-trap.vue"]]);export{U as E,N as F,L as a,T as u};