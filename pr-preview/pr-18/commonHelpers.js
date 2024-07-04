import"./assets/main-f052b72e.js";import{r as a,s as u,a as h,q as n,b as r,F as g,c as v,d as x}from"./assets/quote-550f796a.js";import{i as m}from"./assets/vendor-790bbfe5.js";import"./assets/search-input-81799c6d.js";function E(t){const s=t.map(({filter:e,name:i,imgURL:c})=>`<li class="filtered-item" data-filter="${e}" data-name="${i}">
            <img
              src="${c}"
              alt="${i}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${e}</h3>
            <p class="filtered-text">${i}</p>
        </li>`).join("");a.list.innerHTML=s}function f(t){let s="";for(let e=1;e<=t;e++)s+=`<li class="pagination-item" data-id="${e}"><a href="#" class="pagination-link">${e}</a></li>`;a.pagination.innerHTML=s}function L(t){const s=t.map(({name:e,rating:i,bodyPart:c,burnedCalories:l,target:o})=>`<li class="exercise-card" >
          <h3 class="exercise-general-header">Workout</h3>
          <p class="exercise-rating">${i} 
            <svg>
              <use href="./images/icons.svg#icon-star"></use>
            </svg>
          </p> 
          <button class="exercise-start-btn" type="button">
            start
            <svg>
              <use href="./images/icons.svg#icon-start-arrow"></use>
            </svg>
          </button>
          <h2 class="exercise-name">${e}</h2>
          <p class="exercise-text">Burned calories: ${l}</p>
          <p class="exercise-text">Body part: ${c}</p>
          <p class="exercise-text">Target: ${o}</p>
        </li>`).join("");a.list.innerHTML=s}function d(){u().then(t=>{t.totalPages,E(t.results),f(t.totalPages),Array.from(a.pagination.childNodes).forEach(e=>{e.classList.remove("active")});const s=Array.from(a.pagination.childNodes).find(e=>e.dataset.id==t.page);s&&s.classList.add("active")}).catch(t=>{m.error({message:`${t}`})})}function p(){h().then(t=>{L(t.results),f(t.totalPages),Array.from(a.pagination.childNodes).forEach(e=>{e.classList.remove("active")});const s=Array.from(a.pagination.childNodes).find(e=>e.dataset.id==t.page);s&&s.classList.add("active")}).catch(t=>{m.error({message:`${t}`})})}function $(t){const e=t.target.closest("li.pagination-item");if(!e)return;const i=Number(e.dataset.id);n.set("page",i),r.set("page",i),a.exerciseHeader.dataset.exercise?p():d()}function y(t){const e=t.target.closest("li[data-filter]");if(!e)return;document.querySelectorAll(".js-filters .active").forEach(o=>o.classList.remove("active")),e.classList.add("active");const c=e.dataset.filter,l=Object.keys(g).find(o=>g[o]===c);l&&(n.set("filter",g[l]),n.set("page",1),r.delete("muscles"),r.delete("bodypart"),r.delete("equipment"),r.set("page",1),d()),v()}function k(t){const e=t.target.closest("li.filtered-item");if(!e)return;let i=e.dataset.filter.toString().toLowerCase();i==="body parts"&&(i="bodypart");const c=e.dataset.name;x(c),r.set(i,c),r.set("page",1),p()}window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches?(n.set("limit",12),r.set("limit",10)):(n.set("limit",9),r.set("limit",8)),n.set("page",1),r.set("page",1),d()});d();a.filter.addEventListener("click",y);a.pagination.addEventListener("click",$);a.list.addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map
