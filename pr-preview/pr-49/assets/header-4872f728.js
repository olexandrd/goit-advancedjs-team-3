(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const n="https://your-energy.b.goit.study/api/",o={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeaderSpan:document.querySelector(".js-exercise-header-span"),exerciseHeader:document.querySelector(".js-exercise-header"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchInputCrossIcon:document.querySelector(".search-input-icon.cross-icon"),searchInputSearchIcon:document.querySelector(".search-input-icon.search-icon"),exercisePopUpBackdrop:document.querySelector(".exercise-pop-up-backdrop"),exercisePopUpContent:document.querySelector(".exercise-pop-up-content"),exercisePopUpCloseBtn:document.querySelector(".exercise-pop-up-close-btn"),exercisePopupAddFavoritesBtn:document.querySelector("#add-favorites"),exercisesContainer:document.querySelector(".exercises-container"),body:document.querySelector("body"),scrollUpButton:document.querySelector(".scroll-up-button"),mainSection:document.querySelector(".main-section")},f={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},h=new URLSearchParams({filter:f.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),y=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),u={method:"GET",headers:{"Content-Type":"application/json"}};async function S(){const e=await fetch(`${n}exercises?${y}`,u);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function x(e){const r=await fetch(`${n}exercises/${e}`,u);if(!r.ok)throw new Error(`Ooops, status code: ${r.status}`);return await r.json()}async function w(){const e=await fetch(`${n}filters?${h}`,u);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function q(){const e=await fetch(`${n}quote`,u);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function E(e){const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})},i=await fetch(`${n}subscription`,r),c=await i.json();if(!i.ok)throw new Error(c.message||"Failed to subscribe");return c}const l=document.querySelector(".header"),p=document.querySelector("[data-home]"),m=document.querySelector("[data-favorites]");let a=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop,r=document.querySelector(".scroll-up-button-container");e>=2&&!a?(l.classList.add("header-scrolled"),r.classList.remove("visually-hidden"),a=!0):e<2&&a&&(r.classList.add("visually-hidden"),l.classList.remove("header-scrolled"),a=!1)});(function(){window.location.href.includes("favorites.html")?(p.classList.remove("active"),m.classList.add("active")):(p.classList.add("active"),m.classList.remove("active"))})();function v(e){o.exerciseHeader.textContent="Exercises /",o.exerciseHeaderSpan.textContent=`${e}`,o.exerciseHeaderSpan.dataset.exercise=e}function L(){o.exerciseHeader.textContent="Exercises",o.exerciseHeaderSpan.textContent="",o.exerciseHeaderSpan.dataset.exercise=""}export{f as F,y as a,q as b,w as c,S as d,x as e,L as f,v as g,h as q,o as r,E as s};
//# sourceMappingURL=header-4872f728.js.map
