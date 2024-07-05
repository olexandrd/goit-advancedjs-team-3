import{r as a,c as N,d as T,e as M,q as C,a as o,F as u,f as P,g as U}from"./header-219909ea.js";import{i as p}from"./vendor-7b59b48c.js";function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A(e){const s=e.map(({filter:t,name:i,imgURL:n})=>`<li class="category-card fade-item" data-filter="${t}" data-name="${i}">
            <img
              src="${n}"
              alt="${i}"
              class="category-card-img"
              width="80"
              height="80"
            />
            <div class="category-card-content">
              <h3 class="category-card-title">${w(t)}</h3>
              <p class="category-card-text">${w(i)}</p> 
            </div>
        </li>`).join("");a.list.innerHTML=s}function h(e){return`<svg
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
              </svg>`}function x(e){return`<svg
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
              </svg>`}function l({pageId:e,content:s,liClassNames:t}){const i=document.createElement("li"),n=document.createElement("a");return n.classList.add("pagination-link"),n.onclick=c=>{c.preventDefault()},n.href="#",n.innerHTML=s,i.classList.add(...t.filter(Boolean)),i.dataset.id=e,i.appendChild(n),i}function $(e,s){const t=document.createDocumentFragment(),i=Array(e).fill(0);if(e>9){const n=l({pageId:1,content:`${h("first")}${h("first")}`,liClassNames:["pagination-arrow","go-to-first",s===1?"disabled":""]});t.appendChild(n);const c=l({pageId:s-1<1?1:s-1,content:h(),liClassNames:["pagination-arrow","go-to-prev",s===1?"disabled":""]});t.appendChild(c);let r=s-1<1?1:s-1,d=s+1>e?e:s+1;if(d-r<2&&(r===1?d=r+2:r=d-2),r!==1){const m=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});t.appendChild(m)}if(i.slice(r-1,d).map((m,f)=>{const S=l({pageId:r+f,content:r+f,liClassNames:["pagination-item",s===r+f?"active":""]});t.appendChild(S)}),d!==e){const m=l({pageId:-1,content:"...",liClassNames:["pagination-item","three-dots"]});t.appendChild(m)}const v=l({pageId:s+1>e?e:s+1,content:x(),liClassNames:["pagination-arrow","go-to-next",s===e?"disabled":""]});t.appendChild(v);const B=l({pageId:e,content:`${x("last")}${x("last")}`,liClassNames:["pagination-arrow","go-to-last",s===e?"disabled":""]});t.appendChild(B)}else i.map((n,c)=>{const r=l({pageId:c+1,content:c+1,liClassNames:["pagination-item",s===c+1?"active":""]});t.appendChild(r)});a.pagination.innerHTML="",a.pagination.appendChild(t)}const q=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function H(e){const s=e.map(({_id:t,name:i,rating:n,bodyPart:c,burnedCalories:r,target:d,time:v})=>`<li class="exercise-card fade-item">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${Number.isInteger(n)?n.toFixed(1):n}<svg class="exercise-rating-icon">
                  <use href="./images/icons.svg#icon-star"></use>
                </svg>
              </p> 
            </div>
            <button class="exercise-start-btn" data-exercise-id="${t}" type="button">
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
                <div class="exercise-card-info-element-content-target-no-overflow">${r} / ${v} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${c}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${d}</div>
              </div>
            </div>
          </div>
        </li>`).join("");a.list.innerHTML=s}function k(){const e=document.getElementsByClassName("fade-item");for(let t=0;t<e.length;++t)s(e[t],t*400);function s(t,i){setTimeout(()=>{t.classList.add("fadein")},i)}}function E(){N().then(e=>{e.totalPages,A(e.results),$(e.totalPages,Number(e.page)),k()}).catch(e=>{p.error({message:`${e}`})})}function g(){T().then(e=>{e.results.length||p.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),H(e.results),$(e.totalPages,Number(e.page)),k()}).catch(e=>{p.error({message:`${e}`})})}const y={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function O(e){let s="";return Object.keys(y).forEach(t=>{e.hasOwnProperty(t)&&(s+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${y[t]}</p>
          <p class="exercise-data-parameter-value">${e[t]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(s+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),s}function D(e){const s=`
    <div class="rating-star-container">
      <svg class="rating-star rating-star--active">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,t=`
    <div class="rating-star-container">
      <svg class="rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`,i=r=>`
    <div class="rating-star-container">
      <svg class="rating-star">
        <defs>
          <linearGradient id="partial-star-${r}">
            <stop offset="${r}%" stop-color="var(--yellow)" />
            <stop offset="${r}%" stop-color="var(--light-20)" />
          </linearGradient>
        </defs>
        <use href="./images/icons.svg#icon-star" style="fill: url(#partial-star-${r});"></use>
      </svg>
    </div>`;let n=e,c="";for(let r=0;r<5;r++)n>=1?c+=s:n>0?c+=i(n*100):c+=t,n--;return`
    <div class="rating rating--dark">
      <span class="rating-label">${Number.isInteger(e)?e.toFixed(1):e}</span>
      ${c}
    </div>`}function j(e){const s=O(e),t=D(e.rating);return`
    <img class="exercise-instruction-image" src="${e.gifUrl}" alt="${e.name} instruction">
    <p class="exercise-name">${e.name}</p>
    <div class="exercise-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${t}
      </div>
    </div>
    </div>
    <ul class="exercise-data">${s}</ul>
    <p class="exercise-description">${e.description}</p>
  `}function G(e){J(e).then(s=>{a.exercisePopUpBackdrop.classList.add("is-open"),a.body.classList.add("overflow-hidden"),a.exercisePopupAddFavoritesBtn.dataset.exercise=JSON.stringify(s),a.exercisePopUpCloseBtn.addEventListener("click",L,{passive:!0}),a.exercisePopupAddFavoritesBtn.addEventListener("click",I,{passive:!0}),a.exercisePopUpBackdrop.addEventListener("click",b,{passive:!0})}).catch(s=>{p.error({message:`${s}`})})}function L(){a.exercisePopUpBackdrop.classList.remove("is-open"),a.body.classList.remove("overflow-hidden"),a.exercisePopupAddFavoritesBtn.removeEventListener("click",I),a.exercisePopUpBackdrop.removeEventListener("click",b),a.exercisePopUpCloseBtn.removeEventListener("click",L)}function J(e){return new Promise((s,t)=>{M(e).then(i=>{a.exercisePopUpContent.innerHTML=j(i),s(i)}).catch(i=>{t(i)})})}function b(e){e.target===a.exercisePopUpBackdrop&&L()}function R(e){let s=JSON.parse(localStorage.getItem("favorites"))||[];s.some(i=>i._id===e._id)?p.warning({message:"Exercise is already in favorites!"}):(s.push(e),localStorage.setItem("favorites",JSON.stringify(s)),p.success({message:"Exercise added to favorites!"}))}function I(e){const s=JSON.parse(a.exercisePopupAddFavoritesBtn.dataset.exercise);R(s),e.stopPropagation()}function Z(e){const s=e.target,t=s.closest("li.pagination-item:not(.active):not(.three-dots)")??s.closest("li.pagination-arrow:not(.disabled)");if(!t)return;const i=Number(t.dataset.id);C.set("page",i),o.set("page",i),a.exerciseHeaderSpan.dataset.exercise?g():E()}function K(e){const t=e.target.closest("li[data-filter]");if(!t)return;document.querySelectorAll(".js-filters .active").forEach(r=>r.classList.remove("active")),t.classList.add("active"),a.searchForm.reset(),a.searchForm.classList.add("visually-hidden");const n=t.dataset.filter,c=Object.keys(u).find(r=>u[r]===n);c&&(C.set("filter",u[c]),C.set("page",1),o.delete("muscles"),o.delete("bodypart"),o.delete("equipment"),o.set("page",1),a.list.classList.replace("exercise-list","filtered-list"),E()),P()}function W(e){const t=e.target.closest("li.category-card");if(!t)return;let i=t.dataset.filter.toString().toLowerCase();i==="body parts"&&(i="bodypart");const n=t.dataset.name;U(n),o.set(i,n),o.set("page",1),a.list.classList.replace("filtered-list","exercise-list"),a.searchForm.classList.remove("visually-hidden"),a.list.innerHTML="",g()}function F(e){e.preventDefault();const s=a.searchInput.value.trim();o.set("keyword",s),g()}function Q(e){const s=e.target.closest(".exercise-start-btn");if(!s)return;const t=s.getAttribute("data-exercise-id");t&&G(t)}a.searchInputCrossIcon.addEventListener("click",()=>{o.set("page",1),o.delete("keyword"),a.searchForm.reset(),g()});a.searchInputSearchIcon.addEventListener("click",F);a.searchForm.addEventListener("submit",F);export{Z as a,W as b,Q as c,K as o,E as r};
//# sourceMappingURL=search-input-08559155.js.map
