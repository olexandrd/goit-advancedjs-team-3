import{q as r,a,r as e,b as c,o as l,c as m,d as u,e as b,s as E}from"./assets/eventHandlers-396a5a98.js";import"./assets/search-input-c90e0e7a.js";import"./assets/ratingPopup-66d0aca4.js";import{i as n}from"./assets/vendor-7b59b48c.js";window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches?(r.set("limit",12),a.set("limit",10)):(r.set("limit",9),a.set("limit",8)),r.set("page",1),a.set("page",1),e.searchForm.reset(),e.searchForm.classList.add("visually-hidden"),c()});c();e.filter.addEventListener("click",l);e.pagination.addEventListener("click",m);e.list.addEventListener("click",u);e.exercisesContainer.addEventListener("click",b);document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("subscribeForm"),t=document.getElementById("subscribeBtn");s.addEventListener("submit",async o=>{o.preventDefault();const d=s.elements.email.value;try{t.disabled=!0,t.textContent="Subscribing...";const i=await E(d);n.success({title:"Success",message:i.message})}catch(i){n.error({title:"Error",message:i.message})}finally{t.disabled=!1,t.textContent="Send",s.reset()}})});
//# sourceMappingURL=commonHelpers.js.map
