import{a as r,b as n}from"./_baseGet-DEcaJYAt.js";import{b as t}from"./_baseIteratee-BaNfRxc9.js";import{b as e}from"./_baseFor-BgUEIYfv.js";import{ae as i,A as o,g as u,af as a}from"./todo-nv2WtoEp.js";import{i as f}from"./isSymbol-Bt1TyP4H.js";import{i as s}from"./hasIn-y6DbaUwA.js";var c,l,m=(c=function(r,n){return r&&e(r,n,i)},function(r,n){if(null==r)return r;if(!o(r))return c(r,n);for(var t=r.length,e=l?t:-1,i=Object(r);(l?e--:++e<t)&&!1!==n(i[e],e,i););return r});function v(r,n){if(r!==n){var t=void 0!==r,e=null===r,i=r==r,o=f(r),u=void 0!==n,a=null===n,s=n==n,c=f(n);if(!a&&!c&&!o&&r>n||o&&u&&s&&!a&&!c||e&&u&&s||!t&&s||!i)return 1;if(!e&&!o&&!c&&r<n||c&&t&&i&&!e&&!o||a&&t&&i||!u&&i||!s)return-1}return 0}function b(e,i,f){i=i.length?r(i,(function(r){return u(r)?function(t){return n(t,1===r.length?r[0]:r)}:r})):[s];var c=-1;i=r(i,a(t));var l=function(r,n){var t=-1,e=o(r)?Array(r.length):[];return m(r,(function(r,i,o){e[++t]=n(r,i,o)})),e}(e,(function(n,t,e){return{criteria:r(i,(function(r){return r(n)})),index:++c,value:n}}));return function(r,n){var t=r.length;for(r.sort(n);t--;)r[t]=r[t].value;return r}(l,(function(r,n){return function(r,n,t){for(var e=-1,i=r.criteria,o=n.criteria,u=i.length,a=t.length;++e<u;){var f=v(i[e],o[e]);if(f)return e>=a?f:f*("desc"==t[e]?-1:1)}return r.index-n.index}(r,n,f)}))}export{b};