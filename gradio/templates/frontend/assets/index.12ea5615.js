import{S as T,i as S,s as j,e as B,b as c,Y as E,d as f,f as d,w as M,n as g,E as C,c as h,m as v,j as b,k,o as w,P as H,Q as L,a as q,R as D,T as J,J as P}from"./index.49a8c1c2.js";import{B as Q}from"./Block.f1112852.js";import"./styles.ed3b21b5.js";function R(n){let e;return{c(){e=B("div"),c(e,"id",n[0]),c(e,"class","output-markdown gr-prose"),E(e,"max-width","100%"),f(e,"min-h-[6rem]",n[3]),f(e,"hidden",!n[1])},m(a,i){d(a,e,i),e.innerHTML=n[2]},p(a,[i]){i&4&&(e.innerHTML=a[2]),i&1&&c(e,"id",a[0]),i&8&&f(e,"min-h-[6rem]",a[3]),i&2&&f(e,"hidden",!a[1])},i:M,o:M,d(a){a&&g(e)}}}function Y(n,e,a){let{elem_id:i=""}=e,{visible:s=!0}=e,{value:l}=e,{min_height:m=!1}=e;const o=C();return n.$$set=t=>{"elem_id"in t&&a(0,i=t.elem_id),"visible"in t&&a(1,s=t.visible),"value"in t&&a(2,l=t.value),"min_height"in t&&a(3,m=t.min_height)},n.$$.update=()=>{n.$$.dirty&4&&o("change")},[i,s,l,m]}class z extends T{constructor(e){super(),S(this,e,Y,R,j,{elem_id:0,visible:1,value:2,min_height:3})}}function A(n){let e,a,i,s,l;const m=[n[3],{variant:"center"}];let o={};for(let t=0;t<m.length;t+=1)o=H(o,m[t]);return e=new L({props:o}),s=new z({props:{min_height:n[3]&&n[3].status!=="complete",value:n[2],elem_id:n[0],visible:n[1]}}),s.$on("change",n[5]),{c(){h(e.$$.fragment),a=q(),i=B("div"),h(s.$$.fragment),c(i,"class","transition"),f(i,"opacity-20",n[3]?.status==="pending")},m(t,r){v(e,t,r),d(t,a,r),d(t,i,r),v(s,i,null),l=!0},p(t,r){const u=r&8?D(m,[J(t[3]),m[1]]):{};e.$set(u);const _={};r&8&&(_.min_height=t[3]&&t[3].status!=="complete"),r&4&&(_.value=t[2]),r&1&&(_.elem_id=t[0]),r&2&&(_.visible=t[1]),s.$set(_),r&8&&f(i,"opacity-20",t[3]?.status==="pending")},i(t){l||(b(e.$$.fragment,t),b(s.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),k(s.$$.fragment,t),l=!1},d(t){w(e,t),t&&g(a),t&&g(i),w(s)}}}function F(n){let e,a;return e=new Q({props:{visible:n[1],elem_id:n[0],disable:!0,$$slots:{default:[A]},$$scope:{ctx:n}}}),{c(){h(e.$$.fragment)},m(i,s){v(e,i,s),a=!0},p(i,[s]){const l={};s&2&&(l.visible=i[1]),s&1&&(l.elem_id=i[0]),s&143&&(l.$$scope={dirty:s,ctx:i}),e.$set(l)},i(i){a||(b(e.$$.fragment,i),a=!0)},o(i){k(e.$$.fragment,i),a=!1},d(i){w(e,i)}}}function G(n,e,a){let{label:i}=e,{elem_id:s=""}=e,{visible:l=!0}=e,{value:m=""}=e,{loading_status:o}=e;const t=C();function r(u){P.call(this,n,u)}return n.$$set=u=>{"label"in u&&a(4,i=u.label),"elem_id"in u&&a(0,s=u.elem_id),"visible"in u&&a(1,l=u.visible),"value"in u&&a(2,m=u.value),"loading_status"in u&&a(3,o=u.loading_status)},n.$$.update=()=>{n.$$.dirty&16&&t("change")},[s,l,m,o,i,r]}class I extends T{constructor(e){super(),S(this,e,G,F,j,{label:4,elem_id:0,visible:1,value:2,loading_status:3})}}var U=I;const V=["static"];export{U as Component,V as modes};
//# sourceMappingURL=index.12ea5615.js.map