import{S as G,i as J,s as O,v as H,b as f,f as y,g,w as U,n as B,e as P,a as R,t as E,c as T,L as se,ab as ge,d as ue,Y as fe,m as j,l as M,y as ce,W as pe,C as Z,k,D as x,j as w,h as Y,o as V,z as ke,am as we,an as ve,a7 as ye,J as z,H as de,A as $,E as me,N as Be,K as Ne,O as Te,X as je,P as Ve,Q as Ce,R as Me,T as Pe}from"./index.1ea07ba3.js";import{B as ze}from"./Block.d18f3efd.js";import{n as Ue}from"./utils.27234e1d.js";import{U as Xe}from"./Upload.1d0e0492.js";import{M as Fe}from"./ModifyUpload.61832ffa.js";import{B as be}from"./BlockLabel.d50f3f1d.js";import{U as Se,W as qe}from"./Webcam.e2db926a.js";import"./styles.ed3b21b5.js";function De(n){let e,l;return{c(){e=H("svg"),l=H("path"),f(l,"d","M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","100%"),f(e,"height","100%"),f(e,"viewBox","0 0 24 24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","1.5"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(t,r){y(t,e,r),g(e,l)},p:U,i:U,o:U,d(t){t&&B(e)}}}class Re extends G{constructor(e){super(),J(this,e,null,De,O,{})}}function We(n){let e,l,t;return{c(){e=H("svg"),l=H("rect"),t=H("rect"),f(l,"x","6"),f(l,"y","4"),f(l,"width","4"),f(l,"height","16"),f(t,"x","14"),f(t,"y","4"),f(t,"width","4"),f(t,"height","16"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","100%"),f(e,"height","100%"),f(e,"viewBox","0 0 24 24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","1.5"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(r,o){y(r,e,o),g(e,l),g(e,t)},p:U,i:U,o:U,d(r){r&&B(e)}}}class Ae extends G{constructor(e){super(),J(this,e,null,We,O,{})}}function Ee(n){let e,l;return{c(){e=H("svg"),l=H("polygon"),f(l,"points","5 3 19 12 5 21 5 3"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","100%"),f(e,"height","100%"),f(e,"viewBox","0 0 24 24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","1.5"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(t,r){y(t,e,r),g(e,l)},p:U,i:U,o:U,d(t){t&&B(e)}}}class He extends G{constructor(e){super(),J(this,e,null,Ee,O,{})}}function Ie(n){let e,l,t;return{c(){e=H("svg"),l=H("polygon"),t=H("rect"),f(l,"points","23 7 16 12 23 17 23 7"),f(t,"x","1"),f(t,"y","5"),f(t,"width","15"),f(t,"height","14"),f(t,"rx","2"),f(t,"ry","2"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","100%"),f(e,"height","100%"),f(e,"viewBox","0 0 24 24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","1.5"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round"),f(e,"class","feather feather-video")},m(r,o){y(r,e,o),g(e,l),g(e,t)},p:U,i:U,o:U,d(r){r&&B(e)}}}class ne extends G{constructor(e){super(),J(this,e,null,Ie,O,{})}}const _e=n=>{let e=["B","KB","MB","GB","PB"],l=0;for(;n>1024;)n/=1024,l++;let t=e[l];return n.toFixed(1)+" "+t},Ke=()=>!0;const{isNaN:Le}=we;function Ge(n){let e,l;return e=new Ae({}),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Je(n){let e,l;return e=new He({}),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Oe(n){let e,l;return e=new Se({}),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Qe(n){let e,l,t,r,o=!1,s,m=!0,a,_,i,u,c,h,C,N,S=ee(n[2])+"",W,K,A=ee(n[3])+"",I,b,X,L,p,F,d,q,te,re;function oe(){cancelAnimationFrame(s),l.paused||(s=ve(oe),o=!0),n[14].call(l)}const ie=[Oe,Je,Ge],Q=[];function ae(v,D){return v[2]===v[3]?0:v[4]?1:2}return c=ae(n),h=Q[c]=ie[c](n),d=new Re({}),{c(){e=P("div"),l=P("video"),t=P("track"),a=R(),_=P("div"),i=P("div"),u=P("span"),h.c(),C=R(),N=P("span"),W=E(S),K=E(" / "),I=E(A),b=R(),X=P("progress"),p=R(),F=P("div"),T(d.$$.fragment),f(t,"kind","captions"),se(l.src,r=n[0])||f(l,"src",r),f(l,"preload","auto"),f(l,"class","w-full h-full object-contain bg-black svelte-1cgkd5k"),n[3]===void 0&&ge(()=>n[15].call(l)),ue(l,"mirror",n[1]),f(u,"class","w-6 cursor-pointer text-white flex justify-center svelte-1cgkd5k"),f(N,"class","font-mono shrink-0 text-xs mx-3 text-white svelte-1cgkd5k"),X.value=L=n[2]/n[3]||0,f(X,"class","rounded h-2 w-full mx-3 svelte-1cgkd5k"),f(F,"class","w-6 cursor-pointer text-white"),f(i,"class","flex w-full justify-space h-full items-center px-1.5 "),f(_,"class","wrap absolute bottom-0 transition duration-500 m-1.5 bg-slate-800 px-1 py-2.5 rounded-md svelte-1cgkd5k"),fe(_,"opacity",n[3]&&n[6]?1:0)},m(v,D){y(v,e,D),g(e,l),g(l,t),n[17](l),g(e,a),g(e,_),g(_,i),g(i,u),Q[c].m(u,null),g(i,C),g(i,N),g(N,W),g(N,K),g(N,I),g(i,b),g(i,X),g(i,p),g(i,F),j(d,F,null),q=!0,te||(re=[M(l,"mousemove",n[7]),M(l,"click",n[9]),M(l,"play",n[11]),M(l,"pause",n[12]),M(l,"ended",n[13]),M(l,"timeupdate",oe),M(l,"durationchange",n[15]),M(l,"play",n[16]),M(l,"pause",n[16]),M(u,"click",n[9]),M(X,"mousemove",n[8]),M(X,"touchmove",ce(n[8])),M(X,"click",pe(ce(n[10]))),M(F,"click",n[18]),M(_,"mousemove",n[7])],te=!0)},p(v,[D]){(!q||D&1&&!se(l.src,r=v[0]))&&f(l,"src",r),!o&&D&4&&!Le(v[2])&&(l.currentTime=v[2]),o=!1,D&16&&m!==(m=v[4])&&l[m?"pause":"play"](),D&2&&ue(l,"mirror",v[1]);let le=c;c=ae(v),c!==le&&(Z(),k(Q[le],1,1,()=>{Q[le]=null}),x(),h=Q[c],h||(h=Q[c]=ie[c](v),h.c()),w(h,1),h.m(u,null)),(!q||D&4)&&S!==(S=ee(v[2])+"")&&Y(W,S),(!q||D&8)&&A!==(A=ee(v[3])+"")&&Y(I,A),(!q||D&12&&L!==(L=v[2]/v[3]||0))&&(X.value=L),(!q||D&72)&&fe(_,"opacity",v[3]&&v[6]?1:0)},i(v){q||(w(h),w(d.$$.fragment,v),q=!0)},o(v){k(h),k(d.$$.fragment,v),q=!1},d(v){v&&B(e),n[17](null),Q[c].d(),V(d),te=!1,ke(re)}}}function ee(n){if(isNaN(n)||!isFinite(n))return"...";const e=Math.floor(n/60);let l=Math.floor(n%60);return n<10&&(l=`0${l}`),`${e}:${l}`}function Ye(n,e,l){let{src:t}=e,{mirror:r}=e,o=0,s,m=!0,a,_=!0,i;function u(){clearTimeout(i),i=setTimeout(()=>l(6,_=!1),2500),l(6,_=!0)}function c(p){if(!s)return;if(p.type==="click"){C(p);return}if(p.type!=="touchmove"&&!(p.buttons&1))return;const F=p.type==="touchmove"?p.touches[0].clientX:p.clientX,{left:d,right:q}=p.currentTarget.getBoundingClientRect();l(2,o=s*(F-d)/(q-d))}function h(){m?a.play():a.pause()}function C(p){const{left:F,right:d}=p.currentTarget.getBoundingClientRect();l(2,o=s*(p.clientX-F)/(d-F))}async function N(){await ye(),l(5,a.currentTime=9999,a),setTimeout(async()=>{l(5,a.currentTime=0,a)},50)}function S(p){z.call(this,n,p)}function W(p){z.call(this,n,p)}function K(p){z.call(this,n,p)}function A(){o=this.currentTime,l(2,o)}function I(){s=this.duration,l(3,s)}function b(){m=this.paused,l(4,m)}function X(p){de[p?"unshift":"push"](()=>{a=p,l(5,a)})}const L=()=>a.requestFullscreen();return n.$$set=p=>{"src"in p&&l(0,t=p.src),"mirror"in p&&l(1,r=p.mirror)},n.$$.update=()=>{n.$$.dirty&1&&t&&N()},[t,r,o,s,m,a,_,u,c,h,C,S,W,K,A,I,b,X,L]}class he extends G{constructor(e){super(),J(this,e,Ye,Qe,O,{src:0,mirror:1})}}function Ze(n){let e,l,t,r,o,s,m;e=new Fe({}),e.$on("clear",n[11]);const a=[et,$e],_=[];function i(u,c){return t==null&&(t=!!Ke()),t?0:u[0].size?1:-1}return~(r=i(n))&&(o=_[r]=a[r](n)),{c(){T(e.$$.fragment),l=R(),o&&o.c(),s=$()},m(u,c){j(e,u,c),y(u,l,c),~r&&_[r].m(u,c),y(u,s,c),m=!0},p(u,c){let h=r;r=i(u),r===h?~r&&_[r].p(u,c):(o&&(Z(),k(_[h],1,1,()=>{_[h]=null}),x()),~r?(o=_[r],o?o.p(u,c):(o=_[r]=a[r](u),o.c()),w(o,1),o.m(s.parentNode,s)):o=null)},i(u){m||(w(e.$$.fragment,u),w(o),m=!0)},o(u){k(e.$$.fragment,u),k(o),m=!1},d(u){V(e,u),u&&B(l),~r&&_[r].d(u),u&&B(s)}}}function xe(n){let e,l,t,r;const o=[lt,tt],s=[];function m(a,_){return a[1]==="upload"?0:a[1]==="webcam"?1:-1}return~(e=m(n))&&(l=s[e]=o[e](n)),{c(){l&&l.c(),t=$()},m(a,_){~e&&s[e].m(a,_),y(a,t,_),r=!0},p(a,_){let i=e;e=m(a),e===i?~e&&s[e].p(a,_):(l&&(Z(),k(s[i],1,1,()=>{s[i]=null}),x()),~e?(l=s[e],l?l.p(a,_):(l=s[e]=o[e](a),l.c()),w(l,1),l.m(t.parentNode,t)):l=null)},i(a){r||(w(l),r=!0)},o(a){k(l),r=!1},d(a){~e&&s[e].d(a),a&&B(t)}}}function $e(n){let e,l=n[0].name+"",t,r,o,s=_e(n[0].size)+"",m;return{c(){e=P("div"),t=E(l),r=R(),o=P("div"),m=E(s),f(e,"class","file-name text-4xl p-6 break-all"),f(o,"class","file-size text-2xl p-2")},m(a,_){y(a,e,_),g(e,t),y(a,r,_),y(a,o,_),g(o,m)},p(a,_){_&1&&l!==(l=a[0].name+"")&&Y(t,l),_&1&&s!==(s=_e(a[0].size)+"")&&Y(m,s)},i:U,o:U,d(a){a&&B(e),a&&B(r),a&&B(o)}}}function et(n){let e,l;return e=new he({props:{src:n[0].data,mirror:n[4]&&n[1]==="webcam"}}),e.$on("play",n[15]),e.$on("pause",n[16]),e.$on("ended",n[17]),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},p(t,r){const o={};r&1&&(o.src=t[0].data),r&18&&(o.mirror=t[4]&&t[1]==="webcam"),e.$set(o)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function tt(n){let e,l;return e=new qe({props:{mirror_webcam:n[4],mode:"video"}}),e.$on("error",n[13]),e.$on("capture",n[14]),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},p(t,r){const o={};r&16&&(o.mirror_webcam=t[4]),e.$set(o)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function lt(n){let e,l,t;function r(s){n[12](s)}let o={filetype:"video/mp4,video/x-m4v,video/*",$$slots:{default:[nt]},$$scope:{ctx:n}};return n[8]!==void 0&&(o.dragging=n[8]),e=new Xe({props:o}),de.push(()=>Be(e,"dragging",r)),e.$on("load",n[10]),{c(){T(e.$$.fragment)},m(s,m){j(e,s,m),t=!0},p(s,m){const a={};m&262368&&(a.$$scope={dirty:m,ctx:s}),!l&&m&256&&(l=!0,a.dragging=s[8],Ne(()=>l=!1)),e.$set(a)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){V(e,s)}}}function nt(n){let e,l,t,r,o,s,m,a,_;return{c(){e=P("div"),l=E(n[5]),t=R(),r=P("span"),o=E("- "),s=E(n[6]),m=E(" -"),a=R(),_=E(n[7]),f(r,"class","text-gray-300"),f(e,"class","flex flex-col")},m(i,u){y(i,e,u),g(e,l),g(e,t),g(e,r),g(r,o),g(r,s),g(r,m),g(e,a),g(e,_)},p(i,u){u&32&&Y(l,i[5]),u&64&&Y(s,i[6]),u&128&&Y(_,i[7])},d(i){i&&B(e)}}}function rt(n){let e,l,t,r,o,s;e=new be({props:{show_label:n[3],Icon:ne,label:n[2]||"Video"}});const m=[xe,Ze],a=[];function _(i,u){return i[0]===null?0:1}return t=_(n),r=a[t]=m[t](n),{c(){T(e.$$.fragment),l=R(),r.c(),o=$()},m(i,u){j(e,i,u),y(i,l,u),a[t].m(i,u),y(i,o,u),s=!0},p(i,[u]){const c={};u&8&&(c.show_label=i[3]),u&4&&(c.label=i[2]||"Video"),e.$set(c);let h=t;t=_(i),t===h?a[t].p(i,u):(Z(),k(a[h],1,1,()=>{a[h]=null}),x(),r=a[t],r?r.p(i,u):(r=a[t]=m[t](i),r.c()),w(r,1),r.m(o.parentNode,o))},i(i){s||(w(e.$$.fragment,i),w(r),s=!0)},o(i){k(e.$$.fragment,i),k(r),s=!1},d(i){V(e,i),i&&B(l),a[t].d(i),i&&B(o)}}}function ot(n,e,l){let{value:t=null}=e,{source:r}=e,{label:o=void 0}=e,{show_label:s}=e,{mirror_webcam:m}=e,{drop_text:a="Drop a video file"}=e,{or_text:_="or"}=e,{upload_text:i="click to upload"}=e;const u=me();function c({detail:b}){u("change",b),u("upload",b),l(0,t=b)}function h({detail:b}){l(0,t=null),u("change",b),u("clear")}let C=!1;function N(b){C=b,l(8,C)}function S(b){z.call(this,n,b)}const W=({detail:b})=>u("change",b);function K(b){z.call(this,n,b)}function A(b){z.call(this,n,b)}function I(b){z.call(this,n,b)}return n.$$set=b=>{"value"in b&&l(0,t=b.value),"source"in b&&l(1,r=b.source),"label"in b&&l(2,o=b.label),"show_label"in b&&l(3,s=b.show_label),"mirror_webcam"in b&&l(4,m=b.mirror_webcam),"drop_text"in b&&l(5,a=b.drop_text),"or_text"in b&&l(6,_=b.or_text),"upload_text"in b&&l(7,i=b.upload_text)},n.$$.update=()=>{n.$$.dirty&256&&u("drag",C)},[t,r,o,s,m,a,_,i,C,u,c,h,N,S,W,K,A,I]}class it extends G{constructor(e){super(),J(this,e,ot,rt,O,{value:0,source:1,label:2,show_label:3,mirror_webcam:4,drop_text:5,or_text:6,upload_text:7})}}function at(n){let e,l;return e=new he({props:{src:n[0].data,mirror:!1}}),e.$on("play",n[3]),e.$on("pause",n[4]),e.$on("ended",n[5]),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},p(t,r){const o={};r&1&&(o.src=t[0].data),e.$set(o)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function st(n){let e,l,t,r;return t=new ne({}),{c(){e=P("div"),l=P("div"),T(t.$$.fragment),f(l,"class","h-5 dark:text-white opacity-50"),f(e,"class","h-full min-h-[15rem] flex justify-center items-center")},m(o,s){y(o,e,s),g(e,l),j(t,l,null),r=!0},p:U,i(o){r||(w(t.$$.fragment,o),r=!0)},o(o){k(t.$$.fragment,o),r=!1},d(o){o&&B(e),V(t)}}}function ut(n){let e,l,t,r,o,s;e=new be({props:{show_label:n[2],Icon:ne,label:n[1]||"Video"}});const m=[st,at],a=[];function _(i,u){return i[0]===null?0:1}return t=_(n),r=a[t]=m[t](n),{c(){T(e.$$.fragment),l=R(),r.c(),o=$()},m(i,u){j(e,i,u),y(i,l,u),a[t].m(i,u),y(i,o,u),s=!0},p(i,[u]){const c={};u&4&&(c.show_label=i[2]),u&2&&(c.label=i[1]||"Video"),e.$set(c);let h=t;t=_(i),t===h?a[t].p(i,u):(Z(),k(a[h],1,1,()=>{a[h]=null}),x(),r=a[t],r?r.p(i,u):(r=a[t]=m[t](i),r.c()),w(r,1),r.m(o.parentNode,o))},i(i){s||(w(e.$$.fragment,i),w(r),s=!0)},o(i){k(e.$$.fragment,i),k(r),s=!1},d(i){V(e,i),i&&B(l),a[t].d(i),i&&B(o)}}}function ft(n,e,l){let{value:t=null}=e,{label:r=void 0}=e,{show_label:o}=e;const s=me();function m(i){z.call(this,n,i)}function a(i){z.call(this,n,i)}function _(i){z.call(this,n,i)}return n.$$set=i=>{"value"in i&&l(0,t=i.value),"label"in i&&l(1,r=i.label),"show_label"in i&&l(2,o=i.show_label)},n.$$.update=()=>{n.$$.dirty&1&&t&&s("change",t)},[t,r,o,m,a,_]}class ct extends G{constructor(e){super(),J(this,e,ft,ut,O,{value:0,label:1,show_label:2})}}function _t(n){let e,l;return e=new it({props:{value:n[10],label:n[4],show_label:n[6],source:n[5],drop_text:n[12]("interface.drop_video"),or_text:n[12]("or"),upload_text:n[12]("interface.click_to_upload"),mirror_webcam:n[8]}}),e.$on("change",n[15]),e.$on("drag",n[16]),e.$on("error",n[17]),e.$on("change",n[18]),e.$on("clear",n[19]),e.$on("play",n[20]),e.$on("pause",n[21]),e.$on("upload",n[22]),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},p(t,r){const o={};r&1024&&(o.value=t[10]),r&16&&(o.label=t[4]),r&64&&(o.show_label=t[6]),r&32&&(o.source=t[5]),r&4096&&(o.drop_text=t[12]("interface.drop_video")),r&4096&&(o.or_text=t[12]("or")),r&4096&&(o.upload_text=t[12]("interface.click_to_upload")),r&256&&(o.mirror_webcam=t[8]),e.$set(o)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function dt(n){let e,l;return e=new ct({props:{value:n[10],label:n[4],show_label:n[6]}}),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},p(t,r){const o={};r&1024&&(o.value=t[10]),r&16&&(o.label=t[4]),r&64&&(o.show_label=t[6]),e.$set(o)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function mt(n){let e,l,t,r,o,s;const m=[n[1]];let a={};for(let c=0;c<m.length;c+=1)a=Ve(a,m[c]);e=new Ce({props:a});const _=[dt,_t],i=[];function u(c,h){return c[9]==="static"?0:1}return t=u(n),r=i[t]=_[t](n),{c(){T(e.$$.fragment),l=R(),r.c(),o=$()},m(c,h){j(e,c,h),y(c,l,h),i[t].m(c,h),y(c,o,h),s=!0},p(c,h){const C=h&2?Me(m,[Pe(c[1])]):{};e.$set(C);let N=t;t=u(c),t===N?i[t].p(c,h):(Z(),k(i[N],1,1,()=>{i[N]=null}),x(),r=i[t],r?r.p(c,h):(r=i[t]=_[t](c),r.c()),w(r,1),r.m(o.parentNode,o))},i(c){s||(w(e.$$.fragment,c),w(r),s=!0)},o(c){k(e.$$.fragment,c),k(r),s=!1},d(c){V(e,c),c&&B(l),i[t].d(c),c&&B(o)}}}function bt(n){let e,l;return e=new ze({props:{visible:n[3],variant:n[9]==="dynamic"&&n[0]===null&&n[5]==="upload"?"dashed":"solid",color:n[11]?"green":"grey",padding:!1,elem_id:n[2],style:{height:n[7].height,width:n[7].width},$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){T(e.$$.fragment)},m(t,r){j(e,t,r),l=!0},p(t,[r]){const o={};r&8&&(o.visible=t[3]),r&545&&(o.variant=t[9]==="dynamic"&&t[0]===null&&t[5]==="upload"?"dashed":"solid"),r&2048&&(o.color=t[11]?"green":"grey"),r&4&&(o.elem_id=t[2]),r&128&&(o.style={height:t[7].height,width:t[7].width}),r&8396659&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function ht(n,e,l){let t;Te(n,je,d=>l(12,t=d));let{elem_id:r=""}=e,{visible:o=!0}=e,{value:s=null}=e,{label:m}=e,{source:a}=e,{root:_}=e,{root_url:i}=e,{show_label:u}=e,{loading_status:c}=e,{style:h={}}=e,{mirror_webcam:C}=e,{mode:N}=e,S,W=!1;const K=({detail:d})=>l(0,s=d),A=({detail:d})=>l(11,W=d),I=({detail:d})=>{l(1,c=c||{}),l(1,c.status="error",c),l(1,c.message=d,c)};function b(d){z.call(this,n,d)}function X(d){z.call(this,n,d)}function L(d){z.call(this,n,d)}function p(d){z.call(this,n,d)}function F(d){z.call(this,n,d)}return n.$$set=d=>{"elem_id"in d&&l(2,r=d.elem_id),"visible"in d&&l(3,o=d.visible),"value"in d&&l(0,s=d.value),"label"in d&&l(4,m=d.label),"source"in d&&l(5,a=d.source),"root"in d&&l(13,_=d.root),"root_url"in d&&l(14,i=d.root_url),"show_label"in d&&l(6,u=d.show_label),"loading_status"in d&&l(1,c=d.loading_status),"style"in d&&l(7,h=d.style),"mirror_webcam"in d&&l(8,C=d.mirror_webcam),"mode"in d&&l(9,N=d.mode)},n.$$.update=()=>{n.$$.dirty&24577&&l(10,S=Ue(s,i??_))},[s,c,r,o,m,a,u,h,C,N,S,W,t,_,i,K,A,I,b,X,L,p,F]}class gt extends G{constructor(e){super(),J(this,e,ht,bt,O,{elem_id:2,visible:3,value:0,label:4,source:5,root:13,root_url:14,show_label:6,loading_status:1,style:7,mirror_webcam:8,mode:9})}}var jt=gt;const Vt=["static","dynamic"];export{jt as Component,Vt as modes};
//# sourceMappingURL=index.245dd9b0.js.map