import"./assets/main-5eb84389.js";import"./assets/search-input-81799c6d.js";import"./assets/header-3d6609c1.js";import"./assets/vendor-9ceb8365.js";const f="https://your-energy.b.goit.study/api/",s={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination")},r={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},a=new URLSearchParams({filter:r.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),o=new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8}),p={method:"GET",headers:{"Content-Type":"application/json"}};async function g(){const t=await fetch(`${f}filters?${a}`,p);if(!t.ok)throw new Error(`Ooops, status code: ${t.status}`);return await t.json()}function h(t){const i=t.map(({filter:e,name:n,imgURL:l})=>`<li class="filtered-item">
          <a href="#" class="filtered-link" data-filter="${e}">
            <img
              src="${l}"
              alt="${n}"
              class="filter-img"
              width="80"
              height="80"
            />
            <h3 class="filtered-title">${e}</h3>
            <p class="filtered-text">${n}</p>
          </a>
        </li>`).join("");s.list.innerHTML=i}function u(t){let i="";for(let e=1;e<=t;e++)i+=`<li class="pagination-item" data-id="${e}"><a href="#" class="pagination-link">${e}</a></li>`;s.pagination.innerHTML=i}function c(){g().then(t=>{t.totalPages,h(t.results),u(t.totalPages),Array.from(s.pagination.childNodes).forEach(e=>{e.classList.remove("active")});const i=Array.from(s.pagination.childNodes).find(e=>e.dataset.id==t.page);i&&i.classList.add("active")}).catch(t=>{console.log(t)})}function w(t){const e=t.target.closest("li.pagination-item");if(!e)return;const n=Number(e.dataset.id);a.set("page",n),c()}function y(t){const e=t.target.closest("li[data-filter]");if(!e)return;document.querySelectorAll(".js-filters .active").forEach(d=>d.classList.remove("active")),e.classList.add("active");const l=e.dataset.filter,m=Object.keys(r).find(d=>r[d]===l);m&&(a.set("filter",r[m]),a.set("page",1),o.set("page",1),c())}window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches?(a.set("limit",12),o.set("limit",10)):(a.set("limit",9),o.set("limit",8)),a.set("page",1),o.set("page",1),c()});c();s.filter.addEventListener("click",y);s.pagination.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
