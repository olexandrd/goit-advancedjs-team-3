import{r as a,b as T,c as F,d as M,q as w,a as o,F as h,e as B,f as N}from"./header-e16e8df6.js";import{i as g}from"./vendor-790bbfe5.js";function U(e){const t=e.map(({filter:s,name:i,imgURL:r})=>`<li class="filtered-item" data-filter="${s}" data-name="${i}">
            <img
              src="${r}"
              alt="${i}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${s}</h3>
            <p class="filtered-text">${i}</p>
        </li>`).join("");a.list.innerHTML=t}function x(e){return`<svg
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
              </svg>`}function C(e){return`<svg
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
              </svg>`}function l({pageId:e,content:t,liClassNames:s}){const i=document.createElement("li"),r=document.createElement("a");return r.classList.add("pagination-link"),r.onclick=n=>{n.preventDefault()},r.href="#",r.innerHTML=t,i.classList.add(...s.filter(Boolean)),i.dataset.id=e,i.appendChild(r),i}function L(e,t){const s=document.createDocumentFragment(),i=Array(e).fill(0);if(e>9){const r=l({pageId:1,content:`${x("first")}${x("first")}`,liClassNames:["pagination-arrow","go-to-first",t===1?"disabled":""]});s.appendChild(r);const n=l({pageId:t-1<1?1:t-1,content:x(),liClassNames:["pagination-arrow","go-to-prev",t===1?"disabled":""]});s.appendChild(n);let c=t-1<1?1:t-1,d=t+1>e?e:t+1;if(d-c<2&&(c===1?d=c+2:c=d-2),c!==1){const m=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(m)}if(i.slice(c-1,d).map((m,v)=>{const S=l({pageId:c+v,content:c+v,liClassNames:["pagination-item",t===c+v?"active":""]});s.appendChild(S)}),d!==e){const m=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(m)}const u=l({pageId:t+1>e?e:t+1,content:C(),liClassNames:["pagination-arrow","go-to-next",t===e?"disabled":""]});s.appendChild(u);const I=l({pageId:e,content:`${C("last")}${C("last")}`,liClassNames:["pagination-arrow","go-to-last",t===e?"disabled":""]});s.appendChild(I)}else i.map((r,n)=>{const c=l({pageId:n+1,content:n+1,liClassNames:["pagination-item",t===n+1?"active":""]});s.appendChild(c)});a.pagination.innerHTML="",a.pagination.appendChild(s)}const q=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function H(e){const t=e.map(({_id:s,name:i,rating:r,bodyPart:n,burnedCalories:c,target:d,time:u})=>`<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${r}<svg class="exercise-rating-icon">
                  <use href="./images/icons.svg#icon-star"></use>
                </svg>
              </p> 
            </div>
            <button class="exercise-start-btn" data-exercise-id="${s}" type="button">
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
              <p class="exercise-card-title-text">${q(i)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${c} / ${u} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${n}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${d}</div>
              </div>
            </div>
          </div>
        </li>`).join("");a.list.innerHTML=t}function y(){T().then(e=>{e.totalPages,U(e.results),L(e.totalPages,Number(e.page))}).catch(e=>{g.error({message:`${e}`})})}function f(){F().then(e=>{e.results.length||g.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),H(e.results),L(e.totalPages,Number(e.page))}).catch(e=>{g.error({message:`${e}`})})}const $={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function D(e){let t="";return Object.keys($).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${$[s]}</p>
          <p class="exercise-data-parameter-value">${e[s]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),t}const p=18;function A(e){const t=`<svg class="exercise-rating-star" width="${p}" height="${p}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--yellow);"></use></svg>`,s=`<svg class="exercise-rating-star" width="${p}" height="${p}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--light-20);"></use></svg>`,i=n=>`
        <svg class="exercise-rating-star" width="${p}" height="${p}" viewBox="0 0 32 32">
            <defs>
                <linearGradient id="partial-star-${n}">
                    <stop offset="${n}%" stop-color="var(--yellow)" />
                    <stop offset="${n}%" stop-color="var(--light-20)" />
                </linearGradient>
            </defs>
            <use href="../images/icons.svg#icon-star" style="fill: url(#partial-star-${n});"></use>
        </svg>
    `;let r="";for(let n=0;n<5;n++)e>=1?r+=t:e>0?r+=i(e*100):r+=s,e--;return r}function O(e){const t=D(e),s=A(e.rating);return`
    <img class="exercise-instruction-image" src="${e.gifUrl}" alt="${e.name} instruction">
    <p class="exercise-name">${e.name}</p>
    <div class="exercise-rating-wrapper">
      <p class="exercise-rating">${e.rating}</p>
      <div class="exercise-rating-stars-wrapper">${s}</div>
    </div>
    <ul class="exercise-data">${t}</ul>
    <p class="exercise-description">${e.description}</p>
  `}function P(e){j(e).then(()=>{a.exercisePopUpBackdrop.classList.add("is-open"),a.body.classList.add("overflow-hidden"),G()}).catch(t=>{g.error({message:`${t}`})})}function k(){a.exercisePopUpBackdrop.classList.remove("is-open"),a.body.classList.remove("overflow-hidden"),z()}function j(e){return new Promise((t,s)=>{M(e).then(i=>{a.exercisePopUpContent.innerHTML=O(i),t()}).catch(i=>{s(i)})})}function G(){document.addEventListener("click",b)}function z(){document.removeEventListener("click",b)}function b(e){const t=a.exercisePopUpContent;t&&!t.contains(e.target)&&k()}a.exercisePopUpCloseBtn.addEventListener("click",k);function _(e){debugger;const t=e.target,s=t.closest("li.pagination-item:not(.active):not(.three-dots)")??t.closest("li.pagination-arrow:not(.disabled)");if(!s)return;const i=Number(s.dataset.id);w.set("page",i),o.set("page",i),a.exerciseHeaderSpan.dataset.exercise?f():y()}function K(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(c=>c.classList.remove("active")),s.classList.add("active"),a.searchForm.reset(),a.searchForm.classList.add("visually-hidden");const r=s.dataset.filter,n=Object.keys(h).find(c=>h[c]===r);n&&(w.set("filter",h[n]),w.set("page",1),o.delete("muscles"),o.delete("bodypart"),o.delete("equipment"),o.set("page",1),a.list.classList.replace("exercise-list","filtered-list"),y()),B()}function W(e){const s=e.target.closest("li.filtered-item");if(!s)return;let i=s.dataset.filter.toString().toLowerCase();i==="body parts"&&(i="bodypart");const r=s.dataset.name;N(r),o.set(i,r),o.set("page",1),a.list.classList.replace("filtered-list","exercise-list"),a.searchForm.classList.remove("visually-hidden"),a.list.innerHTML="",f()}function E(e){e.preventDefault();const t=a.searchInput.value.trim();o.set("keyword",t),f()}function J(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&(console.log("Exercise ID:",s),P(s))}a.searchInputCrossIcon.addEventListener("click",()=>{o.set("page",1),o.delete("keyword"),a.searchForm.reset(),f()});a.searchInputSearchIcon.addEventListener("click",E);a.searchForm.addEventListener("submit",E);export{_ as a,W as b,J as c,K as o,y as r};
//# sourceMappingURL=search-input-2e214ae2.js.map
