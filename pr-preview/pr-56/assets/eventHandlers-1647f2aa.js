import{i as m}from"./vendor-7b59b48c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const f="https://your-energy.b.goit.study/api/",a={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeaderSpan:document.querySelector(".js-exercise-header-span"),exerciseHeader:document.querySelector(".js-exercise-header"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),searchInputCrossIcon:document.querySelector(".search-input-icon.cross-icon"),searchInputSearchIcon:document.querySelector(".search-input-icon.search-icon"),exercisePopUpBackdrop:document.querySelector(".exercise-pop-up-backdrop"),exercisePopUpContent:document.querySelector(".exercise-pop-up-content"),exercisePopUpCloseBtn:document.querySelector(".exercise-pop-up-close-btn"),exercisesContainer:document.querySelector(".exercises-container"),body:document.querySelector("body"),scrollUpButton:document.querySelector(".scroll-up-button"),mainSection:document.querySelector(".main-section")},h={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},x=new URLSearchParams({filter:h.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),c=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),y={method:"GET",headers:{"Content-Type":"application/json"}};async function H(){const e=await fetch(`${f}exercises?${c}`,y);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function A(e){const t=await fetch(`${f}exercises/${e}`,y);if(!t.ok)throw new Error(`Ooops, status code: ${t.status}`);return await t.json()}async function R(){const e=await fetch(`${f}filters?${x}`,y);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function ae(){const e=await fetch(`${f}quote`,y);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function oe(e){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})},s=await fetch(`${f}subscription`,t),r=await s.json();if(!s.ok)throw new Error(r.message||"Failed to subscribe");return r}function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _(e){const t=e.map(({filter:s,name:r,imgURL:i})=>`<li class="category-card fade-item" data-filter="${s}" data-name="${r}">
            <img
              src="${i}"
              alt="${r}"
              class="category-card-img"
              width="80"
              height="80"
            />
            <div class="category-card-content">
            <p class="category-card-title">${I(r)}</p> 
            <h3 class="category-card-text">${I(s)}</h3>
            </div>
        </li>`).join("");a.list.innerHTML=t}function S(e){return`<svg
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
              </svg>`}function l({pageId:e,content:t,liClassNames:s}){const r=document.createElement("li"),i=document.createElement("a");return i.classList.add("pagination-link"),i.onclick=o=>{o.preventDefault()},i.href="#",i.innerHTML=t,r.classList.add(...s.filter(Boolean)),r.dataset.id=e,r.appendChild(i),r}function T(e,t){const s=document.createDocumentFragment(),r=Array(e).fill(0);if(e>9){const i=l({pageId:1,content:`${S("first")}${S("first")}`,liClassNames:["pagination-arrow","go-to-first",t===1?"disabled":""]});s.appendChild(i);const o=l({pageId:t-1<1?1:t-1,content:S(),liClassNames:["pagination-arrow","go-to-prev",t===1?"disabled":""]});s.appendChild(o);let n=t-1<1?1:t-1,d=t+1>e?e:t+1;if(d-n<2&&(n===1?d=n+2:n=d-2),n!==1){const v=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(v)}if(r.slice(n-1,d).map((v,b)=>{const j=l({pageId:n+b,content:n+b,liClassNames:["pagination-item",t===n+b?"active":""]});s.appendChild(j)}),d!==e){const v=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(v)}const w=l({pageId:t+1>e?e:t+1,content:L(),liClassNames:["pagination-arrow","go-to-next",t===e?"disabled":""]});s.appendChild(w);const k=l({pageId:e,content:`${L("last")}${L("last")}`,liClassNames:["pagination-arrow","go-to-last",t===e?"disabled":""]});s.appendChild(k)}else r.map((i,o)=>{const n=l({pageId:o+1,content:o+1,liClassNames:["pagination-item",t===o+1?"active":""]});s.appendChild(n)});a.pagination.innerHTML="",a.pagination.appendChild(s)}const J=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function D(e,t=!1){return e.map(({_id:s,name:r,rating:i,bodyPart:o,burnedCalories:n,target:d,time:w})=>`<li class="exercise-card fade-item">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              ${t?`<button class="exercise-card-btn exercise-remove-btn" data-exercise-id="${s}" type="button">
             <svg class="exercise-card-icon">
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
                <div class="exercise-card-info-element-content-target-no-overflow">${n} / ${w} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${o}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${d}</div>
              </div>
            </div>
          </div>
        </li>`).join("")}function O(){const e=document.getElementsByClassName("fade-item");for(let s=0;s<e.length;++s)t(e[s],s*300);function t(s,r){setTimeout(()=>{s.classList.add("fadein")},r)}}function B(){R().then(e=>{e.totalPages,_(e.results),T(e.totalPages,Number(e.page)),O()}).catch(e=>{m.error({message:`${e}`})})}function E(){H().then(e=>{e.results.length||m.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),a.list.innerHTML=D(e.results),T(e.totalPages,Number(e.page)),O()}).catch(e=>{m.error({message:`${e}`})})}const q=document.querySelector(".header"),F=document.querySelector("[data-home]"),N=document.querySelector("[data-favorites]");let g=!1;window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop,t=document.querySelector(".scroll-up-button-container");e>=2&&!g?(q.classList.add("header-scrolled"),t.classList.remove("visually-hidden"),g=!0):e<2&&g&&(t.classList.add("visually-hidden"),q.classList.remove("header-scrolled"),g=!1)});(function(){window.location.href.includes("favorites.html")?(F.classList.remove("active"),N.classList.add("active")):(F.classList.add("active"),N.classList.remove("active"))})();function G(e){a.exerciseHeader.textContent="Exercises /",a.exerciseHeaderSpan.textContent=`${e}`,a.exerciseHeaderSpan.dataset.exercise=e}function z(){a.exerciseHeader.textContent="Exercises",a.exerciseHeaderSpan.textContent="",a.exerciseHeaderSpan.dataset.exercise=""}const P={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function K(e){let t="";return Object.keys(P).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${P[s]}</p>
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
    </div>`;let i=e,o="";for(let n=0;n<5;n++)i>=1?o+=t:i>0?o+=r(i*100):o+=s,i--;return`
    <div class="rating rating--dark">
      <span class="rating-label">${Number.isInteger(e)?e.toFixed(1):e}</span>
      ${o}
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
      <button class="button button--secondary popup-btn">
        <span class="button-label">Give a rating</span>
      </button>
    </div>

    </div>
  `}function W(e){let t=X();const s=t.find(i=>i._id===e);if(!s)return;const r=t.filter(i=>i._id!==e);localStorage.setItem("favorites",JSON.stringify(r)),m.success({message:`Exercise ${s.name} removed from favorites!`})}function X(){const e=localStorage.getItem("favorites");return JSON.parse(e)||[]}let u=null,p=null;function $(e){ee(e).then(t=>{u=null,p=null,u=document.querySelector("#add-favorites"),p=document.querySelector("#remove-favorites"),u&&(u.dataset.exercise=JSON.stringify(t),u.addEventListener("click",se,{passive:!0})),p&&(p.dataset.exercise=JSON.stringify(t),p.addEventListener("click",ie,{passive:!0})),a.exercisePopUpCloseBtn.addEventListener("click",C,{passive:!0}),a.exercisePopUpBackdrop.addEventListener("click",U,{passive:!0}),a.exercisePopUpBackdrop.classList.add("is-open"),a.body.classList.add("overflow-hidden"),document.addEventListener("keydown",M)}).catch(t=>{m.error({message:`${t}`})})}function C(){a.exercisePopUpBackdrop.classList.remove("is-open"),a.body.classList.remove("overflow-hidden"),u=null,p=null,a.exercisePopUpBackdrop.removeEventListener("click",U),a.exercisePopUpCloseBtn.removeEventListener("click",C),document.removeEventListener("keydown",M)}function ee(e){return new Promise((t,s)=>{A(e).then(r=>{a.exercisePopUpContent.innerHTML=Z(r),t(r)}).catch(r=>{s(r)})})}function U(e){e.target===a.exercisePopUpBackdrop&&C()}function te(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.some(r=>r._id===e._id)?m.warning({message:"Exercise is already in favorites!"}):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),m.success({message:"Exercise added to favorites!"}))}function se(e){const t=JSON.parse(u.dataset.exercise);te(t),e.stopPropagation(),$(t._id)}function ie(e){const t=JSON.parse(p.dataset.exercise);W(t._id),e.stopPropagation(),$(t._id)}function M(e){e.code==="Escape"&&C()}function ne(e){const t=e.target,s=t.closest("li.pagination-item:not(.active):not(.three-dots)")??t.closest("li.pagination-arrow:not(.disabled)");if(!s)return;const r=Number(s.dataset.id);x.set("page",r),c.set("page",r),a.exerciseHeaderSpan.dataset.exercise?E():B(),a.mainSection.scrollIntoView()}function ce(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(n=>n.classList.remove("active")),s.classList.add("active"),a.searchForm.reset(),a.searchForm.classList.add("visually-hidden");const i=s.dataset.filter,o=Object.keys(h).find(n=>h[n]===i);o&&(x.set("filter",h[o]),x.set("page",1),c.delete("muscles"),c.delete("bodypart"),c.delete("equipment"),c.set("page",1),a.list.classList.replace("exercise-list","filtered-list"),B()),z()}function le(e){const s=e.target.closest("li.category-card");if(!s)return;let r=s.dataset.filter.toString().toLowerCase();r==="body parts"&&(r="bodypart");const i=s.dataset.name;G(i),c.set(r,i),c.set("page",1),a.list.classList.replace("filtered-list","exercise-list"),a.searchForm.classList.remove("visually-hidden"),a.list.innerHTML="",E(),a.mainSection.scrollIntoView()}function de(e){e.preventDefault();const t=a.searchInput.value.trim();c.set("keyword",t),E()}function ue(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&$(s)}export{c as a,B as b,ne as c,le as d,ue as e,W as f,X as g,D as h,O as i,ae as j,E as k,de as l,ce as o,x as q,a as r,oe as s};
//# sourceMappingURL=eventHandlers-1647f2aa.js.map
