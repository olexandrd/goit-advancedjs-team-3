import{q as i,a as r,r as e,s as d}from"./assets/header-76e2ce0d.js";import{r as n,o as m,a as u,b,c as p}from"./assets/search-input-3f6fee8b.js";import"./assets/quote-600b11ce.js";import{i as a}from"./assets/vendor-790bbfe5.js";window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches?(i.set("limit",12),r.set("limit",10)):(i.set("limit",9),r.set("limit",8)),i.set("page",1),r.set("page",1),e.searchForm.reset(),e.searchForm.classList.add("visually-hidden"),n()});n();e.filter.addEventListener("click",m);e.pagination.addEventListener("click",u);e.list.addEventListener("click",b);e.exercisesContainer.addEventListener("click",p);document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("subscribeForm"),t=document.getElementById("subscribeBtn");s.addEventListener("submit",async c=>{c.preventDefault();const o=s.elements.email.value;try{t.disabled=!0,t.textContent="Subscribing...";const l=await d(o);a.success({title:"Success",message:"Subscription successful!"})}catch{a.error({title:"Error",message:"Subscription failed. Please try again."})}finally{t.disabled=!1,t.textContent="Send"}})});
//# sourceMappingURL=commonHelpers.js.map
