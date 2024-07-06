import{i as m,t as Y}from"./vendor-347e8cf8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const f="https://your-energy.b.goit.study/api/",o={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeaderSpan:document.querySelector(".js-exercise-header-span"),exerciseHeader:document.querySelector(".js-exercise-header"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchInputCrossIcon:document.querySelector(".search-input-icon.cross-icon"),searchInputSearchIcon:document.querySelector(".search-input-icon.search-icon"),exercisePopUpBackdrop:document.querySelector(".exercise-pop-up-backdrop"),exercisePopUpContent:document.querySelector(".exercise-pop-up-content"),exercisePopUpCloseBtn:document.querySelector(".exercise-pop-up-close-btn"),exercisesContainer:document.querySelector(".exercises-container"),body:document.querySelector("body"),scrollUpButton:document.querySelector(".scroll-up-button"),mainSection:document.querySelector(".main-section"),ratingPopUpBackdrop:document.querySelector(".js-rating-pop-up-backdrop"),ratingPopUpContent:document.querySelector(".rating-pop-up-content"),ratingPopUpCloseBtn:document.querySelector(".js-close-rating-pop-up"),ratingForm:document.querySelector(".form-rating")},x={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},w=new URLSearchParams({filter:x.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),l=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),L={method:"GET",headers:{"Content-Type":"application/json"}};async function Z(){const e=await fetch(`${f}exercises?${l}`,L);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function ge(e,{rate:t,email:s,review:r}){const i={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({rate:t,email:s,review:r})},a=await fetch(`${f}exercises/${e}/rating`,i),n=await a.json();if(!a.ok)throw new Error(n.message||"Failed to set a rating");return n}async function X(e){const t=await fetch(`${f}exercises/${e}`,L);if(!t.ok)throw new Error(`Ooops, status code: ${t.status}`);return await t.json()}async function ee(){const e=await fetch(`${f}filters?${w}`,L);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function he(){const e=await fetch(`${f}quote`,L);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function xe(e){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})},s=await fetch(`${f}subscription`,t),r=await s.json();if(!s.ok)throw new Error(r.message||"Failed to subscribe");return r}function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}function te(e){const t=e.map(({filter:s,name:r,imgURL:i})=>`<li class="category-card fade-item" data-filter="${s}" data-name="${r}">
            <img
              src="${i}"
              alt="${r}"
              class="category-card-img"
              width="80"
              height="80"
            />
            <div class="category-card-content">
            <p class="category-card-title">${O(r)}</p> 
            <h3 class="category-card-text">${O(s)}</h3>
            </div>
        </li>`).join("");o.list.innerHTML=t}function q(e){return`<svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="arrow-icon ${e??""}"
              >
                <path
                  d="M8.83289 10.5917C8.75478 10.5142 8.69279 10.4221 8.65048 10.3205C8.60817 10.219 8.58639 10.11 8.58639 10C8.58639 9.89001 8.60817 9.78109 8.65048 9.67954C8.69279 9.57799 8.75478 9.48582 8.83289 9.40835L12.6579 5.59168C12.736 5.51421 12.798 5.42204 12.8403 5.32049C12.8826 5.21894 12.9044 5.11002 12.9044 5.00001C12.9044 4.89 12.8826 4.78108 12.8403 4.67953C12.798 4.57798 12.736 4.48581 12.6579 4.40834C12.5018 4.25313 12.2905 4.16602 12.0704 4.16602C11.8502 4.16602 11.639 4.25313 11.4829 4.40834L7.65789 8.23335C7.18972 8.7021 6.92676 9.33752 6.92676 10C6.92676 10.6625 7.18972 11.2979 7.65789 11.7667L11.4829 15.5917C11.6381 15.7457 11.8476 15.8324 12.0662 15.8334C12.1759 15.834 12.2846 15.813 12.3861 15.7715C12.4877 15.73 12.58 15.6689 12.6579 15.5917C12.736 15.5142 12.798 15.4221 12.8403 15.3205C12.8826 15.219 12.9044 15.11 12.9044 15C12.9044 14.89 12.8826 14.7811 12.8403 14.6795C12.798 14.578 12.736 14.4858 12.6579 14.4084L8.83289 10.5917Z"
                  fill="#242424"
                />
              </svg>`}function I(e){return`<svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="arrow-icon ${e??""}"
              >
                <path
                  d="M11.1671 10.5917C11.2452 10.5142 11.3072 10.4221 11.3495 10.3205C11.3918 10.219 11.4136 10.11 11.4136 10C11.4136 9.89001 11.3918 9.78109 11.3495 9.67954C11.3072 9.57799 11.2452 9.48582 11.1671 9.40835L7.34211 5.59168C7.264 5.51421 7.20201 5.42204 7.1597 5.32049C7.11739 5.21894 7.09561 5.11002 7.09561 5.00001C7.09561 4.89 7.11739 4.78108 7.1597 4.67953C7.20201 4.57798 7.264 4.48581 7.34211 4.40834C7.49824 4.25313 7.70945 4.16602 7.92961 4.16602C8.14976 4.16602 8.36097 4.25313 8.51711 4.40834L12.3421 8.23335C12.8103 8.7021 13.0732 9.33752 13.0732 10C13.0732 10.6625 12.8103 11.2979 12.3421 11.7667L8.51711 15.5917C8.36189 15.7457 8.15239 15.8324 7.93377 15.8334C7.8241 15.834 7.71538 15.813 7.61385 15.7715C7.51232 15.73 7.41997 15.6689 7.34211 15.5917C7.264 15.5142 7.20201 15.4221 7.1597 15.3205C7.11739 15.219 7.09561 15.11 7.09561 15C7.09561 14.89 7.11739 14.7811 7.1597 14.6795C7.20201 14.578 7.264 14.4858 7.34211 14.4084L11.1671 10.5917Z"
                  fill="#242424"
                />
              </svg>`}function c({pageId:e,content:t,liClassNames:s}){const r=document.createElement("li"),i=document.createElement("a");return i.classList.add("pagination-link"),i.onclick=a=>{a.preventDefault()},i.href="#",i.innerHTML=t,r.classList.add(...s.filter(Boolean)),r.dataset.id=e,r.appendChild(i),r}function A(e,t){const s=document.createDocumentFragment(),r=Array(e).fill(0);if(e>9){const i=c({pageId:1,content:`${q("first")}${q("first")}`,liClassNames:["pagination-arrow","go-to-first",t===1?"disabled":""]});s.appendChild(i);const a=c({pageId:t-1<1?1:t-1,content:q(),liClassNames:["pagination-arrow","go-to-prev",t===1?"disabled":""]});s.appendChild(a);let n=t-1<1?1:t-1,p=t+1>e?e:t+1;if(p-n<2&&(n===1?p=n+2:n=p-2),n!==1){const g=c({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(g)}if(r.slice(n-1,p).map((g,k)=>{const W=c({pageId:n+k,content:n+k,liClassNames:["pagination-item",t===n+k?"active":""]});s.appendChild(W)}),p!==e){const g=c({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(g)}const $=c({pageId:t+1>e?e:t+1,content:I(),liClassNames:["pagination-arrow","go-to-next",t===e?"disabled":""]});s.appendChild($);const B=c({pageId:e,content:`${I("last")}${I("last")}`,liClassNames:["pagination-arrow","go-to-last",t===e?"disabled":""]});s.appendChild(B)}else r.map((i,a)=>{const n=c({pageId:a+1,content:a+1,liClassNames:["pagination-item",t===a+1?"active":""]});s.appendChild(n)});o.pagination.innerHTML="",o.pagination.appendChild(s)}const se=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function D(e,t=!1){return e.map(({_id:s,name:r,rating:i,bodyPart:a,burnedCalories:n,target:p,time:$})=>`<li class="exercise-card fade-item">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              ${t?`<button class="exercise-card-btn exercise-remove-btn" data-exercise-id="${s}" type="button">
             <svg class="exercise-card-icon-garbage">
               <use href="./images/icons.svg#icon-trash">
              </use>
             </svg>
          </button>`:`<p class="exercise-rating">${Number.isInteger(i)?i.toFixed(1):i}
                  <svg class="exercise-rating-icon">
                    <use href="./images/icons.svg#icon-star"></use>
                  </svg>
                </p>`}
            </div>
            <button class="exercise-card-btn exercise-start-btn" data-exercise-id="${s}" type="button">
              Start<svg class="exercise-start-icon">
                <use href="./images/icons.svg#icon-start-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-card-bottom">
            <div class="exercise-card-title">
              <svg class="exercise-card-icon">
                <use href="./images/icons.svg#icon-run"></use>
              </svg>
              <p class="exercise-card-title-text">${se(r)}</p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${n} / ${$} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${a}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${p}</div>
              </div>
            </div>
          </div>
        </li>`).join("")}function T(){const e=document.getElementsByClassName("fade-item");for(let s=0;s<e.length;++s)t(e[s],s*100);function t(s,r){setTimeout(()=>{s.classList.add("fadein")},r)}}function J(){ee().then(e=>{e.totalPages,te(e.results),A(e.totalPages,Number(e.page)),T()}).catch(e=>{m.error({message:`${e}`})})}function F(){Z().then(e=>{e.results.length||m.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),o.list.innerHTML=D(e.results),A(e.totalPages,Number(e.page)),T()}).catch(e=>{m.error({message:`${e}`})})}const U=document.querySelector(".header"),M=document.querySelector("[data-home]"),H=document.querySelector("[data-favorites]");let h=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop,t=document.querySelector(".scroll-up-button-container");e>=2&&!h?(U.classList.add("header-scrolled"),t.classList.remove("visually-hidden"),h=!0):e<2&&h&&(t.classList.add("visually-hidden"),U.classList.remove("header-scrolled"),h=!1)});(function(){window.location.href.includes("favorites.html")?(M.classList.remove("active"),H.classList.add("active")):(M.classList.add("active"),H.classList.remove("active"))})();function ie(e){o.exerciseHeader.textContent="Exercises /",o.exerciseHeaderSpan.textContent=`${e}`,o.exerciseHeaderSpan.dataset.exercise=e}function re(){o.exerciseHeader.textContent="Exercises",o.exerciseHeaderSpan.textContent="",o.exerciseHeaderSpan.dataset.exercise=""}const j={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function ae(e){let t="";return Object.keys(j).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${j[s]}</p>
          <p class="exercise-data-parameter-value">${e[s]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),t}function ne(e){const t=`
    <div class="rating-star-container">
      <svg class="rating-star rating-star--active">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,s=`
    <div class="rating-star-container">
      <svg class="rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,r=n=>`
    <div class="rating-star-container">
      <svg class="rating-star">
        <defs>
          <linearGradient id="partial-star-${n}">
            <stop offset="${n}%" stop-color="var(--yellow)" />
            <stop offset="${n}%" stop-color="var(--light-20)" />
          </linearGradient>
        </defs>
        <use href="./images/icons.svg#icon-star" style="fill: url(#partial-star-${n});"></use>
      </svg>
    </div>`;let i=e,a="";for(let n=0;n<5;n++)i>=1?a+=t:i>0?a+=r(i*100):a+=s,i--;return`
    <div class="rating rating--dark">
      <span class="rating-label">${Number.isInteger(e)?e.toFixed(1):e}</span>
      ${a}
    </div>`}function oe(e){return(JSON.parse(localStorage.getItem("favorites"))||[]).some(s=>s._id===e)}function ce(e){return oe(e)?`
    <button class="button popup-btn" id="remove-favorites">
      <span class="button-label">Remove from favorites</span>
        <svg class="button-icon icon" width="18" height="18">
          <use href="./images/icons.svg#icon-trash"></use>
        </svg>
    </button>
    `:`
    <button class="button popup-btn" id="add-favorites">
      <span class="button-label">Add to favorites</span>
        <svg class="button-icon icon" width="18" height="18">
          <use href="./images/icons.svg#icon-heart"></use>
        </svg>
    </button>
    `}function le(e){const t=ae(e),s=ne(e.rating),r=ce(e._id);return`
    <img class="exercise-instruction-image" src="${e.gifUrl}" alt="${e.name} instruction">
    <div class="exercise-panel-content">
    <p class="exercise-name">${e.name}</p>
    <div class="exercise-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${s}
      </div>
    </div>
    </div>
    <ul class="exercise-data">${t}</ul>
    <p class="exercise-description">${e.description}</p>

    <div class="button-container">
      ${r}
      <button class="button button--secondary popup-btn js-add-rating">
        <span class="button-label">Give a rating</span>
      </button>
    </div>

    </div>
  `}function _(e){let t=v();const s=t.find(i=>i._id===e);if(!s)return!1;const r=t.filter(i=>i._id!==e);return localStorage.setItem("favorites",JSON.stringify(r)),m.success({message:`Exercise ${s.name} removed from favorites!`}),!0}function v(){const e=localStorage.getItem("favorites");return JSON.parse(e)||[]}let y=[];const R=document.querySelector(".favorites-text"),b=document.querySelector(".practice-list"),C=document.querySelector(".js-pagination");function de(e,t){const s=t<768?8:10;let r=[];for(let i=0;i<e.length;i+=s)r.push(e.slice(i,i+s));return r}function ue(e){const t=e.target.closest(".exercise-remove-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&_(s)&&S(v())}function P(e){b.innerHTML=D(e,!0),T()}function G(e,t){C.innerHTML="",C.classList.remove("visually-hidden"),e.forEach((s,r)=>{const i=c({pageId:r,content:r+1,liClassNames:["pagination-item",t===r?"active":""]});i.addEventListener("click",()=>{P(s),G(e,r),b.scrollIntoView({behavior:"smooth"})}),C.appendChild(i)})}function S(e=y){if(e.length)R.classList.add("visually-hidden");else{R.classList.remove("visually-hidden");return}const t=window.innerWidth;C.classList.add("visually-hidden");let s=t<768?8:10;if(t>=1440&&(s=10),e.length<=s)P(e);else{const r=de(e,t);P(r[0]),G(r,0)}}document.addEventListener("DOMContentLoaded",()=>{if(window.location.pathname.includes("favorites.html")){y=v(),S(y);const e=Y(()=>S(y),50);window.addEventListener("resize",e),b.addEventListener("click",fe),b.addEventListener("click",ue)}});let d=null,u=null;function N(e){pe(e).then(t=>{d=document.querySelector("#add-favorites"),u=document.querySelector("#remove-favorites"),d&&(d.dataset.exercise=JSON.stringify(t),d.addEventListener("click",V,{passive:!0})),u&&(u.dataset.exercise=JSON.stringify(t),u.addEventListener("click",K,{passive:!0})),o.exercisePopUpCloseBtn.addEventListener("click",E,{passive:!0}),o.exercisePopUpBackdrop.addEventListener("click",z,{passive:!0}),o.exercisePopUpBackdrop.classList.add("is-open"),o.body.classList.add("overflow-hidden"),document.addEventListener("keydown",Q)}).catch(t=>{m.error({message:`${t}`})})}function E(){o.exercisePopUpBackdrop.classList.remove("is-open"),o.body.classList.remove("overflow-hidden"),d&&d.removeEventListener("click",V),u&&u.removeEventListener("click",K),o.exercisePopUpBackdrop.removeEventListener("click",z),o.exercisePopUpCloseBtn.removeEventListener("click",E),document.removeEventListener("keydown",Q),d=null,u=null}function pe(e){return new Promise((t,s)=>{X(e).then(r=>{o.exercisePopUpContent.innerHTML=le(r),t(r)}).catch(r=>{s(r)})})}function z(e){e.target===o.exercisePopUpBackdrop&&E()}function me(e){let t=v();t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),m.success({message:"Exercise added to favorites!"})}function V(e){const t=JSON.parse(d.dataset.exercise);me(t),e.stopPropagation(),N(t._id)}function K(e){const t=JSON.parse(u.dataset.exercise);_(t._id)&&window.location.pathname.includes("favorites.html")&&S(v()),N(t._id),e.stopPropagation()}function Q(e){e.code==="Escape"&&E()}function ye(e){const t=e.target,s=t.closest("li.pagination-item:not(.active):not(.three-dots)")??t.closest("li.pagination-arrow:not(.disabled)");if(!s)return;const r=Number(s.dataset.id);w.set("page",r),l.set("page",r),o.exerciseHeaderSpan.dataset.exercise?F():J(),o.mainSection.scrollIntoView()}function Ce(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(n=>n.classList.remove("active")),s.classList.add("active"),o.searchForm.reset(),o.searchForm.classList.add("visually-hidden");const i=s.dataset.filter,a=Object.keys(x).find(n=>x[n]===i);a&&(w.set("filter",x[a]),w.set("page",1),l.delete("muscles"),l.delete("bodypart"),l.delete("equipment"),l.set("page",1),o.list.classList.replace("exercise-list","filtered-list"),J()),re()}function we(e){const s=e.target.closest("li.category-card");if(!s)return;let r=s.dataset.filter.toString().toLowerCase();r==="body parts"&&(r="bodypart");const i=s.dataset.name;ie(i),l.set(r,i),l.set("page",1),o.list.classList.replace("filtered-list","exercise-list"),o.searchForm.classList.remove("visually-hidden"),o.list.innerHTML="",F(),o.mainSection.scrollIntoView()}function be(e){e.preventDefault();const t=o.searchInput.value.trim();l.set("keyword",t),F()}function fe(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&N(s)}export{l as a,J as b,ye as c,we as d,fe as e,he as f,ge as g,F as h,be as i,Ce as o,w as q,o as r,xe as s};
//# sourceMappingURL=eventHandlers-a59774f4.js.map
