import{q as r,a,r as e,s as d}from"./assets/header-aae8760c.js";import{r as c,o as m,a as u,b,c as E}from"./assets/search-input-7f405d0c.js";import"./assets/quote-be75e3e4.js";import{i as n}from"./assets/vendor-7b59b48c.js";window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches?(r.set("limit",12),a.set("limit",10)):(r.set("limit",9),a.set("limit",8)),r.set("page",1),a.set("page",1),e.searchForm.reset(),e.searchForm.classList.add("visually-hidden"),c()});c();e.filter.addEventListener("click",m);e.pagination.addEventListener("click",u);e.list.addEventListener("click",b);e.exercisesContainer.addEventListener("click",E);document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("subscribeForm"),t=document.getElementById("subscribeBtn");s.addEventListener("submit",async o=>{o.preventDefault();const l=s.elements.email.value;try{t.disabled=!0,t.textContent="Subscribing...";const i=await d(l);n.success({title:"Success",message:i.message})}catch(i){n.error({title:"Error",message:i.message})}finally{t.disabled=!1,t.textContent="Send",s.reset()}})});e.scrollUpButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
