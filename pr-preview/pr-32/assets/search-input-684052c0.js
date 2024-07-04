import{r as i,c as L,d as E,e as w,q as u,a as n,F as f,f as P,g as b}from"./header-33b04964.js";import{i as d}from"./vendor-790bbfe5.js";function C(e){const t=e.map(({filter:s,name:r,imgURL:a})=>`<li class="filtered-item" data-filter="${s}" data-name="${r}">
            <img
              src="${a}"
              alt="${r}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${s}</h3>
            <p class="filtered-text">${r}</p>
        </li>`).join("");i.list.innerHTML=t}function v(e){let t="";for(let s=1;s<=e;s++)t+=`<li class="pagination-item" data-id="${s}"><a href="#" onclick="event.preventDefault();" class="pagination-link">${s}</a></li>`;i.pagination.innerHTML=t}const S=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function I(e){const t=e.map(({_id:s,name:r,rating:a,bodyPart:c,burnedCalories:l,target:y,time:k})=>`<li class="exercise-card">
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
              <p class="exercise-card-title-text">${S(r)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${l} / ${k} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${c}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${y}</div>
              </div>
            </div>
          </div>
        </li>`).join("");i.list.innerHTML=t}function m(){L().then(e=>{e.totalPages,C(e.results),v(e.totalPages),Array.from(i.pagination.childNodes).forEach(s=>{s.classList.remove("active")});const t=Array.from(i.pagination.childNodes).find(s=>s.dataset.id==e.page);t&&t.classList.add("active")}).catch(e=>{d.error({message:`${e}`})})}function p(){E().then(e=>{e.results.length||d.warning({message:"Sorry, this request did not match. Try changing the request parameters."}),I(e.results),v(e.totalPages),Array.from(i.pagination.childNodes).forEach(s=>{s.classList.remove("active")});const t=Array.from(i.pagination.childNodes).find(s=>s.dataset.id==e.page);t&&t.classList.add("active")}).catch(e=>{d.error({message:`${e}`})})}const g={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular"};function F(e){let t="";return Object.keys(g).forEach(s=>{e.hasOwnProperty(s)&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">${g[s]}</p>
          <p class="exercise-data-parameter-value">${e[s]}</p>
        </li>
      `)}),e.hasOwnProperty("burnedCalories")&&(t+=`
        <li class="exercise-data-list-item">
          <p class="exercise-data-parameter-name">Burned Calories</p>
          <p class="exercise-data-parameter-value">${e.burnedCalories}/${e.time} min</p>
        </li>
      `),t}const o=18;function M(e){const t=`<svg class="exercise-rating-star" width="${o}" height="${o}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--yellow);"></use></svg>`,s=`<svg class="exercise-rating-star" width="${o}" height="${o}" viewBox="0 0 32 32"><use href="../images/icons.svg#icon-star" style="fill: var(--light-20);"></use></svg>`,r=c=>`
        <svg class="exercise-rating-star" width="${o}" height="${o}" viewBox="0 0 32 32">
            <defs>
                <linearGradient id="partial-star-${c}">
                    <stop offset="${c}%" stop-color="var(--yellow)" />
                    <stop offset="${c}%" stop-color="var(--light-20)" />
                </linearGradient>
            </defs>
            <use href="../images/icons.svg#icon-star" style="fill: url(#partial-star-${c});"></use>
        </svg>
    `;let a="";for(let c=0;c<5;c++)e>=1?a+=t:e>0?a+=r(e*100):a+=s,e--;return a}function B(e){const t=F(e),s=M(e.rating);return`
    <img class="exercise-instruction-image" src="${e.gifUrl}" alt="${e.name} instruction">
    <p class="exercise-name">${e.name}</p>
    <div class="exercise-rating-wrapper">
      <p class="exercise-rating">${e.rating}</p>
      <div class="exercise-rating-stars-wrapper">${s}</div>
    </div>
    <ul class="exercise-data">${t}</ul>
    <p class="exercise-description">${e.description}</p>
  `}function T(e){U(e).then(()=>{i.exercisePopUpBackdrop.classList.add("is-open"),i.body.classList.add("overflow-hidden"),q()}).catch(t=>{d.error({message:`${t}`})})}function h(){i.exercisePopUpBackdrop.classList.remove("is-open"),i.body.classList.remove("overflow-hidden"),H()}function U(e){return new Promise((t,s)=>{w(e).then(r=>{i.exercisePopUpContent.innerHTML=B(r),t()}).catch(r=>{s(r)})})}function q(){document.addEventListener("click",x)}function H(){document.removeEventListener("click",x)}function x(e){const t=i.exercisePopUpContent;t&&!t.contains(e.target)&&h()}i.exercisePopUpCloseBtn.addEventListener("click",h);function N(e){const s=e.target.closest("li.pagination-item");if(!s)return;const r=Number(s.dataset.id);u.set("page",r),n.set("page",r),i.exerciseHeaderSpan.dataset.exercise?p():m()}function O(e){const s=e.target.closest("li[data-filter]");if(!s)return;document.querySelectorAll(".js-filters .active").forEach(l=>l.classList.remove("active")),s.classList.add("active"),i.searchForm.reset(),i.searchForm.classList.add("visually-hidden");const a=s.dataset.filter,c=Object.keys(f).find(l=>f[l]===a);c&&(u.set("filter",f[c]),u.set("page",1),n.delete("muscles"),n.delete("bodypart"),n.delete("equipment"),n.set("page",1),i.list.classList.replace("exercise-list","filtered-list"),m()),P()}function j(e){const s=e.target.closest("li.filtered-item");if(!s)return;let r=s.dataset.filter.toString().toLowerCase();r==="body parts"&&(r="bodypart");const a=s.dataset.name;b(a),n.set(r,a),n.set("page",1),i.list.classList.replace("filtered-list","exercise-list"),i.searchForm.classList.remove("visually-hidden"),i.list.innerHTML="",p()}function $(e){e.preventDefault();const t=i.searchInput.value.trim();n.set("keyword",t),p()}function G(e){const t=e.target.closest(".exercise-start-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&(console.log("Exercise ID:",s),T(s))}i.searchInputCrossIcon.addEventListener("click",()=>{n.set("page",1),n.delete("keyword"),i.searchForm.reset(),p()});i.searchInputSearchIcon.addEventListener("click",$);i.searchForm.addEventListener("submit",$);export{N as a,j as b,G as c,O as o,m as r};
//# sourceMappingURL=search-input-684052c0.js.map
