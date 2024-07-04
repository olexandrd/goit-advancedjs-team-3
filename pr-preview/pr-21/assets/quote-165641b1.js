import{e as y,d as S}from"./vendor-790bbfe5.js";const d="https://your-energy.b.goit.study/api/",s={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeaderSpan:document.querySelector(".js-exercise-header-span"),exerciseHeader:document.querySelector(".js-exercise-header")},w={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},x=new URLSearchParams({filter:w.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),v=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),l={method:"GET",headers:{"Content-Type":"application/json"}};async function b(){const e=await fetch(`${d}exercises?${v}`,l);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function j(){const e=await fetch(`${d}filters?${x}`,l);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function q(){const e=await fetch(`${d}quote`,l);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}const m=document.querySelector(".header"),p=document.querySelector("[data-home]"),f=document.querySelector("[data-favorites]");let r=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>=2&&!r?(m.classList.add("header-scrolled"),r=!0):e<2&&r&&(m.classList.remove("header-scrolled"),r=!1)});(function(){window.location.href.includes("favorites.html")?(p.classList.remove("active"),f.classList.add("active")):(p.classList.add("active"),f.classList.remove("active"))})();function M(e){s.exerciseHeader.textContent="Exercise /",s.exerciseHeaderSpan.textContent=`${e}`,s.exerciseHeaderSpan.dataset.exercise=e}function H(){s.exerciseHeader.textContent="Exercise",s.exerciseHeaderSpan.textContent="",s.exerciseHeaderSpan.dataset.exercise=""}const o=document.querySelector(".js-menu-container"),c=document.querySelector(".js-open-menu"),L=document.querySelector(".js-close-menu"),g=document.querySelectorAll(".mobile-menu-link"),n=()=>{const e=c.getAttribute("aria-expanded")==="true"||!1;c.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),e?(y(document.body),document.removeEventListener("keydown",a),o.removeEventListener("click",i)):(S(document.body),document.addEventListener("keydown",a),o.addEventListener("click",i))},a=e=>{e.key==="Escape"&&n()},i=e=>{e.target===o&&n()};c.addEventListener("click",n);L.addEventListener("click",n);g.forEach(e=>{e.addEventListener("click",n)});window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),c.setAttribute("aria-expanded",!1),y(document.body),document.removeEventListener("keydown",a),o.removeEventListener("click",i))});(async()=>{const e=document.getElementById("quote");if(!e)return;let t;const u=localStorage.getItem("quote");if(u&&(t=JSON.parse(u),Date.now()-t.timestamp>1e3*60*60*24&&(t=null)),!t)try{t=await q(),localStorage.setItem("quote",JSON.stringify({...t,timestamp:Date.now()}))}catch{t=null}if(!t)return;const E=e.querySelector(".quote-description"),h=e.querySelector(".quote-author");E.textContent=t.quote,h.textContent=t.author,e.classList.remove("hidden")})();export{w as F,b as a,v as b,H as c,M as d,x as q,s as r,j as s};
//# sourceMappingURL=quote-165641b1.js.map
