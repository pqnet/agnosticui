import{_ as f}from"./chunks/astro-logo-light.e4578b95.js";import{_ as b,a as h}from"./chunks/stackblitz.d7b8516e.js";import{_ as x,a as w,b as _,c as I}from"./chunks/Angular-icon.0cc396b9.js";import"./chunks/common.min.a7306143.js";import{f as O,r as C,s as A,A as S}from"./chunks/agnostic-vue.esm.3569929a.js";import{T as E}from"./chunks/ToastIconExample.d94c03ec.js";import{p as r,_ as j,r as l,o as d,c as v,e as a,w as s,A as q,F as P,b as u,a as p,k as z,d as g}from"./app.a8799d18.js";const N={name:"CloseExamples",components:{Close:O,Toasts:C,Toast:A,ToastIconExample:E},setup(){const c=r(!0);setTimeout(()=>{c.value=!1},1e4);const t=r(!0),k=()=>{t.value=!1},n=r(!0);return{timedToast:c,toast1IsOpen:t,toast2IsOpen:n,close1Toast:k,close2Toast:()=>{n.value=!1}}}},V=u(" Self timed toast that will close in 10 seconds. "),M=p("div",{className:"mbe14"},null,-1),U=p("div",{class:"flex-fill"}," Self timed toast that will close in 10 seconds. ",-1),B=u(" Error toast with \xA0"),R=p("code",null,"aria-live",-1),D=u("\xA0 \u201Cassertive\u201D (10 seconds) "),G=p("div",{class:"flex-fill"}," This is a closable toast message ",-1),L=p("div",{className:"mbe14"},null,-1),Y=p("div",{class:"flex-fill"}," This is a closable toast message ",-1);function $(c,t,k,n,y,X){const o=l("ToastIconExample"),e=l("Toast"),i=l("Toasts"),m=l("Close");return d(),v(P,null,[a(i,{"vertical-position":"top","horizontal-position":"end"},{default:s(()=>[a(e,{"is-open":n.timedToast,type:"info"},{default:s(()=>[a(o,{"icon-type":"info","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),V]),_:1},8,["is-open"]),M,a(e,{"is-open":n.timedToast,type:"success"},{default:s(()=>[a(o,{"icon-type":"success","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),U]),_:1},8,["is-open"])]),_:1}),a(i,{"vertical-position":"top","horizontal-position":"center"},{default:s(()=>[a(e,{"is-open":n.timedToast,type:"error"},{default:s(()=>[a(o,{"icon-type":"error","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),B,R,D]),_:1},8,["is-open"])]),_:1}),a(i,{"vertical-position":"bottom","horizontal-position":"end"},{default:s(()=>[a(e,{"is-open":n.toast1IsOpen,type:"dark"},{default:s(()=>[a(o,{"icon-type":"dark","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),G,a(m,{onClick:t[0]||(t[0]=T=>n.close1Toast()),style:q({color:"var(--agnostic-light)"})},null,8,["style"])]),_:1},8,["is-open"]),L,a(e,{"is-open":n.toast2IsOpen,type:"warning"},{default:s(()=>[a(o,{"icon-type":"warning","utility-classes":"mie8"},{icon:s(()=>[]),_:1}),Y,a(m,{onClick:t[1]||(t[1]=T=>n.close2Toast()),style:q({color:"var(--agnostic-warning-dark)"})},null,8,["style"])]),_:1},8,["is-open"])]),_:1})],64)}var F=j(N,[["render",$]]);const H=g("",5),W=g("",17),K=u("The Angular Toast component is still in development"),J=g("",6),ea='{"title":"Toast","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/toasts.md"}',Q={},ca=Object.assign(Q,{setup(c){return(t,k)=>(d(),v("div",null,[H,a(F),W,a(z(S),{type:"error"},{default:s(()=>[K]),_:1}),J]))}});export{ea as __pageData,ca as default};