import{i as e,aB as l,c as a,g as t,w as o,n,a as u,k as s,bJ as i,E as r,m as d,bs as c,p as v,G as b,H as m,t as p,z as h,u as f,v as x,q as k,M as g,bH as C,bu as y,A as L,F as V,L as S,B,J as E,b5 as I,C as F,aY as j,bj as z}from"./index-CyyLRP8W.js";import{a as N}from"./use-global-config-DcVlDyFX.js";import{u as w,p as U}from"./index-kxe6IHwf.js";import{U as _}from"./event-BwRzfsZt.js";import{g as D,l as O,k as G,p as $}from"./types-Ci7ev57k.js";import{_ as R,w as A,c as J}from"./plugin-vue_export-helper-O3gUY6pX.js";import{c as K,u as q,a as H,b as M}from"./use-form-item-CUGNa-4i.js";import{d as P}from"./scroll-3JEGyj3w.js";import{i as Y}from"./isEqual-DOZxeYFr.js";import{u as Q}from"./index-DjlyN6je.js";import{u as T,b as W,d as X}from"./index-B3sKL47p.js";const Z={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:N,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...w(["ariaControls"])},ee={[_]:l=>e(l)||D(l)||O(l),change:l=>e(l)||D(l)||O(l)},le=Symbol("checkboxGroupContextKey"),ae=(e,{model:u,isLimitExceeded:s,hasOwnLabel:i,isDisabled:r,isLabeledByFormItem:d})=>{const c=l(le,void 0),{formItem:v}=q(),{emit:b}=t();function m(l){var a,t,o,n;return[!0,e.trueValue,e.trueLabel].includes(l)?null==(t=null!=(a=e.trueValue)?a:e.trueLabel)||t:null!=(n=null!=(o=e.falseValue)?o:e.falseLabel)&&n}const p=a((()=>(null==c?void 0:c.validateEvent)||e.validateEvent));return o((()=>e.modelValue),(()=>{p.value&&(null==v||v.validate("change").catch((e=>P())))})),{handleChange:function(e){if(s.value)return;const l=e.target;b("change",m(l.checked),e)},onClickRoot:async function(l){if(!s.value&&!i.value&&!r.value&&d.value){l.composedPath().some((e=>"LABEL"===e.tagName))||(u.value=m([!1,e.falseValue,e.falseLabel].includes(u.value)),await n(),function(e,l){b("change",m(e),l)}(u.value,l))}}}},te=(e,o)=>{const{formItem:n}=q(),{model:d,isGroup:c,isLimitExceeded:v}=(e=>{const o=u(!1),{emit:n}=t(),i=l(le,void 0),r=a((()=>!1===G(i))),d=u(!1),c=a({get(){var l,a;return r.value?null==(l=null==i?void 0:i.modelValue)?void 0:l.value:null!=(a=e.modelValue)?a:o.value},set(e){var l,a;r.value&&s(e)?(d.value=void 0!==(null==(l=null==i?void 0:i.max)?void 0:l.value)&&e.length>(null==i?void 0:i.max.value)&&e.length>c.value.length,!1===d.value&&(null==(a=null==i?void 0:i.changeEvent)||a.call(i,e))):(n(_,e),o.value=e)}});return{model:c,isGroup:r,isLimitExceeded:d}})(e),{isFocused:b,isChecked:m,checkboxButtonSize:p,checkboxSize:h,hasOwnLabel:f,actualValue:x}=((e,t,{model:o})=>{const n=l(le,void 0),d=u(!1),c=a((()=>$(e.value)?e.label:e.value)),v=a((()=>{const l=o.value;return O(l)?l:s(l)?i(c.value)?l.map(r).some((e=>Y(e,c.value))):l.map(r).includes(c.value):null!=l?l===e.trueValue||l===e.trueLabel:!!l}));return{checkboxButtonSize:H(a((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:v,isFocused:d,checkboxSize:H(a((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:a((()=>!!t.default||!$(c.value))),actualValue:c}})(e,o,{model:d}),{isDisabled:k}=(({model:e,isChecked:t})=>{const o=l(le,void 0),n=a((()=>{var l,a;const n=null==(l=null==o?void 0:o.max)?void 0:l.value,u=null==(a=null==o?void 0:o.min)?void 0:a.value;return!G(n)&&e.value.length>=n&&!t.value||!G(u)&&e.value.length<=u&&t.value}));return{isDisabled:K(a((()=>(null==o?void 0:o.disabled.value)||n.value))),isLimitDisabled:n}})({model:d,isChecked:m}),{inputId:g,isLabeledByFormItem:C}=M(e,{formItemContext:n,disableIdGeneration:f,disableIdManagement:c}),{handleChange:y,onClickRoot:L}=ae(e,{model:d,isLimitExceeded:v,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:C});var V,S;return e.checked&&(s(d.value)&&!d.value.includes(x.value)?d.value.push(x.value):d.value=null==(S=null!=(V=e.trueValue)?V:e.trueLabel)||S),Q({from:"controls",replacement:"aria-controls",version:"2.8.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},a((()=>!!e.controls))),Q({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},a((()=>c.value&&$(e.value)))),Q({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},a((()=>!!e.trueLabel))),Q({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},a((()=>!!e.falseLabel))),{inputId:g,isLabeledByFormItem:C,isChecked:m,isDisabled:k,isFocused:b,checkboxButtonSize:p,checkboxSize:h,hasOwnLabel:f,model:d,actualValue:x,handleChange:y,onClickRoot:L}},oe=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],ne=["id","indeterminate","disabled","value","name","tabindex"],ue=d({name:"ElCheckbox"});var se=R(d({...ue,props:Z,emits:ee,setup(e){const l=e,t=c(),{inputId:o,isLabeledByFormItem:n,isChecked:u,isDisabled:s,isFocused:i,checkboxSize:r,hasOwnLabel:d,model:F,actualValue:j,handleChange:z,onClickRoot:N}=te(l,t),w=T("checkbox"),U=a((()=>[w.b(),w.m(r.value),w.is("disabled",s.value),w.is("bordered",l.border),w.is("checked",u.value)])),_=a((()=>[w.e("input"),w.is("disabled",s.value),w.is("checked",u.value),w.is("indeterminate",l.indeterminate),w.is("focus",i.value)]));return(e,l)=>(v(),b(I(!f(d)&&f(n)?"span":"label"),{class:h(f(U)),"aria-controls":e.indeterminate?e.controls||e.ariaControls:null,onClick:f(N)},{default:m((()=>{var a,t;return[p("span",{class:h(f(_))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?x((v(),k("input",{key:0,id:f(o),"onUpdate:modelValue":l[0]||(l[0]=e=>g(F)?F.value=e:null),class:h(f(w).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:f(s),"true-value":null!=(a=e.trueValue)?a:e.trueLabel,"false-value":null!=(t=e.falseValue)?t:e.falseLabel,onChange:l[1]||(l[1]=(...e)=>f(z)&&f(z)(...e)),onFocus:l[2]||(l[2]=e=>i.value=!0),onBlur:l[3]||(l[3]=e=>i.value=!1),onClick:l[4]||(l[4]=C((()=>{}),["stop"]))},null,42,oe)),[[y,f(F)]]):x((v(),k("input",{key:1,id:f(o),"onUpdate:modelValue":l[5]||(l[5]=e=>g(F)?F.value=e:null),class:h(f(w).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:f(s),value:f(j),name:e.name,tabindex:e.tabindex,onChange:l[6]||(l[6]=(...e)=>f(z)&&f(z)(...e)),onFocus:l[7]||(l[7]=e=>i.value=!0),onBlur:l[8]||(l[8]=e=>i.value=!1),onClick:l[9]||(l[9]=C((()=>{}),["stop"]))},null,42,ne)),[[y,f(F)]]),p("span",{class:h(f(w).e("inner"))},null,2)],2),f(d)?(v(),k("span",{key:0,class:h(f(w).e("label"))},[L(e.$slots,"default"),e.$slots.default?E("v-if",!0):(v(),k(V,{key:0},[S(B(e.label),1)],64))],2)):E("v-if",!0)]})),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","checkbox.vue"]]);const ie=["name","tabindex","disabled","true-value","false-value"],re=["name","tabindex","disabled","value"],de=d({name:"ElCheckboxButton"});var ce=R(d({...de,props:Z,emits:ee,setup(e){const t=e,o=c(),{isFocused:n,isChecked:u,isDisabled:s,checkboxButtonSize:i,model:r,actualValue:d,handleChange:b}=te(t,o),m=l(le,void 0),p=T("checkbox"),V=a((()=>{var e,l,a,t;const o=null!=(l=null==(e=null==m?void 0:m.fill)?void 0:e.value)?l:"";return{backgroundColor:o,borderColor:o,color:null!=(t=null==(a=null==m?void 0:m.textColor)?void 0:a.value)?t:"",boxShadow:o?`-1px 0 0 0 ${o}`:void 0}})),I=a((()=>[p.b("button"),p.bm("button",i.value),p.is("disabled",s.value),p.is("checked",u.value),p.is("focus",n.value)]));return(e,l)=>{var a,t;return v(),k("label",{class:h(f(I))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?x((v(),k("input",{key:0,"onUpdate:modelValue":l[0]||(l[0]=e=>g(r)?r.value=e:null),class:h(f(p).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:f(s),"true-value":null!=(a=e.trueValue)?a:e.trueLabel,"false-value":null!=(t=e.falseValue)?t:e.falseLabel,onChange:l[1]||(l[1]=(...e)=>f(b)&&f(b)(...e)),onFocus:l[2]||(l[2]=e=>n.value=!0),onBlur:l[3]||(l[3]=e=>n.value=!1),onClick:l[4]||(l[4]=C((()=>{}),["stop"]))},null,42,ie)),[[y,f(r)]]):x((v(),k("input",{key:1,"onUpdate:modelValue":l[5]||(l[5]=e=>g(r)?r.value=e:null),class:h(f(p).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:f(s),value:f(d),onChange:l[6]||(l[6]=(...e)=>f(b)&&f(b)(...e)),onFocus:l[7]||(l[7]=e=>n.value=!0),onBlur:l[8]||(l[8]=e=>n.value=!1),onClick:l[9]||(l[9]=C((()=>{}),["stop"]))},null,42,re)),[[y,f(r)]]),e.$slots.default||e.label?(v(),k("span",{key:2,class:h(f(p).be("button","inner")),style:F(f(u)?f(V):void 0)},[L(e.$slots,"default",{},(()=>[S(B(e.label),1)]))],6)):E("v-if",!0)],2)}}}),[["__file","checkbox-button.vue"]]);const ve=W({modelValue:{type:X(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:N,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...w(["ariaLabel"])}),be={[_]:e=>s(e),change:e=>s(e)},me=d({name:"ElCheckboxGroup"});var pe=R(d({...me,props:ve,emits:be,setup(e,{emit:l}){const t=e,u=T("checkbox"),{formItem:s}=q(),{inputId:i,isLabeledByFormItem:r}=M(t,{formItemContext:s}),d=async e=>{l(_,e),await n(),l("change",e)},c=a({get:()=>t.modelValue,set(e){d(e)}});return j(le,{...U(z(t),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:c,changeEvent:d}),Q({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-checkbox-group",ref:"https://element-plus.org/en-US/component/checkbox.html"},a((()=>!!t.label))),o((()=>t.modelValue),(()=>{t.validateEvent&&(null==s||s.validate("change").catch((e=>P())))})),(e,l)=>{var a;return v(),b(I(e.tag),{id:f(i),class:h(f(u).b("group")),role:"group","aria-label":f(r)?void 0:e.label||e.ariaLabel||"checkbox-group","aria-labelledby":f(r)?null==(a=f(s))?void 0:a.labelId:void 0},{default:m((()=>[L(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","checkbox-group.vue"]]);const he=A(se,{CheckboxButton:ce,CheckboxGroup:pe});J(ce);const fe=J(pe);export{he as E,fe as a};