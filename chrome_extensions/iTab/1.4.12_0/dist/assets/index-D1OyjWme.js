import{e,d as t,f as o,c as n,b as r,u as a}from"./index-B3sKL47p.js";import{_ as i,w as s}from"./plugin-vue_export-helper-O3gUY6pX.js";import{g as l,c as u,d as p,w as f,o as c,u as d,s as v,a as g,j as m,aN as h,aY as y,m as b,A as w,aB as x,p as O,q as R,z as A,C as T,N as E,v as j,a8 as C,bJ as S,F as k,$ as P,Q as M,I as B,G as F,H as _,K as L,J as D,k as I,bi as H,x as $,a1 as N,Z as W,b1 as q,aP as z,B as U}from"./index-CyyLRP8W.js";import{c as V,l as K,t as Z,g as J,j as Y,m as G}from"./types-Ci7ev57k.js";import{u as X}from"./index-kxe6IHwf.js";import{E as Q}from"./aria-BUADUvnR.js";import{f as ee,o as te}from"./index-BrMlOSMZ.js";import{a as oe,E as ne,u as re}from"./focus-trap-D8QWET1-.js";import{i as ae}from"./isUndefined-DgmxjSXK.js";import{u as ie}from"./index-CB1eEFAV.js";import{a as se}from"./constants-Dnj8X3EN.js";const le=(e,t,{checkForDefaultPrevented:o=!0}={})=>n=>{const r=null==e?void 0:e(n);if(!1===o||!r)return null==t?void 0:t(n)},ue=e({type:t(Boolean),default:null}),pe=e({type:t(Function)}),fe=e=>{const t=`update:${e}`,o=`onUpdate:${e}`,n=[t];return{useModelToggle:({indicator:n,toggleReason:r,shouldHideWhenRouteChanges:a,shouldProceed:i,onShow:s,onHide:d})=>{const v=l(),{emit:g}=v,m=v.props,h=u((()=>p(m[o]))),y=u((()=>null===m[e])),b=e=>{!0!==n.value&&(n.value=!0,r&&(r.value=e),p(s)&&s(e))},w=e=>{!1!==n.value&&(n.value=!1,r&&(r.value=e),p(d)&&d(e))},x=e=>{if(!0===m.disabled||p(i)&&!i())return;const o=h.value&&V;o&&g(t,!0),!y.value&&o||b(e)},O=e=>{if(!0===m.disabled||!V)return;const o=h.value&&V;o&&g(t,!1),!y.value&&o||w(e)},R=e=>{K(e)&&(m.disabled&&e?h.value&&g(t,!1):n.value!==e&&(e?b():w()))};return f((()=>m[e]),R),a&&void 0!==v.appContext.config.globalProperties.$route&&f((()=>({...v.proxy.$route})),(()=>{a.value&&n.value&&O()})),c((()=>{R(m[e])})),{hide:O,show:x,toggle:()=>{n.value?O():x()},hasUpdateHandler:h}},useModelToggleProps:{[e]:ue,[o]:pe},useModelToggleEmits:n}};fe("modelValue");var ce="top",de="bottom",ve="right",ge="left",me="auto",he=[ce,de,ve,ge],ye="start",be="end",we="clippingParents",xe="viewport",Oe="popper",Re="reference",Ae=he.reduce((function(e,t){return e.concat([t+"-"+ye,t+"-"+be])}),[]),Te=[].concat(he,[me]).reduce((function(e,t){return e.concat([t,t+"-"+ye,t+"-"+be])}),[]),Ee=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function je(e){return e?(e.nodeName||"").toLowerCase():null}function Ce(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Se(e){return e instanceof Ce(e).Element||e instanceof Element}function ke(e){return e instanceof Ce(e).HTMLElement||e instanceof HTMLElement}function Pe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Ce(e).ShadowRoot||e instanceof ShadowRoot)}var Me={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];!ke(r)||!je(r)||(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});!ke(n)||!je(n)||(Object.assign(n.style,a),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Be(e){return e.split("-")[0]}var Fe=Math.max,_e=Math.min,Le=Math.round;function De(e,t){void 0===t&&(t=!1);var o=e.getBoundingClientRect(),n=1,r=1;if(ke(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(n=Le(o.width)/i||1),a>0&&(r=Le(o.height)/a||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function Ie(e){var t=De(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function He(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&Pe(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function $e(e){return Ce(e).getComputedStyle(e)}function Ne(e){return["table","td","th"].indexOf(je(e))>=0}function We(e){return((Se(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return"html"===je(e)?e:e.assignedSlot||e.parentNode||(Pe(e)?e.host:null)||We(e)}function ze(e){return ke(e)&&"fixed"!==$e(e).position?e.offsetParent:null}function Ue(e){for(var t=Ce(e),o=ze(e);o&&Ne(o)&&"static"===$e(o).position;)o=ze(o);return o&&("html"===je(o)||"body"===je(o)&&"static"===$e(o).position)?t:o||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&ke(e)&&"fixed"===$e(e).position)return null;var o=qe(e);for(Pe(o)&&(o=o.host);ke(o)&&["html","body"].indexOf(je(o))<0;){var n=$e(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}function Ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ke(e,t,o){return Fe(e,_e(t,o))}function Ze(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Je(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}var Ye={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,r=e.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,s=Be(o.placement),l=Ve(s),u=[ge,ve].indexOf(s)>=0?"height":"width";if(a&&i){var p=function(e,t){return Ze("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Je(e,he))}(r.padding,o),f=Ie(a),c="y"===l?ce:ge,d="y"===l?de:ve,v=o.rects.reference[u]+o.rects.reference[l]-i[l]-o.rects.popper[u],g=i[l]-o.rects.reference[l],m=Ue(a),h=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,y=v/2-g/2,b=p[c],w=h-f[u]-p[d],x=h/2-f[u]/2+y,O=Ke(b,x,w),R=l;o.modifiersData[n]=((t={})[R]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"==typeof n&&!(n=t.elements.popper.querySelector(n))||!He(t.elements.popper,n)||(t.elements.arrow=n))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ge(e){return e.split("-")[1]}var Xe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qe(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,v=i.y,g=void 0===v?0:v,m="function"==typeof p?p({x:d,y:g}):{x:d,y:g};d=m.x,g=m.y;var h=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),b=ge,w=ce,x=window;if(u){var O=Ue(o),R="clientHeight",A="clientWidth";if(O===Ce(o)&&("static"!==$e(O=We(o)).position&&"absolute"===s&&(R="scrollHeight",A="scrollWidth")),r===ce||(r===ge||r===ve)&&a===be)w=de,g-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[R])-n.height,g*=l?1:-1;if(r===ge||(r===ce||r===de)&&a===be)b=ve,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-n.width,d*=l?1:-1}var T,E=Object.assign({position:s},u&&Xe),j=!0===p?function(e){var t=e.x,o=e.y,n=window.devicePixelRatio||1;return{x:Le(t*n)/n||0,y:Le(o*n)/n||0}}({x:d,y:g}):{x:d,y:g};return d=j.x,g=j.y,l?Object.assign({},E,((T={})[w]=y?"0":"",T[b]=h?"0":"",T.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",T)):Object.assign({},E,((t={})[w]=y?g+"px":"",t[b]=h?d+"px":"",t.transform="",t))}var et={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,a=o.adaptive,i=void 0===a||a,s=o.roundOffsets,l=void 0===s||s,u={placement:Be(t.placement),variation:Ge(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},tt={passive:!0};var ot={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=void 0===r||r,i=n.resize,s=void 0===i||i,l=Ce(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",o.update,tt)})),s&&l.addEventListener("resize",o.update,tt),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",o.update,tt)})),s&&l.removeEventListener("resize",o.update,tt)}},data:{}},nt={left:"right",right:"left",bottom:"top",top:"bottom"};function rt(e){return e.replace(/left|right|bottom|top/g,(function(e){return nt[e]}))}var at={start:"end",end:"start"};function it(e){return e.replace(/start|end/g,(function(e){return at[e]}))}function st(e){var t=Ce(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function lt(e){return De(We(e)).left+st(e).scrollLeft}function ut(e){var t=$e(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function pt(e){return["html","body","#document"].indexOf(je(e))>=0?e.ownerDocument.body:ke(e)&&ut(e)?e:pt(qe(e))}function ft(e,t){var o;void 0===t&&(t=[]);var n=pt(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),a=Ce(n),i=r?[a].concat(a.visualViewport||[],ut(n)?n:[]):n,s=t.concat(i);return r?s:s.concat(ft(qe(i)))}function ct(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function dt(e,t){return t===xe?ct(function(e){var t=Ce(e),o=We(e),n=t.visualViewport,r=o.clientWidth,a=o.clientHeight,i=0,s=0;return n&&(r=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,s=n.offsetTop)),{width:r,height:a,x:i+lt(e),y:s}}(e)):Se(t)?function(e){var t=De(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ct(function(e){var t,o=We(e),n=st(e),r=null==(t=e.ownerDocument)?void 0:t.body,a=Fe(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Fe(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+lt(e),l=-n.scrollTop;return"rtl"===$e(r||o).direction&&(s+=Fe(o.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(We(e)))}function vt(e,t,o){var n="clippingParents"===t?function(e){var t=ft(qe(e)),o=["absolute","fixed"].indexOf($e(e).position)>=0&&ke(e)?Ue(e):e;return Se(o)?t.filter((function(e){return Se(e)&&He(e,o)&&"body"!==je(e)})):[]}(e):[].concat(t),r=[].concat(n,[o]),a=r[0],i=r.reduce((function(t,o){var n=dt(e,o);return t.top=Fe(n.top,t.top),t.right=_e(n.right,t.right),t.bottom=_e(n.bottom,t.bottom),t.left=Fe(n.left,t.left),t}),dt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function gt(e){var t,o=e.reference,n=e.element,r=e.placement,a=r?Be(r):null,i=r?Ge(r):null,s=o.x+o.width/2-n.width/2,l=o.y+o.height/2-n.height/2;switch(a){case ce:t={x:s,y:o.y-n.height};break;case de:t={x:s,y:o.y+o.height};break;case ve:t={x:o.x+o.width,y:l};break;case ge:t={x:o.x-n.width,y:l};break;default:t={x:o.x,y:o.y}}var u=a?Ve(a):null;if(null!=u){var p="y"===u?"height":"width";switch(i){case ye:t[u]=t[u]-(o[p]/2-n[p]/2);break;case be:t[u]=t[u]+(o[p]/2-n[p]/2)}}return t}function mt(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=void 0===n?e.placement:n,a=o.boundary,i=void 0===a?we:a,s=o.rootBoundary,l=void 0===s?xe:s,u=o.elementContext,p=void 0===u?Oe:u,f=o.altBoundary,c=void 0!==f&&f,d=o.padding,v=void 0===d?0:d,g=Ze("number"!=typeof v?v:Je(v,he)),m=p===Oe?Re:Oe,h=e.rects.popper,y=e.elements[c?m:p],b=vt(Se(y)?y:y.contextElement||We(e.elements.popper),i,l),w=De(e.elements.reference),x=gt({reference:w,element:h,strategy:"absolute",placement:r}),O=ct(Object.assign({},h,x)),R=p===Oe?O:w,A={top:b.top-R.top+g.top,bottom:R.bottom-b.bottom+g.bottom,left:b.left-R.left+g.left,right:R.right-b.right+g.right},T=e.modifiersData.offset;if(p===Oe&&T){var E=T[r];Object.keys(A).forEach((function(e){var t=[ve,de].indexOf(e)>=0?1:-1,o=[ce,de].indexOf(e)>=0?"y":"x";A[e]+=E[o]*t}))}return A}var ht={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,a=void 0===r||r,i=o.altAxis,s=void 0===i||i,l=o.fallbackPlacements,u=o.padding,p=o.boundary,f=o.rootBoundary,c=o.altBoundary,d=o.flipVariations,v=void 0===d||d,g=o.allowedAutoPlacements,m=t.options.placement,h=Be(m),y=l||(h===m||!v?[rt(m)]:function(e){if(Be(e)===me)return[];var t=rt(e);return[it(e),t,it(t)]}(m)),b=[m].concat(y).reduce((function(e,o){return e.concat(Be(o)===me?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=o.boundary,a=o.rootBoundary,i=o.padding,s=o.flipVariations,l=o.allowedAutoPlacements,u=void 0===l?Te:l,p=Ge(n),f=p?s?Ae:Ae.filter((function(e){return Ge(e)===p})):he,c=f.filter((function(e){return u.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,o){return t[o]=mt(e,{placement:o,boundary:r,rootBoundary:a,padding:i})[Be(o)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:o,boundary:p,rootBoundary:f,padding:u,flipVariations:v,allowedAutoPlacements:g}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,A=b[0],T=0;T<b.length;T++){var E=b[T],j=Be(E),C=Ge(E)===ye,S=[ce,de].indexOf(j)>=0,k=S?"width":"height",P=mt(t,{placement:E,boundary:p,rootBoundary:f,altBoundary:c,padding:u}),M=S?C?ve:ge:C?de:ce;w[k]>x[k]&&(M=rt(M));var B=rt(M),F=[];if(a&&F.push(P[j]<=0),s&&F.push(P[M]<=0,P[B]<=0),F.every((function(e){return e}))){A=E,R=!1;break}O.set(E,F)}if(R)for(var _=function(e){var t=b.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},L=v?3:1;L>0;L--){if("break"===_(L))break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function yt(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function bt(e){return[ce,ve,de,ge].some((function(t){return e[t]>=0}))}var wt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=mt(t,{elementContext:"reference"}),s=mt(t,{altBoundary:!0}),l=yt(i,n),u=yt(s,r,a),p=bt(l),f=bt(u);t.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}};var xt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=void 0===r?[0,0]:r,i=Te.reduce((function(e,o){return e[o]=function(e,t,o){var n=Be(e),r=[ge,ce].indexOf(n)>=0?-1:1,a="function"==typeof o?o(Object.assign({},t,{placement:e})):o,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[ge,ve].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}(o,t.rects,a),e}),{}),s=i[t.placement],l=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=i}};var Ot={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=gt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Rt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,a=void 0===r||r,i=o.altAxis,s=void 0!==i&&i,l=o.boundary,u=o.rootBoundary,p=o.altBoundary,f=o.padding,c=o.tether,d=void 0===c||c,v=o.tetherOffset,g=void 0===v?0:v,m=mt(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:p}),h=Be(t.placement),y=Ge(t.placement),b=!y,w=Ve(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,R=t.rects.reference,A=t.rects.popper,T="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,E="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(O){if(a){var S,k="y"===w?ce:ge,P="y"===w?de:ve,M="y"===w?"height":"width",B=O[w],F=B+m[k],_=B-m[P],L=d?-A[M]/2:0,D=y===ye?R[M]:A[M],I=y===ye?-A[M]:-R[M],H=t.elements.arrow,$=d&&H?Ie(H):{width:0,height:0},N=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},W=N[k],q=N[P],z=Ke(0,R[M],$[M]),U=b?R[M]/2-L-z-W-E.mainAxis:D-z-W-E.mainAxis,V=b?-R[M]/2+L+z+q+E.mainAxis:I+z+q+E.mainAxis,K=t.elements.arrow&&Ue(t.elements.arrow),Z=K?"y"===w?K.clientTop||0:K.clientLeft||0:0,J=null!=(S=null==j?void 0:j[w])?S:0,Y=B+V-J,G=Ke(d?_e(F,B+U-J-Z):F,B,d?Fe(_,Y):_);O[w]=G,C[w]=G-B}if(s){var X,Q="x"===w?ce:ge,ee="x"===w?de:ve,te=O[x],oe="y"===x?"height":"width",ne=te+m[Q],re=te-m[ee],ae=-1!==[ce,ge].indexOf(h),ie=null!=(X=null==j?void 0:j[x])?X:0,se=ae?ne:te-R[oe]-A[oe]-ie+E.altAxis,le=ae?te+R[oe]+A[oe]-ie-E.altAxis:re,ue=d&&ae?function(e,t,o){var n=Ke(e,t,o);return n>o?o:n}(se,te,le):Ke(d?se:ne,te,d?le:re);O[x]=ue,C[x]=ue-te}t.modifiersData[n]=C}},requiresIfExists:["offset"]};function At(e,t,o){void 0===o&&(o=!1);var n=ke(t),r=ke(t)&&function(e){var t=e.getBoundingClientRect(),o=Le(t.width)/e.offsetWidth||1,n=Le(t.height)/e.offsetHeight||1;return 1!==o||1!==n}(t),a=We(t),i=De(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!o)&&(("body"!==je(t)||ut(a))&&(s=function(e){return e!==Ce(e)&&ke(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):st(e)}(t)),ke(t)?((l=De(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=lt(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Tt(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function Et(e){var t;return function(){return t||(t=new Promise((function(o){Promise.resolve().then((function(){t=void 0,o(e())}))}))),t}}var jt={placement:"bottom",modifiers:[],strategy:"absolute"};function Ct(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function St(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,a=void 0===r?jt:r;return function(e,t,o){void 0===o&&(o=a);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},jt,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:r,setOptions:function(o){var s="function"==typeof o?o(r.options):o;u(),r.options=Object.assign({},a,r.options,s),r.scrollParents={reference:Se(e)?ft(e):e.contextElement?ft(e.contextElement):[],popper:ft(t)};var p=function(e){var t=Tt(e);return Ee.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,r.options.modifiers)));return r.orderedModifiers=p.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,a=e.effect;if("function"==typeof a){var s=a({state:r,name:t,instance:l,options:n}),u=function(){};i.push(s||u)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,o=e.popper;if(Ct(t,o)){r.rects={reference:At(t,Ue(o),"fixed"===r.options.strategy),popper:Ie(o)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var a=r.orderedModifiers[n],i=a.fn,u=a.options,p=void 0===u?{}:u,f=a.name;"function"==typeof i&&(r=i({state:r,options:p,name:f,instance:l})||r)}else r.reset=!1,n=-1}}},update:Et((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){u(),s=!0}};if(!Ct(e,t))return l;function u(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),l}}St(),St({defaultModifiers:[ot,Ot,et,Me]});var kt=St({defaultModifiers:[ot,Ot,et,Me,xt,ht,Rt,Ye,wt]});const Pt=(e,t,n={})=>{const r={name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=function(e){const t=Object.keys(e.elements),n=o(t.map((t=>[t,e.styles[t]||{}]))),r=o(t.map((t=>[t,e.attributes[t]])));return{styles:n,attributes:r}}(e);Object.assign(s.value,t)},requires:["computeStyles"]},a=u((()=>{const{onFirstUpdate:e,placement:t,strategy:o,modifiers:a}=d(n);return{onFirstUpdate:e,placement:t||"bottom",strategy:o||"absolute",modifiers:[...a||[],r,{name:"applyStyles",enabled:!1}]}})),i=v(),s=g({styles:{popper:{position:d(a).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),l=()=>{i.value&&(i.value.destroy(),i.value=void 0)};return f(a,(e=>{const t=d(i);t&&t.setOptions(e)}),{deep:!0}),f([e,t],(([e,t])=>{l(),e&&t&&(i.value=kt(e,t,d(a)))})),m((()=>{l()})),{state:u((()=>{var e;return{...(null==(e=d(i))?void 0:e.state)||{}}})),styles:u((()=>d(s).styles)),attributes:u((()=>d(s).attributes)),update:()=>{var e;return null==(e=d(i))?void 0:e.update()},forceUpdate:()=>{var e;return null==(e=d(i))?void 0:e.forceUpdate()},instanceRef:u((()=>d(i)))}};function Mt(){let e;const t=()=>window.clearTimeout(e);return Z((()=>t())),{registerTimeout:(o,n)=>{t(),e=window.setTimeout(o,n)},cancelTimeout:t}}let Bt;const Ft=()=>{const e=n(),t=oe(),o=u((()=>`${e.value}-popper-container-${t.prefix}`)),r=u((()=>`#${o.value}`));return{id:o,selector:r}},_t=()=>{const{id:e,selector:t}=Ft();return h((()=>{V&&(Bt||document.body.querySelector(t.value)||(Bt=(e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t})(e.value)))})),{id:e,selector:t}},Lt=r({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Dt=Symbol("elForwardRef"),It=Symbol("popper"),Ht=Symbol("popperContent"),$t=r({role:{type:String,values:["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],default:"tooltip"}}),Nt=b({name:"ElPopper",inheritAttrs:!1});var Wt=i(b({...Nt,props:$t,setup(e,{expose:t}){const o=e,n={triggerRef:g(),popperInstanceRef:g(),contentRef:g(),referenceRef:g(),role:u((()=>o.role))};return t(n),y(It,n),(e,t)=>w(e.$slots,"default")}}),[["__file","popper.vue"]]);const qt=r({arrowOffset:{type:Number,default:5}}),zt=b({name:"ElPopperArrow",inheritAttrs:!1});var Ut=i(b({...zt,props:qt,setup(e,{expose:t}){const o=e,n=a("popper"),{arrowOffset:r,arrowRef:i,arrowStyle:s}=x(Ht,void 0);return f((()=>o.arrowOffset),(e=>{r.value=e})),m((()=>{i.value=void 0})),t({arrowRef:i}),(e,t)=>(O(),R("span",{ref_key:"arrowRef",ref:i,class:A(d(n).e("arrow")),style:T(d(s)),"data-popper-arrow":""},null,6))}}),[["__file","arrow.vue"]]);const Vt=b({name:"ElOnlyChild",setup(e,{slots:t,attrs:o}){var n;const r=x(Dt),a=(i=null!=(n=null==r?void 0:r.setForwardRef)?n:E,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const n=null==(e=t.default)?void 0:e.call(t,o);if(!n)return null;if(n.length>1)return null;const r=Kt(n);return r?j(C(r,o),[[a]]):null}}});function Kt(e){if(!e)return null;const t=e;for(const o of t){if(S(o))switch(o.type){case M:continue;case P:case"svg":return Zt(o);case k:return Kt(o.children);default:return o}return Zt(o)}return null}function Zt(e){const t=a("only-child");return B("span",{class:t.e("content")},[e])}const Jt=r({virtualRef:{type:t(Object)},virtualTriggering:Boolean,onMouseenter:{type:t(Function)},onMouseleave:{type:t(Function)},onClick:{type:t(Function)},onKeydown:{type:t(Function)},onFocus:{type:t(Function)},onBlur:{type:t(Function)},onContextmenu:{type:t(Function)},id:String,open:Boolean}),Yt=b({name:"ElPopperTrigger",inheritAttrs:!1});var Gt=i(b({...Yt,props:Jt,setup(e,{expose:t}){const o=e,{role:n,triggerRef:r}=x(It,void 0);var a;a=r,y(Dt,{setForwardRef:e=>{a.value=e}});const i=u((()=>l.value?o.id:void 0)),s=u((()=>{if(n&&"tooltip"===n.value)return o.open&&o.id?o.id:void 0})),l=u((()=>{if(n&&"tooltip"!==n.value)return n.value})),p=u((()=>l.value?`${o.open}`:void 0));let v;return c((()=>{f((()=>o.virtualRef),(e=>{e&&(r.value=ee(e))}),{immediate:!0}),f(r,((e,t)=>{null==v||v(),v=void 0,Y(e)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach((n=>{var r;const a=o[n];a&&(e.addEventListener(n.slice(2).toLowerCase(),a),null==(r=null==t?void 0:t.removeEventListener)||r.call(t,n.slice(2).toLowerCase(),a))})),v=f([i,s,l,p],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((o,n)=>{G(t[n])?e.removeAttribute(o):e.setAttribute(o,t[n])}))}),{immediate:!0})),Y(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),m((()=>{null==v||v(),v=void 0})),t({triggerRef:r}),(e,t)=>e.virtualTriggering?D("v-if",!0):(O(),F(d(Vt),L({key:0},e.$attrs,{"aria-controls":d(i),"aria-describedby":d(s),"aria-expanded":d(p),"aria-haspopup":d(l)}),{default:_((()=>[w(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}),[["__file","trigger.vue"]]);const Xt=r({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:t(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Te,default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),Qt=r({...Xt,id:String,style:{type:t([String,Array,Object])},className:{type:t([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:t([String,Array,Object])},popperStyle:{type:t([String,Array,Object])},referenceEl:{type:t(Object)},triggerTargetEl:{type:t(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...X(["ariaLabel"])}),eo={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},to=(e,t=[])=>{const{placement:o,strategy:n,popperOptions:r}=e,a={placement:o,strategy:n,...r,modifiers:[...oo(e),...t]};return function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==r?void 0:r.modifiers),a};function oo(e){const{offset:t,gpuAcceleration:o,fallbackPlacements:n}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:n}},{name:"computeStyles",options:{gpuAcceleration:o}}]}const no=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:n,role:r}=x(It,void 0),a=g(),i=g(),s=u((()=>({name:"eventListeners",enabled:!!e.visible}))),l=u((()=>{var e;const t=d(a),o=null!=(e=d(i))?e:0;return{name:"arrow",enabled:!ae(t),options:{element:t,padding:o}}})),p=u((()=>({onFirstUpdate:()=>{b()},...to(e,[d(l),d(s)])}))),v=u((()=>(e=>{if(V)return ee(e)})(e.referenceEl)||d(n))),{attributes:m,state:h,styles:y,update:b,forceUpdate:w,instanceRef:O}=Pt(v,o,p);return f(O,(e=>t.value=e)),c((()=>{f((()=>{var e;return null==(e=d(v))?void 0:e.getBoundingClientRect()}),(()=>{b()}))})),{attributes:m,arrowRef:a,contentRef:o,instanceRef:O,state:h,styles:y,role:r,forceUpdate:w,update:b}},ro=b({name:"ElPopperContent"});var ao=i(b({...ro,props:Qt,emits:eo,setup(e,{expose:t,emit:o}){const n=e,{focusStartRef:r,trapped:i,onFocusAfterReleased:s,onFocusAfterTrapped:l,onFocusInTrap:p,onFocusoutPrevented:v,onReleaseRequested:h}=((e,t)=>{const o=g(!1),n=g();return{focusStartRef:n,trapped:o,onFocusAfterReleased:e=>{var o;"pointer"!==(null==(o=e.detail)?void 0:o.focusReason)&&(n.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:t=>{e.visible&&!o.value&&(t.target&&(n.value=t.target),o.value=!0)},onFocusoutPrevented:t=>{e.trapping||("pointer"===t.detail.focusReason&&t.preventDefault(),o.value=!1)},onReleaseRequested:()=>{o.value=!1,t("close")}}})(n,o),{attributes:b,arrowRef:A,contentRef:T,styles:j,instanceRef:C,role:S,update:k}=no(n),{ariaModal:P,arrowStyle:M,contentAttrs:F,contentClass:D,contentStyle:I,updateZIndex:H}=((e,{attributes:t,styles:o,role:n})=>{const{nextZIndex:r}=ie(),i=a("popper"),s=u((()=>d(t).popper)),l=g(J(e.zIndex)?e.zIndex:r()),p=u((()=>[i.b(),i.is("pure",e.pure),i.is(e.effect),e.popperClass])),f=u((()=>[{zIndex:d(l)},d(o).popper,e.popperStyle||{}]));return{ariaModal:u((()=>"dialog"===n.value?"false":void 0)),arrowStyle:u((()=>d(o).arrow||{})),contentAttrs:s,contentClass:p,contentStyle:f,contentZIndex:l,updateZIndex:()=>{l.value=J(e.zIndex)?e.zIndex:r()}}})(n,{styles:j,attributes:b,role:S}),$=x(se,void 0),N=g();let W;y(Ht,{arrowStyle:M,arrowRef:A,arrowOffset:N}),$&&y(se,{...$,addInputId:E,removeInputId:E});const q=(e=!0)=>{k(),e&&H()},z=()=>{q(!1),n.visible&&n.focusOnShow?i.value=!0:!1===n.visible&&(i.value=!1)};return c((()=>{f((()=>n.triggerTargetEl),((e,t)=>{null==W||W(),W=void 0;const o=d(e||T.value),r=d(t||T.value);Y(o)&&(W=f([S,()=>n.ariaLabel,P,()=>n.id],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,n)=>{G(e[n])?o.removeAttribute(t):o.setAttribute(t,e[n])}))}),{immediate:!0})),r!==o&&Y(r)&&["role","aria-label","aria-modal","id"].forEach((e=>{r.removeAttribute(e)}))}),{immediate:!0}),f((()=>n.visible),z,{immediate:!0})})),m((()=>{null==W||W(),W=void 0})),t({popperContentRef:T,popperInstanceRef:C,updatePopper:q,contentStyle:I}),(e,t)=>(O(),R("div",L({ref_key:"contentRef",ref:T},d(F),{style:d(I),class:d(D),tabindex:"-1",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouseenter",t)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouseleave",t))}),[B(d(ne),{trapped:d(i),"trap-on-focus-in":!0,"focus-trap-el":d(T),"focus-start-el":d(r),onFocusAfterTrapped:d(l),onFocusAfterReleased:d(s),onFocusin:d(p),onFocusoutPrevented:d(v),onReleaseRequested:d(h)},{default:_((()=>[w(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}}),[["__file","content.vue"]]);const io=s(Wt),so=Symbol("elTooltip"),lo=r({...Lt,...Qt,appendTo:{type:t([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,visible:{type:t(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...X(["ariaLabel"])}),uo=r({...Jt,disabled:Boolean,trigger:{type:t([String,Array]),default:"hover"},triggerKeys:{type:t(Array),default:()=>[Q.enter,Q.space]}}),{useModelToggleProps:po,useModelToggleEmits:fo,useModelToggle:co}=fe("visible"),vo=r({...$t,...po,...lo,...uo,...qt,showArrow:{type:Boolean,default:!0}}),go=[...fo,"before-show","before-hide","show","hide","open","close"],mo=(e,t,o)=>n=>{((e,t)=>I(e)?e.includes(t):e===t)(d(e),t)&&o(n)},ho=b({name:"ElTooltipTrigger"});var yo=i(b({...ho,props:uo,setup(e,{expose:t}){const o=e,n=a("tooltip"),{controlled:r,id:i,open:s,onOpen:l,onClose:u,onToggle:p}=x(so,void 0),f=g(null),c=()=>{if(d(r)||o.disabled)return!0},v=H(o,"trigger"),m=le(c,mo(v,"hover",l)),h=le(c,mo(v,"hover",u)),y=le(c,mo(v,"click",(e=>{0===e.button&&p(e)}))),b=le(c,mo(v,"focus",l)),R=le(c,mo(v,"focus",u)),T=le(c,mo(v,"contextmenu",(e=>{e.preventDefault(),p(e)}))),E=le(c,(e=>{const{code:t}=e;o.triggerKeys.includes(t)&&(e.preventDefault(),p(e))}));return t({triggerRef:f}),(e,t)=>(O(),F(d(Gt),{id:d(i),"virtual-ref":e.virtualRef,open:d(s),"virtual-triggering":e.virtualTriggering,class:A(d(n).e("trigger")),onBlur:d(R),onClick:d(y),onContextmenu:d(T),onFocus:d(b),onMouseenter:d(m),onMouseleave:d(h),onKeydown:d(E)},{default:_((()=>[w(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}),[["__file","trigger.vue"]]);const bo=b({name:"ElTooltipContent",inheritAttrs:!1});var wo=i(b({...bo,props:lo,setup(e,{expose:t}){const o=e,{selector:n}=Ft(),r=a("tooltip"),i=g(null),s=g(!1),{controlled:l,id:p,open:c,trigger:v,onClose:h,onOpen:y,onShow:b,onHide:R,onBeforeShow:A,onBeforeHide:T}=x(so,void 0),E=u((()=>o.transition||`${r.namespace.value}-fade-in-linear`)),C=u((()=>o.persistent));m((()=>{s.value=!0}));const S=u((()=>!!d(C)||d(c))),k=u((()=>!o.disabled&&d(c))),P=u((()=>o.appendTo||n.value)),M=u((()=>{var e;return null!=(e=o.style)?e:{}})),I=u((()=>!d(c))),H=()=>{R()},q=()=>{if(d(l))return!0},z=le(q,(()=>{o.enterable&&"hover"===d(v)&&y()})),U=le(q,(()=>{"hover"===d(v)&&h()})),V=()=>{var e,t;null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e),null==A||A()},K=()=>{null==T||T()},Z=()=>{b(),Y=te(u((()=>{var e;return null==(e=i.value)?void 0:e.popperContentRef})),(()=>{if(d(l))return;"hover"!==d(v)&&h()}))},J=()=>{o.virtualTriggering||h()};let Y;return f((()=>d(c)),(e=>{e||null==Y||Y()}),{flush:"post"}),f((()=>o.content),(()=>{var e,t;null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e)})),t({contentRef:i}),(e,t)=>(O(),F(W,{disabled:!e.teleported,to:d(P)},[B(N,{name:d(E),onAfterLeave:H,onBeforeEnter:V,onAfterEnter:Z,onBeforeLeave:K},{default:_((()=>[d(S)?j((O(),F(d(ao),L({key:0,id:d(p),ref_key:"contentRef",ref:i},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":d(I),"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,d(M)],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:d(k),"z-index":e.zIndex,onMouseenter:d(z),onMouseleave:d(U),onBlur:J,onClose:d(h)}),{default:_((()=>[s.value?D("v-if",!0):w(e.$slots,"default",{key:0})])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[$,d(k)]]):D("v-if",!0)])),_:3},8,["name"])],8,["disabled","to"]))}}),[["__file","content.vue"]]);const xo=["innerHTML"],Oo={key:1},Ro=b({name:"ElTooltip"});const Ao=s(i(b({...Ro,props:vo,emits:go,setup(e,{expose:t,emit:o}){const n=e;_t();const r=re(),a=g(),i=g(),s=()=>{var e;const t=d(a);t&&(null==(e=t.popperInstanceRef)||e.update())},l=g(!1),p=g(),{show:c,hide:v,hasUpdateHandler:m}=co({indicator:l,toggleReason:p}),{onOpen:h,onClose:b}=(({showAfter:e,hideAfter:t,autoClose:o,open:n,close:r})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:s}=Mt();return{onOpen:t=>{a((()=>{n(t);const e=d(o);J(e)&&e>0&&i((()=>{r(t)}),e)}),d(e))},onClose:e=>{s(),a((()=>{r(e)}),d(t))}}})({showAfter:H(n,"showAfter"),hideAfter:H(n,"hideAfter"),autoClose:H(n,"autoClose"),open:c,close:v}),x=u((()=>K(n.visible)&&!m.value));y(so,{controlled:x,id:r,open:q(l),trigger:H(n,"trigger"),onOpen:e=>{h(e)},onClose:e=>{b(e)},onToggle:e=>{d(l)?b(e):h(e)},onShow:()=>{o("show",p.value)},onHide:()=>{o("hide",p.value)},onBeforeShow:()=>{o("before-show",p.value)},onBeforeHide:()=>{o("before-hide",p.value)},updatePopper:s}),f((()=>n.disabled),(e=>{e&&l.value&&(l.value=!1)}));return z((()=>l.value&&v())),t({popperRef:a,contentRef:i,isFocusInsideContent:e=>{var t,o;const n=null==(o=null==(t=i.value)?void 0:t.contentRef)?void 0:o.popperContentRef,r=(null==e?void 0:e.relatedTarget)||document.activeElement;return n&&n.contains(r)},updatePopper:s,onOpen:h,onClose:b,hide:v}),(e,t)=>(O(),F(d(io),{ref_key:"popperRef",ref:a,role:e.role},{default:_((()=>[B(yo,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:_((()=>[e.$slots.default?w(e.$slots,"default",{key:0}):D("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),B(wo,{ref_key:"contentRef",ref:i,"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.showAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:_((()=>[w(e.$slots,"content",{},(()=>[e.rawContent?(O(),R("span",{key:0,innerHTML:e.content},null,8,xo)):(O(),R("span",Oo,U(e.content),1))])),e.showArrow?(O(),F(d(Ut),{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):D("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"]))}}),[["__file","tooltip.vue"]])),To=Object.freeze(Object.defineProperty({__proto__:null,ElTooltip:Ao,TOOLTIP_INJECTION_KEY:so,default:Ao,tooltipEmits:go,useTooltipContentProps:lo,useTooltipModelToggle:co,useTooltipModelToggleEmits:fo,useTooltipModelToggleProps:po,useTooltipProps:vo,useTooltipTriggerProps:uo},Symbol.toStringTag,{value:"Module"}));export{Ao as E,so as T,lo as a,Te as b,To as i,uo as u};