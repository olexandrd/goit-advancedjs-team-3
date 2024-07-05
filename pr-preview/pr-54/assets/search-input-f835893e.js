import{r as a,d as U,e as P,f as q,q as y,a as c,F as C,g as A,h as O}from"./header-cb6ed807.js";import{i as u}from"./vendor-7b59b48c.js";function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}function H(e){const t=e.map(({filter:s,name:i,imgURL:r})=>`<li class="category-card fade-item" data-filter="${s}" data-name="${i}">
            <img
              src="${r}"
              alt="${i}"
              class="category-card-img"
              width="80"
              height="80"
            />
            <div class="category-card-content">
              <h3 class="category-card-title">${L(s)}</h3>
              <p class="category-card-text">${L(i)}</p> 
            </div>
        </li>`).join("");a.list.innerHTML=t}function b(e){return`<svg
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
              </svg>`}function w(e){return`<svg
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
              </svg>`}function l({pageId:e,content:t,liClassNames:s}){const i=document.createElement("li"),r=document.createElement("a");return r.classList.add("pagination-link"),r.onclick=o=>{o.preventDefault()},r.href="#",r.innerHTML=t,i.classList.add(...s.filter(Boolean)),i.dataset.id=e,i.appendChild(r),i}function $(e,t){const s=document.createDocumentFragment(),i=Array(e).fill(0);if(e>9){const r=l({pageId:1,content:`${b("first")}${b("first")}`,liClassNames:["pagination-arrow","go-to-first",t===1?"disabled":""]});s.appendChild(r);const o=l({pageId:t-1<1?1:t-1,content:b(),liClassNames:["pagination-arrow","go-to-prev",t===1?"disabled":""]});s.appendChild(o);let n=t-1<1?1:t-1,d=t+1>e?e:t+1;if(d-n<2&&(n===1?d=n+2:n=d-2),n!==1){const m=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(m)}if(i.slice(n-1,d).map((m,x)=>{const M=l({pageId:n+x,content:n+x,liClassNames:["pagination-item",t===n+x?"active":""]});s.appendChild(M)}),d!==e){const m=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});s.appendChild(m)}const h=l({pageId:t+1>e?e:t+1,content:w(),liClassNames:["pagination-arrow","go-to-next",t===e?"disabled":""]});s.appendChild(h);const T=l({pageId:e,content:`${w("last")}${w("last")}`,liClassNames:["pagination-arrow","go-to-last",t===e?"disabled":""]});s.appendChild(T)}else i.map((r,o)=>{const n=l({pageId:o+1,content:o+1,liClassNames:["pagination-item",t===o+1?"active":""]});s.appendChild(n)});a.pagination.innerHTML="",a.pagination.appendChild(s)}const D=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function _(e){const t=e.map(({_id:s,name:i,rating:r,bodyPart:o,burnedCalories:n,target:d,time:h})=>`<li class="exercise-card fade-item">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${Number.isInteger(r)?r.toFixed(1):r}<svg class="exercise-rating-icon">
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
              <p class="exercise-card-title-text">${D(i)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${n} / ${h} min</div>
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
        </li>`).join("");a.list.innerHTML=t}function E(){const e=document.getElementsByClassName("fade-item");for(let s=0;s<e.length;++s)t(e[s],s*300);function t(s,i){setTimeout(()=>{s.classList.add("fadein")},i)}}function I(){U().then(e=>{e.totalPages,H(e.results),$(e.totalPages,Number(e.page)),E()}).catch(e=>{u.error({message:`${e}`})})}function g(){P().then(e=>{e.results.length||u.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),_(e.results),$(e.totalPages,Number(e.page)),E()}).catch(e=>{u.error({message:`${e}`})})}const k={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function G(e){let t="";return Object.keys(k).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${k[s]}</p>
          <p class="exercise-data-parameter-value">${e[s]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),t}function J(e){const t=`
    <div class="rating-star-container">
      <svg class="rating-star rating-star--active">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,s=`
    <div class="rating-star-container">
      <svg class="rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,i=n=>`
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
    </div>`;let r=e,o="";for(let n=0;n<5;n++)r>=1?o+=t:r>0?o+=i(r*100):o+=s,r--;return`
    <div class="rating rating--dark">
      <span class="rating-label">${Number.isInteger(e)?e.toFixed(1):e}</span>
      ${o}
    </div>`}function R(e){return(JSON.parse(localStorage.getItem("favorites"))||[]).some(s=>s._id===e)}function j(e){return R(e)?`
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
    `}function z(e){const t=G(e),s=J(e.rating),i=j(e._id);return`
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
      ${i}
      <button class="button button--secondary popup-btn">
        <span class="button-label">Give a rating</span>
      </button>
    </div>

    </div>
  `}let p=null,v=null;function S(e){V(e).then(t=>{p=null,v=null,p=document.querySelector("#add-favorites"),v=document.querySelector("#remove-favorites"),p&&(p.dataset.exercise=JSON.stringify(t),p.addEventListener("click",K,{passive:!0})),v&&(v.dataset.exercise=JSON.stringify(t)),a.exercisePopUpCloseBtn.addEventListener("click",f,{passive:!0}),a.exercisePopUpBackdrop.addEventListener("click",F,{passive:!0}),a.exercisePopUpBackdrop.classList.add("is-open"),a.body.classList.add("overflow-hidden"),document.addEventListener("keydown",N)}).catch(t=>{u.error({message:`${t}`})})}function f(){a.exercisePopUpBackdrop.classList.remove("is-open"),a.body.classList.remove("overflow-hidden"),p=null,v=null,a.exercisePopUpBackdrop.removeEventListener("click",F),a.exercisePopUpCloseBtn.removeEventListener("click",f),document.removeEventListener("keydown",N)}function V(e){return new Promise((t,s)=>{q(e).then(i=>{a.exercisePopUpContent.innerHTML=z(i),t(i)}).catch(i=>{s(i)})})}function F(e){e.target===a.exercisePopUpBackdrop&&f()}function Z(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.some(i=>i._id===e._id)?u.warning({message:"Exercise is already in favorites!"}):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),u.success({message:"Exercise added to favorites!"}))}function K(e){const t=JSON.parse(p.dataset.exercise);Z(t),e.stopPropagation(),S(t._id)}function N(e){e.code==="Escape"&&f()}function X(e){const t=e.target,s=t.closest("li.pagination-item:not(.active):not(.three-dots)")??t.closest("li.pagination-arrow:not(.disabled)");if(!s)return;const i=Number(s.dataset.id);y.set("page",i),c.set("page",i),a.exerciseHeaderSpan.dataset.exercise?g():I(),a.mainSection.scrollIntoView()}function Y(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(n=>n.classList.remove("active")),s.classList.add("active"),a.searchForm.reset(),a.searchForm.classList.add("visually-hidden");const r=s.dataset.filter,o=Object.keys(C).find(n=>C[n]===r);o&&(y.set("filter",C[o]),y.set("page",1),c.delete("muscles"),c.delete("bodypart"),c.delete("equipment"),c.set("page",1),a.list.classList.replace("exercise-list","filtered-list"),I()),A()}function ee(e){const s=e.target.closest("li.category-card");if(!s)return;let i=s.dataset.filter.toString().toLowerCase();i==="body parts"&&(i="bodypart");const r=s.dataset.name;O(r),c.set(i,r),c.set("page",1),a.list.classList.replace("filtered-list","exercise-list"),a.searchForm.classList.remove("visually-hidden"),a.list.innerHTML="",g(),a.mainSection.scrollIntoView()}function B(e){e.preventDefault();const t=a.searchInput.value.trim();c.set("keyword",t),g()}function te(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&S(s)}a.searchInputCrossIcon.addEventListener("click",()=>{c.set("page",1),c.delete("keyword"),a.searchForm.reset(),g()});a.searchInputSearchIcon.addEventListener("click",B);a.searchForm.addEventListener("submit",B);export{X as a,ee as b,te as c,Y as o,I as r};
//# sourceMappingURL=search-input-f835893e.js.map
