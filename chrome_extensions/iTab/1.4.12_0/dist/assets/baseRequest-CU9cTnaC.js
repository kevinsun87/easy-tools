const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./aes-BuQewgYM.js","./localforage-BVRgvwJc.js","./index-BU0epQJo.js","./index-CyyLRP8W.js","./index-4Dsu8OkH.css","./index-BrMlOSMZ.js","./types-Ci7ev57k.js","./index-B3sKL47p.js","./plugin-vue_export-helper-O3gUY6pX.js","./style-BBQwFGbP.js","./index-DjlyN6je.js","./index-D4GlTUBi.js","./typescript-CRqm1_SZ.js","./icon-Dsqoi_oS.js","./todo-nv2WtoEp.js","./todo-Dkv1bMMm.css","./use-global-config-DcVlDyFX.js","./index-CXKOYI6o.js","./_baseGet-DEcaJYAt.js","./isSymbol-Bt1TyP4H.js","./index-CB1eEFAV.js","./aria-BUADUvnR.js","./config-provider-Bf5G9WCh.js","./index-BFuAB0_P.js"])))=>i.map(i=>d[i]);
import{n as e,_ as t,ap as n}from"./todo-nv2WtoEp.js";import{u as r}from"./userInfo-CZAB7rZN.js";import{d as o}from"./localforage-BVRgvwJc.js";import{p as s}from"./version-DYnJBHiW.js";function i(e,t){return function(){return e.apply(t,arguments)}}const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,u=(e=>t=>{const n=a.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),l=e=>(e=e.toLowerCase(),t=>u(t)===e),f=e=>t=>typeof t===e,{isArray:d}=Array,p=f("undefined");const h=l("ArrayBuffer");const m=f("string"),y=f("function"),g=f("number"),b=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==u(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},E=l("Date"),O=l("File"),R=l("Blob"),S=l("FileList"),T=l("URLSearchParams"),[A,v,j,x]=["ReadableStream","Request","Response","Headers"].map(l);function C(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),d(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function P(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,_=e=>!p(e)&&e!==N;const L=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&c(Uint8Array)),U=l("HTMLFormElement"),F=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),B=l("RegExp"),D=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},k="abcdefghijklmnopqrstuvwxyz",q="0123456789",I={DIGIT:q,ALPHA:k,ALPHA_DIGIT:k+k.toUpperCase()+q};const M=l("AsyncFunction"),z={isArray:d,isArrayBuffer:h,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=u(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer),t},isString:m,isNumber:g,isBoolean:e=>!0===e||!1===e,isObject:b,isPlainObject:w,isReadableStream:A,isRequest:v,isResponse:j,isHeaders:x,isUndefined:p,isDate:E,isFile:O,isBlob:R,isRegExp:B,isFunction:y,isStream:e=>b(e)&&y(e.pipe),isURLSearchParams:T,isTypedArray:L,isFileList:S,forEach:C,merge:function e(){const{caseless:t}=_(this)&&this||{},n={},r=(r,o)=>{const s=t&&P(n,o)||o;w(n[s])&&w(r)?n[s]=e(n[s],r):w(r)?n[s]=e({},r):d(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&C(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(C(t,((t,r)=>{n&&y(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:l,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:U,hasOwnProperty:F,hasOwnProp:F,reduceDescriptors:D,freezeMethods:e=>{D(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:P,global:N,isContextDefined:_,ALPHABET:I,generateString:(e=16,t=I.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(b(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=d(e)?[]:{};return C(e,((e,t)=>{const s=n(e,r+1);!p(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:M,isThenable:e=>e&&(b(e)||y(e))&&y(e.then)&&y(e.catch)};function H(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}z.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const J=H.prototype,V={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{V[e]={value:e}})),Object.defineProperties(H,V),Object.defineProperty(J,"isAxiosError",{value:!0}),H.from=(e,t,n,r,o,s)=>{const i=Object.create(J);return z.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),H.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function W(e){return z.isPlainObject(e)||z.isArray(e)}function K(e){return z.endsWith(e,"[]")?e.slice(0,-2):e}function $(e,t,n){return e?e.concat(t).map((function(e,t){return e=K(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const G=z.toFlatObject(z,{},null,(function(e){return/^is[A-Z]/.test(e)}));function X(e,t,n){if(!z.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!z.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&z.isSpecCompliantForm(t);if(!z.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(z.isDate(e))return e.toISOString();if(!a&&z.isBlob(e))throw new H("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(e)||z.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(z.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(z.isArray(e)&&function(e){return z.isArray(e)&&!e.some(W)}(e)||(z.isFileList(e)||z.endsWith(n,"[]"))&&(a=z.toArray(e)))return n=K(n),a.forEach((function(e,r){!z.isUndefined(e)&&null!==e&&t.append(!0===i?$([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!W(e)||(t.append($(o,n,s),c(e)),!1)}const l=[],f=Object.assign(G,{defaultVisitor:u,convertValue:c,isVisitable:W});if(!z.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!z.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),z.forEach(n,(function(n,s){!0===(!(z.isUndefined(n)||null===n)&&o.call(t,n,z.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function Q(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Z(e,t){this._pairs=[],e&&X(e,this,t)}const Y=Z.prototype;function ee(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function te(e,t,n){if(!t)return e;const r=n&&n.encode||ee,o=n&&n.serialize;let s;if(s=o?o(t,n):z.isURLSearchParams(t)?t.toString():new Z(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}Y.append=function(e,t){this._pairs.push([e,t])},Y.toString=function(e){const t=e?function(t){return e.call(this,t,Q)}:Q;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class ne{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){z.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oe={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Z,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},se="undefined"!=typeof window&&"undefined"!=typeof document,ie=(ae="undefined"!=typeof navigator&&navigator.product,se&&["ReactNative","NativeScript","NS"].indexOf(ae)<0);var ae;const ce="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ue=se&&window.location.href||"http://localhost",le={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:se,hasStandardBrowserEnv:ie,hasStandardBrowserWebWorkerEnv:ce,origin:ue},Symbol.toStringTag,{value:"Module"})),...oe};function fe(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&z.isArray(r)?r.length:s,a)return z.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&z.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&z.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(z.isFormData(e)&&z.isFunction(e.entries)){const n={};return z.forEachEntry(e,((e,r)=>{t(function(e){return z.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const de={transitional:re,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=z.isObject(e);o&&z.isHTMLForm(e)&&(e=new FormData(e));if(z.isFormData(e))return r?JSON.stringify(fe(e)):e;if(z.isArrayBuffer(e)||z.isBuffer(e)||z.isStream(e)||z.isFile(e)||z.isBlob(e)||z.isReadableStream(e))return e;if(z.isArrayBufferView(e))return e.buffer;if(z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return X(e,new le.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return le.isNode&&z.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=z.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return X(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(z.isString(e))try{return(t||JSON.parse)(e),z.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||de.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(z.isResponse(e)||z.isReadableStream(e))return e;if(e&&z.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw H.from(o,H.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:le.classes.FormData,Blob:le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],(e=>{de.headers[e]={}}));const pe=de,he=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),me=Symbol("internals");function ye(e){return e&&String(e).trim().toLowerCase()}function ge(e){return!1===e||null==e?e:z.isArray(e)?e.map(ge):String(e)}function be(e,t,n,r,o){return z.isFunction(r)?r.call(this,t,n):(o&&(t=n),z.isString(t)?z.isString(r)?-1!==t.indexOf(r):z.isRegExp(r)?r.test(t):void 0:void 0)}class we{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ye(t);if(!o)throw new Error("header name must be a non-empty string");const s=z.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ge(e))}const s=(e,t)=>z.forEach(e,((e,n)=>o(e,n,t)));if(z.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(z.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&he[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(z.isHeaders(e))for(const[i,a]of e.entries())o(a,i,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ye(e)){const n=z.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(z.isFunction(t))return t.call(this,e,n);if(z.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ye(e)){const n=z.findKey(this,e);return!(!n||void 0===this[n]||t&&!be(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ye(e)){const o=z.findKey(n,e);!o||t&&!be(0,n[o],o,t)||(delete n[o],r=!0)}}return z.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!be(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return z.forEach(this,((r,o)=>{const s=z.findKey(n,o);if(s)return t[s]=ge(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ge(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return z.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&z.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[me]=this[me]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ye(e);t[r]||(!function(e,t){const n=z.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return z.isArray(e)?e.forEach(r):r(e),this}}we.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),z.reduceDescriptors(we.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),z.freezeMethods(we);const Ee=we;function Oe(e,t){const n=this||pe,r=t||n,o=Ee.from(r.headers);let s=r.data;return z.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Re(e){return!(!e||!e.__CANCEL__)}function Se(e,t,n){H.call(this,null==e?"canceled":e,H.ERR_CANCELED,t,n),this.name="CanceledError"}function Te(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}z.inherits(Se,H,{__CANCEL__:!0});const Ae=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n=0;const r=1e3/t;let o=null;return function(){const t=!0===this,s=Date.now();if(t||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout((()=>(o=null,n=Date.now(),e.apply(null,arguments))),r-(s-n)))}}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i};u[t?"download":"upload"]=!0,e(u)}),n)},ve=le.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=z.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}(),je=le.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];z.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),z.isString(r)&&i.push("path="+r),z.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ce=e=>e instanceof Ee?{...e}:e;function Pe(e,t){t=t||{};const n={};function r(e,t,n){return z.isPlainObject(e)&&z.isPlainObject(t)?z.merge.call({caseless:n},e,t):z.isPlainObject(t)?z.merge({},t):z.isArray(t)?t.slice():t}function o(e,t,n){return z.isUndefined(t)?z.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!z.isUndefined(t))return r(void 0,t)}function i(e,t){return z.isUndefined(t)?z.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ce(e),Ce(t),!0)};return z.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);z.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ne=e=>{const t=Pe({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Ee.from(a),t.url=te(xe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),z.isFormData(r))if(le.hasStandardBrowserEnv||le.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(le.hasStandardBrowserEnv&&(o&&z.isFunction(o)&&(o=o(t)),o||!1!==o&&ve(t.url))){const e=s&&i&&je.read(i);e&&a.set(s,e)}return t},_e="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Ne(e);let o=r.data;const s=Ee.from(r.headers).normalize();let i,{responseType:a}=r;function c(){r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let u=new XMLHttpRequest;function l(){if(!u)return;const r=Ee.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());Te((function(e){t(e),c()}),(function(e){n(e),c()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(l)},u.onabort=function(){u&&(n(new H("Request aborted",H.ECONNABORTED,r,u)),u=null)},u.onerror=function(){n(new H("Network Error",H.ERR_NETWORK,r,u)),u=null},u.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const t=r.transitional||re;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new H(e,t.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,r,u)),u=null},void 0===o&&s.setContentType(null),"setRequestHeader"in u&&z.forEach(s.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),z.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),a&&"json"!==a&&(u.responseType=r.responseType),"function"==typeof r.onDownloadProgress&&u.addEventListener("progress",Ae(r.onDownloadProgress,!0)),"function"==typeof r.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",Ae(r.onUploadProgress)),(r.cancelToken||r.signal)&&(i=t=>{u&&(n(!t||t.type?new Se(null,e,u):t),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);f&&-1===le.protocols.indexOf(f)?n(new H("Unsupported protocol "+f+":",H.ERR_BAD_REQUEST,e)):u.send(o||null)}))},Le=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof H?t:new Se(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{o(new H(`timeout ${t} of ms exceeded`,H.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},Ue=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Fe=(e,t,n,r,o)=>{const s=async function*(e,t,n){for await(const r of e)yield*Ue(ArrayBuffer.isView(r)?r:await n(String(r)),t)}(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(e){const{done:t,value:o}=await s.next();if(t)return e.close(),void r();let a=o.byteLength;n&&n(i+=a),e.enqueue(new Uint8Array(o))},cancel:e=>(r(e),s.return())},{highWaterMark:2})},Be=(e,t)=>{const n=null!=e;return r=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:r})))},De="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,ke=De&&"function"==typeof ReadableStream,qe=De&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ie=ke&&(()=>{let e=!1;const t=new Request(le.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Me=ke&&!!(()=>{try{return z.isReadableStream(new Response("").body)}catch(e){}})(),ze={stream:Me&&(e=>e.body)};var He;De&&(He=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!ze[e]&&(ze[e]=z.isFunction(He[e])?t=>t[e]():(t,n)=>{throw new H(`Response type '${e}' is not supported`,H.ERR_NOT_SUPPORT,n)})})));const Je=async(e,t)=>{const n=z.toFiniteNumber(e.getContentLength());return null==n?(async e=>null==e?0:z.isBlob(e)?e.size:z.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:z.isArrayBufferView(e)?e.byteLength:(z.isURLSearchParams(e)&&(e+=""),z.isString(e)?(await qe(e)).byteLength:void 0))(t):n},Ve={http:null,xhr:_e,fetch:De&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=Ne(e);u=u?(u+"").toLowerCase():"text";let p,h,[m,y]=o||s||i?Le([o,s],i):[];const g=()=>{!p&&setTimeout((()=>{m&&m.unsubscribe()})),p=!0};let b;try{if(c&&Ie&&"get"!==n&&"head"!==n&&0!==(b=await Je(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});z.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body&&(r=Fe(n.body,65536,Be(b,Ae(c)),null,qe))}z.isString(f)||(f=f?"cors":"omit"),h=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let o=await fetch(h);const s=Me&&("stream"===u||"response"===u);if(Me&&(a||s)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=z.toFiniteNumber(o.headers.get("content-length"));o=new Response(Fe(o.body,65536,a&&Be(t,Ae(a,!0)),s&&g,qe),e)}u=u||"text";let i=await ze[z.findKey(ze,u)||"text"](o,e);return!s&&g(),y&&y(),await new Promise(((t,n)=>{Te(t,n,{data:i,headers:Ee.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:h})}))}catch(w){if(g(),w&&"TypeError"===w.name&&/fetch/i.test(w.message))throw Object.assign(new H("Network Error",H.ERR_NETWORK,e,h),{cause:w.cause||w});throw H.from(w,w&&w.code,e,h)}})};z.forEach(Ve,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const We=e=>`- ${e}`,Ke=e=>z.isFunction(e)||null===e||!1===e,$e=e=>{e=z.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ke(n)&&(r=Ve[(t=String(n)).toLowerCase()],void 0===r))throw new H(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new H("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(We).join("\n"):" "+We(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Ge(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Se(null,e)}function Xe(e){Ge(e),e.headers=Ee.from(e.headers),e.data=Oe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return $e(e.adapter||pe.adapter)(e).then((function(t){return Ge(e),t.data=Oe.call(e,e.transformResponse,t),t.headers=Ee.from(t.headers),t}),(function(t){return Re(t)||(Ge(e),t&&t.response&&(t.response.data=Oe.call(e,e.transformResponse,t.response),t.response.headers=Ee.from(t.response.headers))),Promise.reject(t)}))}const Qe="1.7.2",Ze={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ze[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ye={};Ze.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new H(function(e,t){return"[Axios v1.7.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),H.ERR_DEPRECATED);return t&&!Ye[o]&&(Ye[o]=!0),!e||e(r,o,s)}};const et={assertOptions:function(e,t,n){if("object"!=typeof e)throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new H("option "+s+" must be "+n,H.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new H("Unknown option "+s,H.ERR_BAD_OPTION)}},validators:Ze},tt=et.validators;class nt{constructor(e){this.defaults=e,this.interceptors={request:new ne,response:new ne}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Pe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&et.assertOptions(n,{silentJSONParsing:tt.transitional(tt.boolean),forcedJSONParsing:tt.transitional(tt.boolean),clarifyTimeoutError:tt.transitional(tt.boolean)},!1),null!=r&&(z.isFunction(r)?t.paramsSerializer={serialize:r}:et.assertOptions(r,{encode:tt.function,serialize:tt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&z.merge(o.common,o[t.method]);o&&z.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ee.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Xe.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Xe.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return te(xe((e=Pe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}z.forEach(["delete","get","head","options"],(function(e){nt.prototype[e]=function(t,n){return this.request(Pe(n||{},{method:e,url:t,data:(n||{}).data}))}})),z.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Pe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}nt.prototype[e]=t(),nt.prototype[e+"Form"]=t(!0)}));const rt=nt;class ot{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Se(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ot((function(t){e=t})),cancel:e}}}const st=ot;const it={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(it).forEach((([e,t])=>{it[t]=e}));const at=it;const ct=function e(t){const n=new rt(t),r=i(rt.prototype.request,n);return z.extend(r,rt.prototype,n,{allOwnKeys:!0}),z.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Pe(t,n))},r}(pe);ct.Axios=rt,ct.CanceledError=Se,ct.CancelToken=st,ct.isCancel=Re,ct.VERSION=Qe,ct.toFormData=X,ct.AxiosError=H,ct.Cancel=ct.CanceledError,ct.all=function(e){return Promise.all(e)},ct.spread=function(e){return function(t){return e.apply(null,t)}},ct.isAxiosError=function(e){return z.isObject(e)&&!0===e.isAxiosError},ct.mergeConfig=Pe,ct.AxiosHeaders=Ee,ct.formToJSON=e=>fe(z.isHTMLForm(e)?new FormData(e):e),ct.getAdapter=$e,ct.HttpStatusCode=at,ct.default=ct;let ut="https://api.codelife.cc/";ut="https://api.codelife.cc/";const lt="https://api.codelife.cc/",ft=r(),dt=()=>{e.remove("token"),ft.value={}};const pt=async()=>{const e=o().valueOf().toString();return(await t((()=>import("./aes-BuQewgYM.js").then((e=>e.a))),__vite__mapDeps([0,1]),import.meta.url)).encrypt(e,"itab1314").toString()},ht=()=>{let e=localStorage.getItem("itab-visitorid");return e||(e=`${n(10)}.${Date.now().toString().slice(0,10)}`,localStorage.setItem("itab-visitorid",e),e)},mt=ct.create({baseURL:lt,timeout:15e3});var yt;(yt=mt).interceptors.request.use((async t=>{let n=e.get("token"),r=await pt();return t.headers.signaturekey=r,t.headers.version=s.version,t.headers.mode="production",t.headers.fp=ht(),n&&(t.headers.token=n),"get"==t.method&&(t.params={lang:"cn",...t.params}),t}),(e=>{Promise.reject(e)})),yt.interceptors.response.use((e=>{const n=e.data;return 401==n.code?(dt(),Promise.reject(n.msg)):500==n.code||501==n.code||413==n.code?(t((()=>import("./index-BU0epQJo.js")),__vite__mapDeps([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url).then((e=>{e.ElMessage({type:"error",message:n.msg,duration:3e3,showClose:!0})})),Promise.reject(n.msg)):n}),(e=>Promise.reject(e)));const gt=mt;export{lt as B,dt as L,ct as a,gt as b,pt as c,ht as g};