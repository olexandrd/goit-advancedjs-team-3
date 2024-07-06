import{i as m}from"./vendor-7b59b48c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const f="https://your-energy.b.goit.study/api/",n={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeaderSpan:document.querySelector(".js-exercise-header-span"),exerciseHeader:document.querySelector(".js-exercise-header"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchInputCrossIcon:document.querySelector(".search-input-icon.cross-icon"),searchInputSearchIcon:document.querySelector(".search-input-icon.search-icon"),exercisePopUpBackdrop:document.querySelector(".exercise-pop-up-backdrop"),exercisePopUpContent:document.querySelector(".exercise-pop-up-content"),exercisePopUpCloseBtn:document.querySelector(".exercise-pop-up-close-btn"),exercisesContainer:document.querySelector(".exercises-container"),body:document.querySelector("body"),scrollUpButton:document.querySelector(".scroll-up-button"),mainSection:document.querySelector(".main-section"),ratingPopUpBackdrop:document.querySelector(".js-rating-pop-up-backdrop"),ratingPopUpContent:document.querySelector(".rating-pop-up-content"),ratingPopUpCloseBtn:document.querySelector(".js-close-rating-pop-up"),ratingForm:document.querySelector(".form-rating")},h={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},x=new URLSearchParams({filter:h.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),c=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),y={method:"GET",headers:{"Content-Type":"application/json"}};async function H(){const e=await fetch(`${f}exercises?${c}`,y);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function ae(e,{rate:t,email:s,review:r}){const i={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({rate:t,email:s,review:r})},a=await fetch(`${f}exercises/${e}/rating`,i),o=await a.json();if(!a.ok)throw new Error(o.message||"Failed to set a rating");return o}async function A(e){const t=await fetch(`${f}exercises/${e}`,y);if(!t.ok)throw new Error(`Ooops, status code: ${t.status}`);return await t.json()}async function R(){const e=await fetch(`${f}filters?${x}`,y);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function oe(){const e=await fetch(`${f}quote`,y);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function ne(e){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})},s=await fetch(`${f}subscription`,t),r=await s.json();if(!s.ok)throw new Error(r.message||"Failed to subscribe");return r}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _(e){const t=e.map(({filter:s,name:r,imgURL:i})=>`<li class="category-card fade-item" data-filter="${s}" data-name="${r}">
            <img
              src="${i}"
              alt="${r}"
              class="category-card-img"
              width="80"
              height="80"
            />
            <div class="category-card-content">
            <p class="category-card-title">${q(r)}</p> 
            <h3 class="category-card-text">${q(s)}</h3>
            </div>
        </li>`).join("");n.list.innerHTML=t}function S(e){return`<svg
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
              </svg>`}function L(e){return`<svg
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
              </svg>`}function l({pageId:e,content:t,liClassNames:s}){const r=document.createElement("li"),i=document.createElement("a");return i.classList.add("pagination-link"),i.onclick=a=>{a.preventDefault()},i.href="#",i.innerHTML=t,r.classList.add(...s.filter(Boolean)),r.dataset.id=e,r.appendChild(i),r}function T(e,t){const s=document.createDocumentFragment(),r=Array(e).fill(0);if(e>9){const i=l({pageId:1,content:`${S("first")}${S("first")}`,liClassNames:["pagination-arrow","go-to-first",t===1?"disabled":""]});s.appendChild(i);const a=l({pageId:t-1<1?1:t-1,content:S(),liClassNames:["pagination-arrow","go-to-prev",t===1?"disabled":""]});s.appendChild(a);let o=t-1<1?1:t-1,d=t+1>e?e:t+1;if(d-o<2&&(o===1?d=o+2:o=d-2),o!==1){const v=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(v)}if(r.slice(o-1,d).map((v,b)=>{const j=l({pageId:o+b,content:o+b,liClassNames:["pagination-item",t===o+b?"active":""]});s.appendChild(j)}),d!==e){const v=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(v)}const w=l({pageId:t+1>e?e:t+1,content:L(),liClassNames:["pagination-arrow","go-to-next",t===e?"disabled":""]});s.appendChild(w);const k=l({pageId:e,content:`${L("last")}${L("last")}`,liClassNames:["pagination-arrow","go-to-last",t===e?"disabled":""]});s.appendChild(k)}else r.map((i,a)=>{const o=l({pageId:a+1,content:a+1,liClassNames:["pagination-item",t===a+1?"active":""]});s.appendChild(o)});n.pagination.innerHTML="",n.pagination.appendChild(s)}const J=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function D(e,t=!1){return e.map(({_id:s,name:r,rating:i,bodyPart:a,burnedCalories:o,target:d,time:w})=>`<li class="exercise-card fade-item">
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
              <p class="exercise-card-title-text">${J(r)}</p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${o} / ${w} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${a}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${d}</div>
              </div>
            </div>
          </div>
        </li>`).join("")}function B(){const e=document.getElementsByClassName("fade-item");for(let s=0;s<e.length;++s)t(e[s],s*100);function t(s,r){setTimeout(()=>{s.classList.add("fadein")},r)}}function O(){R().then(e=>{e.totalPages,_(e.results),T(e.totalPages,Number(e.page)),B()}).catch(e=>{m.error({message:`${e}`})})}function E(){H().then(e=>{e.results.length||m.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),n.list.innerHTML=D(e.results),T(e.totalPages,Number(e.page)),B()}).catch(e=>{m.error({message:`${e}`})})}const I=document.querySelector(".header"),F=document.querySelector("[data-home]"),P=document.querySelector("[data-favorites]");let g=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop,t=document.querySelector(".scroll-up-button-container");e>=2&&!g?(I.classList.add("header-scrolled"),t.classList.remove("visually-hidden"),g=!0):e<2&&g&&(t.classList.add("visually-hidden"),I.classList.remove("header-scrolled"),g=!1)});(function(){window.location.href.includes("favorites.html")?(F.classList.remove("active"),P.classList.add("active")):(F.classList.add("active"),P.classList.remove("active"))})();function G(e){n.exerciseHeader.textContent="Exercises /",n.exerciseHeaderSpan.textContent=`${e}`,n.exerciseHeaderSpan.dataset.exercise=e}function z(){n.exerciseHeader.textContent="Exercises",n.exerciseHeaderSpan.textContent="",n.exerciseHeaderSpan.dataset.exercise=""}const N={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function K(e){let t="";return Object.keys(N).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${N[s]}</p>
          <p class="exercise-data-parameter-value">${e[s]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),t}function Q(e){const t=`
    <div class="rating-star-container">
      <svg class="rating-star rating-star--active">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,s=`
    <div class="rating-star-container">
      <svg class="rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,r=o=>`
    <div class="rating-star-container">
      <svg class="rating-star">
        <defs>
          <linearGradient id="partial-star-${o}">
            <stop offset="${o}%" stop-color="var(--yellow)" />
            <stop offset="${o}%" stop-color="var(--light-20)" />
          </linearGradient>
        </defs>
        <use href="./images/icons.svg#icon-star" style="fill: url(#partial-star-${o});"></use>
      </svg>
    </div>`;let i=e,a="";for(let o=0;o<5;o++)i>=1?a+=t:i>0?a+=r(i*100):a+=s,i--;return`
    <div class="rating rating--dark">
      <span class="rating-label">${Number.isInteger(e)?e.toFixed(1):e}</span>
      ${a}
    </div>`}function V(e){return(JSON.parse(localStorage.getItem("favorites"))||[]).some(s=>s._id===e)}function Y(e){return V(e)?`
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
    `}function Z(e){const t=K(e),s=Q(e.rating),r=Y(e._id);return`
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
  `}function W(e){let t=X();const s=t.find(i=>i._id===e);if(!s)return;const r=t.filter(i=>i._id!==e);localStorage.setItem("favorites",JSON.stringify(r)),m.success({message:`Exercise ${s.name} removed from favorites!`})}function X(){const e=localStorage.getItem("favorites");return JSON.parse(e)||[]}let p=null,u=null;function $(e){ee(e).then(t=>{p=null,u=null,p=document.querySelector("#add-favorites"),u=document.querySelector("#remove-favorites"),p&&(p.dataset.exercise=JSON.stringify(t),p.addEventListener("click",se,{passive:!0})),u&&(u.dataset.exercise=JSON.stringify(t),u.addEventListener("click",ie,{passive:!0})),n.exercisePopUpCloseBtn.addEventListener("click",C,{passive:!0}),n.exercisePopUpBackdrop.addEventListener("click",U,{passive:!0}),n.exercisePopUpBackdrop.classList.add("is-open"),n.body.classList.add("overflow-hidden"),document.addEventListener("keydown",M)}).catch(t=>{m.error({message:`${t}`})})}function C(){n.exercisePopUpBackdrop.classList.remove("is-open"),n.body.classList.remove("overflow-hidden"),p=null,u=null,n.exercisePopUpBackdrop.removeEventListener("click",U),n.exercisePopUpCloseBtn.removeEventListener("click",C),document.removeEventListener("keydown",M)}function ee(e){return new Promise((t,s)=>{A(e).then(r=>{n.exercisePopUpContent.innerHTML=Z(r),t(r)}).catch(r=>{s(r)})})}function U(e){e.target===n.exercisePopUpBackdrop&&C()}function te(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.some(r=>r._id===e._id)?m.warning({message:"Exercise is already in favorites!"}):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),m.success({message:"Exercise added to favorites!"}))}function se(e){const t=JSON.parse(p.dataset.exercise);te(t),e.stopPropagation(),$(t._id)}function ie(e){const t=JSON.parse(u.dataset.exercise);W(t._id),e.stopPropagation(),$(t._id)}function M(e){e.code==="Escape"&&C()}function ce(e){const t=e.target,s=t.closest("li.pagination-item:not(.active):not(.three-dots)")??t.closest("li.pagination-arrow:not(.disabled)");if(!s)return;const r=Number(s.dataset.id);x.set("page",r),c.set("page",r),n.exerciseHeaderSpan.dataset.exercise?E():O(),n.mainSection.scrollIntoView()}function le(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(o=>o.classList.remove("active")),s.classList.add("active"),n.searchForm.reset(),n.searchForm.classList.add("visually-hidden");const i=s.dataset.filter,a=Object.keys(h).find(o=>h[o]===i);a&&(x.set("filter",h[a]),x.set("page",1),c.delete("muscles"),c.delete("bodypart"),c.delete("equipment"),c.set("page",1),n.list.classList.replace("exercise-list","filtered-list"),O()),z()}function de(e){const s=e.target.closest("li.category-card");if(!s)return;let r=s.dataset.filter.toString().toLowerCase();r==="body parts"&&(r="bodypart");const i=s.dataset.name;G(i),c.set(r,i),c.set("page",1),n.list.classList.replace("filtered-list","exercise-list"),n.searchForm.classList.remove("visually-hidden"),n.list.innerHTML="",E(),n.mainSection.scrollIntoView()}function pe(e){e.preventDefault();const t=n.searchInput.value.trim();c.set("keyword",t),E()}function ue(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&$(s)}export{c as a,O as b,ce as c,de as d,ue as e,W as f,X as g,D as h,B as i,l as j,oe as k,ae as l,E as m,pe as n,le as o,x as q,n as r,ne as s};
//# sourceMappingURL=eventHandlers-0ee5c7b9.js.map
