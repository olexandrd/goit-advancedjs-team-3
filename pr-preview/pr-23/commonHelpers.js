import"./assets/main-8c51de94.js";import{r as s,s as u,a as h,q as n,b as r,F as f,c as L,d as $}from"./assets/quote-165641b1.js";import{i as g}from"./assets/vendor-790bbfe5.js";import"./assets/search-input-81799c6d.js";function E(e){const i=e.map(({filter:t,name:a,imgURL:c})=>`<li class="filtered-item" data-filter="${t}" data-name="${a}">
            <img
              src="${c}"
              alt="${a}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${t}</h3>
            <p class="filtered-text">${a}</p>
        </li>`).join("");s.list.innerHTML=i}function v(e){let i="";for(let t=1;t<=e;t++)i+=`<li class="pagination-item" data-id="${t}"><a href="#" onclick="event.preventDefault();" class="pagination-link">${t}</a></li>`;s.pagination.innerHTML=i}const y=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function k(e){const i=e.map(({_id:t,name:a,rating:c,bodyPart:o,burnedCalories:l,target:p,time:x})=>`<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${c}<svg class="exercise-rating-icon">
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
              <p class="exercise-card-title-text">${y(a)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${l} / ${x} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${o}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${p}</div>
              </div>
            </div>
          </div>
        </li>`).join("");s.list.innerHTML=i}function d(){u().then(e=>{e.totalPages,E(e.results),v(e.totalPages),Array.from(s.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const i=Array.from(s.pagination.childNodes).find(t=>t.dataset.id==e.page);i&&i.classList.add("active")}).catch(e=>{g.error({message:`${e}`})})}function m(){h().then(e=>{k(e.results),v(e.totalPages),Array.from(s.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const i=Array.from(s.pagination.childNodes).find(t=>t.dataset.id==e.page);i&&i.classList.add("active")}).catch(e=>{g.error({message:`${e}`})})}function b(e){const t=e.target.closest("li.pagination-item");if(!t)return;const a=Number(t.dataset.id);n.set("page",a),r.set("page",a),s.exerciseHeaderSpan.dataset.exercise?m():d()}function w(e){const t=e.target.closest("li[data-filter]");if(!t)return;document.querySelectorAll(".js-filters .active").forEach(l=>l.classList.remove("active")),t.classList.add("active");const c=t.dataset.filter,o=Object.keys(f).find(l=>f[l]===c);o&&(n.set("filter",f[o]),n.set("page",1),r.delete("muscles"),r.delete("bodypart"),r.delete("equipment"),r.set("page",1),s.list.classList.replace("exercise-list","filtered-list"),d()),L()}function P(e){const t=e.target.closest("li.filtered-item");if(!t)return;let a=t.dataset.filter.toString().toLowerCase();a==="body parts"&&(a="bodypart");const c=t.dataset.name;$(c),r.set(a,c),r.set("page",1),s.list.classList.replace("filtered-list","exercise-list"),s.list.innerHTML="",m()}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches?(n.set("limit",12),r.set("limit",10)):(n.set("limit",9),r.set("limit",8)),n.set("page",1),r.set("page",1),d()});d();s.filter.addEventListener("click",w);s.pagination.addEventListener("click",b);s.list.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
