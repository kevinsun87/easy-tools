import{k as t,V as r}from"./todo-nv2WtoEp.js";import{i as n}from"./isSymbol-Bt1TyP4H.js";var e=/\s/;var i=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}(t)+1).replace(i,""):t}var u=NaN,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;function v(r){if("number"==typeof r)return r;if(n(r))return u;if(t(r)){var e="function"==typeof r.valueOf?r.valueOf():r;r=t(e)?e+"":e}if("string"!=typeof r)return 0===r?r:+r;r=o(r);var i=f.test(r);return i||c.test(r)?s(r.slice(2),i?2:8):a.test(r)?u:+r}var l=function(){return r.Date.now()},m=Math.max,d=Math.min;function p(r,n,e){var i,o,u,a,f,c,s=0,p=!1,y=!1,T=!0;if("function"!=typeof r)throw new TypeError("Expected a function");function b(t){var n=i,e=o;return i=o=void 0,s=t,a=r.apply(e,n)}function g(t){var r=t-c;return void 0===c||r>=n||r<0||y&&t-s>=u}function h(){var t=l();if(g(t))return x(t);f=setTimeout(h,function(t){var r=n-(t-c);return y?d(r,u-(t-s)):r}(t))}function x(t){return f=void 0,T&&i?b(t):(i=o=void 0,a)}function j(){var t=l(),r=g(t);if(i=arguments,o=this,c=t,r){if(void 0===f)return function(t){return s=t,f=setTimeout(h,n),p?b(t):a}(c);if(y)return clearTimeout(f),f=setTimeout(h,n),b(c)}return void 0===f&&(f=setTimeout(h,n)),a}return n=v(n)||0,t(e)&&(p=!!e.leading,u=(y="maxWait"in e)?m(v(e.maxWait)||0,n):u,T="trailing"in e?!!e.trailing:T),j.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=c=o=f=void 0},j.flush=function(){return void 0===f?a:x(l())},j}const y=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));export{y as a,p as d,v as t};