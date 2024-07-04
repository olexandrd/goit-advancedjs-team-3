import{r as t,b as x,c as y,q as f,a,F as d,d as L,e as $}from"./header-4df36fc5.js";import{i as v}from"./vendor-790bbfe5.js";function k(e){const i=e.map(({filter:s,name:r,imgURL:c})=>`<li class="filtered-item" data-filter="${s}" data-name="${r}">
            <img
              src="${c}"
              alt="${r}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${s}</h3>
            <p class="filtered-text">${r}</p>
        </li>`).join("");t.list.innerHTML=i}function g(e){let i="";for(let s=1;s<=e;s++)i+=`<li class="pagination-item" data-id="${s}"><a href="#" onclick="event.preventDefault();" class="pagination-link">${s}</a></li>`;t.pagination.innerHTML=i}const b=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function E(e){const i=e.map(({_id:s,name:r,rating:c,bodyPart:o,burnedCalories:n,target:u,time:h})=>`<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${c}<svg class="exercise-rating-icon">
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
              <p class="exercise-card-title-text">${b(r)}</p>
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
                <div class="exercise-card-info-element-content-target-no-overflow">${u}</div>
              </div>
            </div>
          </div>
        </li>`).join("");t.list.innerHTML=i}function m(){x().then(e=>{e.totalPages,k(e.results),g(e.totalPages),Array.from(t.pagination.childNodes).forEach(s=>{s.classList.remove("active")});const i=Array.from(t.pagination.childNodes).find(s=>s.dataset.id==e.page);i&&i.classList.add("active")}).catch(e=>{v.error({message:`${e}`})})}function l(){y().then(e=>{e.results.length||v.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),E(e.results),g(e.totalPages),Array.from(t.pagination.childNodes).forEach(s=>{s.classList.remove("active")});const i=Array.from(t.pagination.childNodes).find(s=>s.dataset.id==e.page);i&&i.classList.add("active")}).catch(e=>{v.error({message:`${e}`})})}function w(e){const s=e.target.closest("li.pagination-item");if(!s)return;const r=Number(s.dataset.id);f.set("page",r),a.set("page",r),t.exerciseHeaderSpan.dataset.exercise?l():m()}function P(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(n=>n.classList.remove("active")),s.classList.add("active"),t.searchForm.reset(),t.searchForm.classList.add("visually-hidden");const c=s.dataset.filter,o=Object.keys(d).find(n=>d[n]===c);o&&(f.set("filter",d[o]),f.set("page",1),a.delete("muscles"),a.delete("bodypart"),a.delete("equipment"),a.set("page",1),t.list.classList.replace("exercise-list","filtered-list"),m()),L()}function S(e){const s=e.target.closest("li.filtered-item");if(!s)return;let r=s.dataset.filter.toString().toLowerCase();r==="body parts"&&(r="bodypart");const c=s.dataset.name;$(c),a.set(r,c),a.set("page",1),t.list.classList.replace("filtered-list","exercise-list"),t.searchForm.classList.remove("visually-hidden"),t.list.innerHTML="",l()}function p(e){e.preventDefault();const i=t.searchInput.value.trim();a.set("keyword",i),l()}t.searchInputCrossIcon.addEventListener("click",()=>{a.set("page",1),a.delete("keyword"),t.searchForm.reset(),l()});t.searchInputSearchIcon.addEventListener("click",p);t.searchForm.addEventListener("submit",p);export{w as a,S as b,P as o,m as r};
//# sourceMappingURL=search-input-cd94d297.js.map
