import{e as a,d as u}from"./vendor-9ceb8365.js";const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),m=document.querySelector(".js-close-menu"),v=document.querySelectorAll(".mobile-menu-link"),n=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),e?(a(document.body),document.removeEventListener("keydown",c),t.removeEventListener("click",r)):(u(document.body),document.addEventListener("keydown",c),t.addEventListener("click",r))},c=e=>{e.key==="Escape"&&n()},r=e=>{e.target===t&&n()};s.addEventListener("click",n);m.addEventListener("click",n);v.forEach(e=>{e.addEventListener("click",n)});window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),a(document.body),document.removeEventListener("keydown",c),t.removeEventListener("click",r))});const i=document.querySelector(".header"),d=document.querySelector("[data-home]"),l=document.querySelector("[data-favorites]");let o=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>=2&&!o?(i.classList.add("header-scrolled"),o=!0):e<2&&o&&(i.classList.remove("header-scrolled"),o=!1)});(function(){window.location.href.includes("favorites.html")?(d.classList.remove("active"),l.classList.add("active")):(d.classList.add("active"),l.classList.remove("active"))})();
//# sourceMappingURL=header-3d6609c1.js.map
