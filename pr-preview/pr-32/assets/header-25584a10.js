(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const n="https://your-energy.b.goit.study/api/",o={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeaderSpan:document.querySelector(".js-exercise-header-span"),exerciseHeader:document.querySelector(".js-exercise-header"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchInputCrossIcon:document.querySelector(".search-input-icon.cross-icon"),searchInputSearchIcon:document.querySelector(".search-input-icon.search-icon"),exercisePopUpBackdrop:document.querySelector(".exercise-pop-up-backdrop"),exercisePopUpContent:document.querySelector(".exercise-pop-up-content"),exercisePopUpCloseBtn:document.querySelector(".exercise-pop-up-close-btn"),exercisesContainer:document.querySelector(".exercises-container"),body:document.querySelector("body")},m={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},h=new URLSearchParams({filter:m.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),y=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),a={method:"GET",headers:{"Content-Type":"application/json"}};async function S(){const e=await fetch(`${n}exercises?${y}`,a);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function x(e){const s=await fetch(`${n}exercises/${e}`,a);if(!s.ok)throw new Error(`Ooops, status code: ${s.status}`);return await s.json()}async function w(){const e=await fetch(`${n}filters?${h}`,a);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function q(){const e=await fetch(`${n}quote`,a);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function E(e){const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})},c=await fetch(`${n}subscription`,s);if(!c.ok)throw new Error(`Ooops, status code: ${c.status}`);return await c.json()}const l=document.querySelector(".header"),p=document.querySelector("[data-home]"),f=document.querySelector("[data-favorites]");let i=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;e>=2&&!i?(l.classList.add("header-scrolled"),i=!0):e<2&&i&&(l.classList.remove("header-scrolled"),i=!1)});(function(){window.location.href.includes("favorites.html")?(p.classList.remove("active"),f.classList.add("active")):(p.classList.add("active"),f.classList.remove("active"))})();function L(e){o.exerciseHeader.textContent="Exercise /",o.exerciseHeaderSpan.textContent=`${e}`,o.exerciseHeaderSpan.dataset.exercise=e}function v(){o.exerciseHeader.textContent="Exercise",o.exerciseHeaderSpan.textContent="",o.exerciseHeaderSpan.dataset.exercise=""}export{m as F,y as a,q as b,w as c,S as d,x as e,v as f,L as g,h as q,o as r,E as s};
//# sourceMappingURL=header-25584a10.js.map
