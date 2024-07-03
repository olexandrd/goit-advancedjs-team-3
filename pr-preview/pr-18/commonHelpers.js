import"./assets/main-1395a65c.js";import"./assets/search-input-81799c6d.js";import"./assets/header-3d6609c1.js";import"./assets/vendor-9ceb8365.js";const g="https://your-energy.b.goit.study/api/",a={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination"),exerciseHeader:document.querySelector(".js-exercise-header")},d={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},n=new URLSearchParams({filter:d.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),r=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),f={method:"GET",headers:{"Content-Type":"application/json"}};async function h(){console.log(`${g}exercises?${r}`);const e=await fetch(`${g}exercises?${r}`,f);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}async function x(){const e=await fetch(`${g}filters?${n}`,f);if(!e.ok)throw new Error(`Ooops, status code: ${e.status}`);return await e.json()}function v(e){const s=e.map(({filter:t,name:i,imgURL:c})=>`<li class="filtered-item" data-filter="${t}" data-name="${i}">
          <a href="#" class="filtered-link" >
            <img
              src="${c}"
              alt="${i}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${t}</h3>
            <p class="filtered-text">${i}</p>
          </a>
        </li>`).join("");a.list.innerHTML=s}function m(e){let s="";for(let t=1;t<=e;t++)s+=`<li class="pagination-item" data-id="${t}"><a href="#" class="pagination-link">${t}</a></li>`;a.pagination.innerHTML=s}function y(e){const s=e.map(({name:t,rating:i,bodyPart:c,burnedCalories:l,target:o})=>`<li class="exercise-card" >
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
          <p class="exercise-text">Burned calories: ${l}</p>
          <p class="exercise-text">Body part: ${c}</p>
          <p class="exercise-text">Target: ${o}</p>
        </li>`).join("");a.list.innerHTML=s}function p(){x().then(e=>{e.totalPages,v(e.results),m(e.totalPages),Array.from(a.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const s=Array.from(a.pagination.childNodes).find(t=>t.dataset.id==e.page);s&&s.classList.add("active")}).catch(e=>{console.log(e)})}function u(e){h().then(s=>{y(s.results),m(s.totalPages),Array.from(a.pagination.childNodes).forEach(i=>{i.classList.remove("active")});const t=Array.from(a.pagination.childNodes).find(i=>i.dataset.id==s.page);t&&t.classList.add("active")}).catch(s=>{console.log(s)})}function E(e){const t=e.target.closest("li.pagination-item");if(!t)return;const i=Number(t.dataset.id);n.set("page",i),r.set("page",i),a.exerciseHeader.dataset.exercise?u():p()}function w(e){const t=e.target.closest("li[data-filter]");if(!t)return;document.querySelectorAll(".js-filters .active").forEach(o=>o.classList.remove("active")),t.classList.add("active");const c=t.dataset.filter,l=Object.keys(d).find(o=>d[o]===c);l&&(n.set("filter",d[l]),n.set("page",1),r.delete("muscles"),r.delete("bodypart"),r.delete("equipment"),r.set("page",1),p()),k()}function $(e){const t=e.target.closest("li.filtered-item");if(!t)return;let i=t.dataset.filter.toString().toLowerCase();i==="body parts"&&(i="bodypart");const c=t.dataset.name;L(c),r.set(i,c),r.set("page",1),u()}function L(e){a.exerciseHeader.textContent=` / ${e}`,a.exerciseHeader.dataset.exercise=e}function k(){a.exerciseHeader.textContent="",a.exerciseHeader.dataset.exercise=""}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches?(n.set("limit",12),r.set("limit",10)):(n.set("limit",9),r.set("limit",8)),n.set("page",1),r.set("page",1),p()});p();a.filter.addEventListener("click",w);a.pagination.addEventListener("click",E);a.list.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
