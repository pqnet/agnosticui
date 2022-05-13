import{_ as m}from"./chunks/astro-logo-light.e4578b95.js";import{_ as q,a as w}from"./chunks/stackblitz.d7b8516e.js";import{_ as v,a as b,b as y,c as f}from"./chunks/Angular-icon.0cc396b9.js";import"./chunks/common.min.a7306143.js";import{c as h,_}from"./chunks/agnostic-vue.esm.3569929a.js";import{_ as D,r as i,o as r,c as g,e as a,w as n,a as s,b as o,d}from"./app.a8799d18.js";const x={name:"DrawerExamples",components:{Button:h,Drawer:_},setup(){let t=null;return{closeDrawer:()=>{t&&t.hide()},openDrawer:()=>{t&&t.show()},assignDrawerRef:k=>{t=k}}}},B=s("h2",null,"Drawer",-1),R=o(" Open first bottom drawer via drawerRef "),T=s("div",{class:"mbs24 mbe16"},null,-1),A=o(" Open the first bottom drawer via data attribute "),C={class:"flex-fill"},I=s("p",null,"This is main drawer slot. To test positioning, update the placement property to one of: start | end | top | bottom.",-1),S=o(" Close from within slot using instance "),O=s("div",{class:"mbs24 mbe16"},null,-1),N=o(" Open second right drawer via data attribute "),V=s("p",null,"This is main drawer slot",-1),E=s("div",{class:"mbs24 mbe16"},null,-1),M=o(" Open left drawer via data attribute "),j=s("p",null,"This is main drawer slot",-1),P=s("div",{class:"mbs24 mbe16"},null,-1),U=o(" Open top drawer via data attribute "),$=s("p",null,"This is main drawer slot",-1);function z(t,e,u,c,k,K){const p=i("Button"),l=i("Drawer");return r(),g("section",null,[B,a(p,{mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0,type:"button",onClick:c.openDrawer},{default:n(()=>[R]),_:1},8,["onClick"]),T,a(p,{type:"button","data-a11y-dialog-show":"drawer-bottom-test",mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0},{default:n(()=>[A]),_:1}),a(l,{id:"drawer-bottom-test","drawer-root":"body",placement:"bottom",title:"My Drawer Title 1",onInstance:c.assignDrawerRef},{default:n(()=>[s("div",C,[I,a(p,{mode:"primary",isBordered:"",style:{position:"absolute",bottom:"1rem",left:"1rem",right:"1rem"},onClick:e[0]||(e[0]=J=>c.closeDrawer())},{default:n(()=>[S]),_:1})])]),_:1},8,["onInstance"]),O,a(p,{type:"button","data-a11y-dialog-show":"drawer-end-test",mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0},{default:n(()=>[N]),_:1}),a(l,{id:"drawer-end-test","drawer-root":"body",placement:"end",title:"My Drawer Title 2"},{default:n(()=>[V]),_:1}),E,a(p,{type:"button","data-a11y-dialog-show":"drawer-start-test",mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0},{default:n(()=>[M]),_:1}),a(l,{id:"drawer-start-test","drawer-root":"body",placement:"start",title:"My Drawer Title 3"},{default:n(()=>[j]),_:1}),P,a(p,{type:"button","data-a11y-dialog-show":"drawer-top-test",mode:"primary","is-bordered":!0,"is-block":!0,"is-rounded":!0},{default:n(()=>[U]),_:1}),a(l,{id:"drawer-top-test","drawer-root":"body",placement:"top",title:"My Drawer Title 4"},{default:n(()=>[$]),_:1})])}var L=D(x,[["render",z]]);const G=d("",5),Y=d("",22),na='{"title":"Drawer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/drawer.md"}',H={},sa=Object.assign(H,{setup(t){return(e,u)=>(r(),g("div",null,[G,a(L),Y]))}});export{na as __pageData,sa as default};