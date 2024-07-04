import"./assets/main-bf84daae.js";import{r as c,s as h,a as x,q as l,b as n,F as u,c as $,d as y,e as k}from"./assets/quote-ccb3639f.js";import{i as m}from"./assets/vendor-790bbfe5.js";import"./assets/search-input-81799c6d.js";function E(e){const s=e.map(({filter:t,name:i,imgURL:a})=>`<li class="filtered-item" data-filter="${t}" data-name="${i}">
            <img
              src="${a}"
              alt="${i}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${t}</h3>
            <p class="filtered-text">${i}</p>
        </li>`).join("");c.list.innerHTML=s}function f(e){let s="";for(let t=1;t<=e;t++)s+=`<li class="pagination-item" data-id="${t}"><a href="#" onclick="event.preventDefault();" class="pagination-link">${t}</a></li>`;c.pagination.innerHTML=s}function P(e){const s=e.map(({name:t,rating:i,bodyPart:a,burnedCalories:r,target:p})=>`<li class="exercise-card" >
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
          <h2 class="exercise-name">${t}</h2>
          <p class="exercise-text">Burned calories: ${r}</p>
          <p class="exercise-text">Body part: ${a}</p>
          <p class="exercise-text">Target: ${p}</p>
        </li>`).join("");c.list.innerHTML=s}function d(){h().then(e=>{e.totalPages,E(e.results),f(e.totalPages),Array.from(c.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const s=Array.from(c.pagination.childNodes).find(t=>t.dataset.id==e.page);s&&s.classList.add("active")}).catch(e=>{m.error({message:`${e}`})})}function v(){x().then(e=>{P(e.results),f(e.totalPages),Array.from(c.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const s=Array.from(c.pagination.childNodes).find(t=>t.dataset.id==e.page);s&&s.classList.add("active")}).catch(e=>{m.error({message:`${e}`})})}function L(e){const t=e.target.closest("li.pagination-item");if(!t)return;const i=Number(t.dataset.id);l.set("page",i),n.set("page",i),c.exerciseHeader.dataset.exercise?v():d()}function b(e){const t=e.target.closest("li[data-filter]");if(!t)return;document.querySelectorAll(".js-filters .active").forEach(p=>p.classList.remove("active")),t.classList.add("active");const a=t.dataset.filter,r=Object.keys(u).find(p=>u[p]===a);r&&(l.set("filter",u[r]),l.set("page",1),n.delete("muscles"),n.delete("bodypart"),n.delete("equipment"),n.set("page",1),d()),$()}function w(e){const t=e.target.closest("li.filtered-item");if(!t)return;let i=t.dataset.filter.toString().toLowerCase();i==="body parts"&&(i="bodypart");const a=t.dataset.name;y(a),n.set(i,a),n.set("page",1),v()}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches?(l.set("limit",12),n.set("limit",10)):(l.set("limit",9),n.set("limit",8)),l.set("page",1),n.set("page",1),d()});d();c.filter.addEventListener("click",b);c.pagination.addEventListener("click",L);c.list.addEventListener("click",w);const S=document.querySelector(".exercise-pop-up-backdrop"),M=document.querySelector(".exercise-pop-up-content"),q=document.querySelector(".exercise-pop-up-close-btn"),g={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function C(){S.classList.remove("is-open")}function T(e){let s="";return Object.keys(g).forEach(t=>{e.hasOwnProperty(t)&&(s+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${g[t]}</p>
          <p class="exercise-data-parameter-value">${e[t]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(s+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),s}const o=18;function B(e){const s=`<svg class="exercise-pop-up-close-icon" width="${o}" height="${o}"><use href="../images/icons.svg#icon-star" style="fill: var(--yellow);"></use></svg>`,t=`<svg class="exercise-pop-up-close-icon" width="${o}" height="${o}"><use href="../images/icons.svg#icon-star" style="fill: var(--light);"></use></svg>`,i=r=>`
        <svg class="exercise-pop-up-close-icon" width="${o}" height="${o}">
            <defs>
                <linearGradient id="partial-star-${r}">
                    <stop offset="${r}%" stop-color="var(--yellow)" />
                    <stop offset="${r}%" stop-color="var(--light)" />
                </linearGradient>
            </defs>
            <use href="../images/icons.svg#icon-star" style="fill: url(#partial-star-${r});"></use>
        </svg>
    `;let a="";for(let r=0;r<5;r++)e>=1?a+=s:e>0?a+=i(e*100):a+=t,e--;return a}function H(e){const s=T(e),t=B(e.rating);return`
    <img class="exercise-instruction-image" src="${e.gifUrl}" alt="${e.name} instruction">
    <p class="exercise-name">${e.name}</p>
    <div class="exercise-rating-wrapper">
      <p class="exercise-rating">${e.rating}</p>
      <div>${t}</div>
      <ul class="exercise-data">${s}</ul>
      <p class="exercise-description">${e.description}</p>
    </div>
  `}function I(e){k(e).then(s=>{console.log(s),M.innerHTML=H(s)}).catch(s=>{console.log(s)})}I("64f389465ae26083f39b17a2");q.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map
