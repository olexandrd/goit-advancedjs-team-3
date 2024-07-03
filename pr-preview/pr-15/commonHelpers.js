import"./assets/main-d788657c.js";import{r as s,s as g,q as a,F as d,a as n}from"./assets/quote-ab1b9322.js";import"./assets/search-input-81799c6d.js";import"./assets/vendor-9ceb8365.js";function m(e){const i=e.map(({filter:t,name:r,imgURL:c})=>`<li class="filtered-item">
          <a href="#" class="filtered-link" data-filter="${t}">
            <img
              src="${c}"
              alt="${r}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${t}</h3>
            <p class="filtered-text">${r}</p>
          </a>
        </li>`).join("");s.list.innerHTML=i}function p(e){let i="";for(let t=1;t<=e;t++)i+=`<li class="pagination-item" data-id="${t}"><a href="#" class="pagination-link">${t}</a></li>`;s.pagination.innerHTML=i}function l(){g().then(e=>{e.totalPages,m(e.results),p(e.totalPages),Array.from(s.pagination.childNodes).forEach(t=>{t.classList.remove("active")});const i=Array.from(s.pagination.childNodes).find(t=>t.dataset.id==e.page);i&&i.classList.add("active")}).catch(e=>{console.log(e)})}function h(e){const t=e.target.closest("li.pagination-item");if(!t)return;const r=Number(t.dataset.id);a.set("page",r),l()}function u(e){const t=e.target.closest("li[data-filter]");if(!t)return;document.querySelectorAll(".js-filters .active").forEach(o=>o.classList.remove("active")),t.classList.add("active");const c=t.dataset.filter,f=Object.keys(d).find(o=>d[o]===c);f&&(a.set("filter",d[f]),a.set("page",1),n.set("page",1),l())}window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches?(a.set("limit",12),n.set("limit",10)):(a.set("limit",9),n.set("limit",8)),a.set("page",1),n.set("page",1),l()});l();s.filter.addEventListener("click",u);s.pagination.addEventListener("click",h);
//# sourceMappingURL=commonHelpers.js.map
