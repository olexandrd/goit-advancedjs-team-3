import{e as a,d as l}from"./vendor-790bbfe5.js";import{s as m}from"./header-4f3dcacb.js";const n=document.querySelector(".js-menu-container"),c=document.querySelector(".js-open-menu"),y=document.querySelector(".js-close-menu"),p=document.querySelectorAll(".mobile-menu-link"),o=()=>{const e=c.getAttribute("aria-expanded")==="true"||!1;c.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),e?(a(document.body),document.removeEventListener("keydown",r),n.removeEventListener("click",s)):(l(document.body),document.addEventListener("keydown",r),n.addEventListener("click",s))},r=e=>{e.key==="Escape"&&o()},s=e=>{e.target===n&&o()};c.addEventListener("click",o);y.addEventListener("click",o);p.forEach(e=>{e.addEventListener("click",o)});window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),c.setAttribute("aria-expanded",!1),a(document.body),document.removeEventListener("keydown",r),n.removeEventListener("click",s))});(async()=>{const e=document.getElementById("quote");if(!e)return;let t;const i=localStorage.getItem("quote");if(i&&(t=JSON.parse(i),Date.now()-t.timestamp>1e3*60*60*24&&(t=null)),!t)try{t=await m(),localStorage.setItem("quote",JSON.stringify({...t,timestamp:Date.now()}))}catch{t=null}if(!t)return;const u=e.querySelector(".quote-description"),d=e.querySelector(".quote-author");u.textContent=t.quote,d.textContent=t.author,e.classList.remove("hidden")})();
//# sourceMappingURL=quote-08532d6c.js.map
