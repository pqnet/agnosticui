import{_ as r}from"./chunks/astro-logo-light.e4578b95.js";import{_ as u,a as k}from"./chunks/stackblitz.d7b8516e.js";import{_ as g,a as d,b as m,c as y}from"./chunks/Angular-icon.0cc396b9.js";import"./chunks/common.min.a7306143.js";import{P as b,u as h}from"./chunks/agnostic-vue.esm.3569929a.js";import{_ as f,r as v,o,c as e,e as c,a as w,d as l}from"./app.a8799d18.js";const P={name:"PaginationExamples",components:{Pagination:b},setup(){const{currentPaginationPage:s,paginationPages:a,handlePaginationUpdate:t}=h(1,1,20);return{currentPaginationPage:s,paginationPages:a,interceptPageUpdate:p=>{console.log("interceptPageUpdate--page: ",p),t(p)}}}},_=w("h2",null,"Pagination",-1);function q(s,a,t,n,p,C){const i=v("Pagination");return o(),e("section",null,[_,c(i,{onUpdatePage:n.interceptPageUpdate,current:n.currentPaginationPage,pages:n.paginationPages},null,8,["onUpdatePage","current","pages"])])}var x=f(P,[["render",q]]);const A=l("",5),U=l("",23),M='{"title":"Pagination","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/pagination.md"}',S={},R=Object.assign(S,{setup(s){return(a,t)=>(o(),e("div",null,[A,c(x),U]))}});export{M as __pageData,R as default};