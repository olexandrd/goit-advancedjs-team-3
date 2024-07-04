import{r as i,b as y,c as k,d as E,q as f,a as n,F as g,e as L,f as w}from"./header-f100dab9.js";import{i as d}from"./vendor-790bbfe5.js";function P(e){const t=e.map(({filter:s,name:r,imgURL:a})=>`<li class="filtered-item" data-filter="${s}" data-name="${r}">
            <img
              src="${a}"
              alt="${r}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${s}</h3>
            <p class="filtered-text">${r}</p>
        </li>`).join("");i.list.innerHTML=t}function m(e){let t="";for(let s=1;s<=e;s++)t+=`<li class="pagination-item" data-id="${s}"><a href="#" onclick="event.preventDefault();" class="pagination-link">${s}</a></li>`;i.pagination.innerHTML=t}const b=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function S(e){const t=e.map(({_id:s,name:r,rating:a,bodyPart:c,burnedCalories:l,target:h,time:$})=>`<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${a}<svg class="exercise-rating-icon">
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
                <div class="exercise-card-info-element-content-target-no-overflow">${l} / ${$} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${c}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${h}</div>
              </div>
            </div>
          </div>
        </li>`).join("");i.list.innerHTML=t}function v(){y().then(e=>{e.totalPages,P(e.results),m(e.totalPages),Array.from(i.pagination.childNodes).forEach(s=>{s.classList.remove("active")});const t=Array.from(i.pagination.childNodes).find(s=>s.dataset.id==e.page);t&&t.classList.add("active")}).catch(e=>{d.error({message:`${e}`})})}function p(){k().then(e=>{e.results.length||d.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),S(e.results),m(e.totalPages),Array.from(i.pagination.childNodes).forEach(s=>{s.classList.remove("active")});const t=Array.from(i.pagination.childNodes).find(s=>s.dataset.id==e.page);t&&t.classList.add("active")}).catch(e=>{d.error({message:`${e}`})})}const u={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function I(e){let t="";return Object.keys(u).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${u[s]}</p>
          <p class="exercise-data-parameter-value">${e[s]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),t}const o=18;function C(e){const t=`<svg class="exercise-rating-star" width="${o}" height="${o}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--yellow);"></use></svg>`,s=`<svg class="exercise-rating-star" width="${o}" height="${o}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--light-20);"></use></svg>`,r=c=>`
        <svg class="exercise-rating-star" width="${o}" height="${o}" viewBox="0 0 32 32">
            <defs>
                <linearGradient id="partial-star-${c}">
                    <stop offset="${c}%" stop-color="var(--yellow)" />
                    <stop offset="${c}%" stop-color="var(--light-20)" />
                </linearGradient>
            </defs>
            <use href="../images/icons.svg#icon-star" style="fill: url(#partial-star-${c});"></use>
        </svg>
    `;let a="";for(let c=0;c<5;c++)e>=1?a+=t:e>0?a+=r(e*100):a+=s,e--;return a}function F(e){const t=I(e),s=C(e.rating);return`
    <img class="exercise-instruction-image" src="${e.gifUrl}" alt="${e.name} instruction">
    <p class="exercise-name">${e.name}</p>
    <div class="exercise-rating-wrapper">
      <p class="exercise-rating">${e.rating}</p>
      <div class="exercise-rating-stars-wrapper">${s}</div>
    </div>
    <ul class="exercise-data">${t}</ul>
    <p class="exercise-description">${e.description}</p>
  `}function M(e){T(e).then(()=>{i.exercisePopUpBackdrop.classList.add("is-open")}).catch(t=>{d.error({message:`${t}`})})}function B(){i.exercisePopUpBackdrop.classList.remove("is-open")}function T(e){return new Promise((t,s)=>{E(e).then(r=>{i.exercisePopUpContent.innerHTML=F(r),t()}).catch(r=>{s(r)})})}i.exercisePopUpCloseBtn.addEventListener("click",B);function H(e){const s=e.target.closest("li.pagination-item");if(!s)return;const r=Number(s.dataset.id);f.set("page",r),n.set("page",r),i.exerciseHeaderSpan.dataset.exercise?p():v()}function A(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(l=>l.classList.remove("active")),s.classList.add("active"),i.searchForm.reset(),i.searchForm.classList.add("visually-hidden");const a=s.dataset.filter,c=Object.keys(g).find(l=>g[l]===a);c&&(f.set("filter",g[c]),f.set("page",1),n.delete("muscles"),n.delete("bodypart"),n.delete("equipment"),n.set("page",1),i.list.classList.replace("exercise-list","filtered-list"),v()),L()}function D(e){const s=e.target.closest("li.filtered-item");if(!s)return;let r=s.dataset.filter.toString().toLowerCase();r==="body parts"&&(r="bodypart");const a=s.dataset.name;w(a),n.set(r,a),n.set("page",1),i.list.classList.replace("filtered-list","exercise-list"),i.searchForm.classList.remove("visually-hidden"),i.list.innerHTML="",p()}function x(e){e.preventDefault();const t=i.searchInput.value.trim();n.set("keyword",t),p()}function N(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&(console.log("Exercise ID:",s),M(s))}i.searchInputCrossIcon.addEventListener("click",()=>{n.set("page",1),n.delete("keyword"),i.searchForm.reset(),p()});i.searchInputSearchIcon.addEventListener("click",x);i.searchForm.addEventListener("submit",x);export{H as a,D as b,N as c,A as o,v as r};
//# sourceMappingURL=search-input-9c22d7a5.js.map
