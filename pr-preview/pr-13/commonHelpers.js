import"./assets/main-20f5286a.js";import"./assets/search-input-a99b05e6.js";import{e as u,d as f}from"./assets/vendor-9ceb8365.js";const h="https://your-energy.b.goit.study/api/",d={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination")},E={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},a=new URLSearchParams({filter:E.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),g={method:"GET",headers:{"Content-Type":"application/json"}};new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8});async function p(){const e=await fetch(`${h}filters?${a}`,g);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}function y(e){let r="";for(let t=1;t<=e;t++)r+=`<li class="pagination-item" data-id="${t}"><a href="#" class="pagination-link">${t}</a></li>`;d.pagination.innerHTML=r}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches?a.set("limit",12):a.set("limit",9),p()});p().then(e=>{e.totalPages,e.results,y(e.totalPages),Array.from(d.pagination.childNodes).find(t=>t.dataset.id==e.page).classList.add("active")}).catch(e=>{console.log(e)});d.filter.addEventListener("click",L);function L(e){}const n=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),w=document.querySelector(".js-close-menu"),v=document.querySelectorAll(".mobile-menu-link"),i=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),e?(u(document.body),document.removeEventListener("keydown",c),n.removeEventListener("click",l)):(f(document.body),document.addEventListener("keydown",c),n.addEventListener("click",l))},c=e=>{e.key==="Escape"&&i()},l=e=>{e.target===n&&i()};s.addEventListener("click",i);w.addEventListener("click",i);v.forEach(e=>{e.addEventListener("click",i)});window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),u(document.body),document.removeEventListener("keydown",c),n.removeEventListener("click",l))});const m=document.querySelector(".header");let o=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>=2&&!o?(m.classList.add("header-scrolled"),o=!0):e<2&&o&&(m.classList.remove("header-scrolled"),o=!1)});
//# sourceMappingURL=commonHelpers.js.map
