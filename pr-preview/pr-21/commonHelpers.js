import"./assets/main-86da5cde.js";import{r as a,s as x,a as u,q as n,b as r,F as f,c as h,d as L}from"./assets/quote-550f796a.js";import{i as g}from"./assets/vendor-790bbfe5.js";import"./assets/search-input-81799c6d.js";function $(e){const i=e.map(({filter:t,name:s,imgURL:c})=>`<li class="filtered-item" data-filter="${t}" data-name="${s}">
            <img
              src="${c}"
              alt="${s}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${t}</h3>
            <p class="filtered-text">${s}</p>
        </li>`).join("");a.list.innerHTML=i}function v(e){let i="";for(let t=1;t<=e;t++)i+=`<li class="pagination-item" data-id="${t}"><a href="#" onclick="event.preventDefault();" class="pagination-link">${t}</a></li>`;a.pagination.innerHTML=i}const E=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function y(e){const i=e.map(({name:t,rating:s,bodyPart:c,burnedCalories:o,target:l,time:p})=>`<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${s}<svg class="exercise-rating-icon">
                  <use href="./images/icons.svg#icon-star"></use>
                </svg>
              </p> 
            </div>
            <button class="exercise-start-btn" type="button">
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
              <p class="exercise-card-title-text">${E(t)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${o} / ${p} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${c}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${l}</div>
              </div>
            </div>
          </div>
        </li>`).join("");a.list.innerHTML=i}function d(){x().then(e=>{e.totalPages,$(e.results),v(e.totalPages),Array.from(a.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const i=Array.from(a.pagination.childNodes).find(t=>t.dataset.id==e.page);i&&i.classList.add("active")}).catch(e=>{g.error({message:`${e}`})})}function m(){u().then(e=>{y(e.results),v(e.totalPages),Array.from(a.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const i=Array.from(a.pagination.childNodes).find(t=>t.dataset.id==e.page);i&&i.classList.add("active")}).catch(e=>{g.error({message:`${e}`})})}function k(e){const t=e.target.closest("li.pagination-item");if(!t)return;const s=Number(t.dataset.id);n.set("page",s),r.set("page",s),a.exerciseHeader.dataset.exercise?m():d()}function b(e){const t=e.target.closest("li[data-filter]");if(!t)return;document.querySelectorAll(".js-filters .active").forEach(l=>l.classList.remove("active")),t.classList.add("active");const c=t.dataset.filter,o=Object.keys(f).find(l=>f[l]===c);o&&(n.set("filter",f[o]),n.set("page",1),r.delete("muscles"),r.delete("bodypart"),r.delete("equipment"),r.set("page",1),a.list.classList.replace("exercise-list","filtered-list"),d()),h()}function w(e){const t=e.target.closest("li.filtered-item");if(!t)return;let s=t.dataset.filter.toString().toLowerCase();s==="body parts"&&(s="bodypart");const c=t.dataset.name;L(c),r.set(s,c),r.set("page",1),a.list.classList.replace("filtered-list","exercise-list"),m()}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches?(n.set("limit",12),r.set("limit",10)):(n.set("limit",9),r.set("limit",8)),n.set("page",1),r.set("page",1),d()});d();a.filter.addEventListener("click",b);a.pagination.addEventListener("click",k);a.list.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
