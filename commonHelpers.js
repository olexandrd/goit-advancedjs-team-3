import"./assets/main-a2189847.js";import"./assets/search-input-a99b05e6.js";const o="https://your-energy.b.goit.study/api/",n={list:document.querySelector(".js-filtered-list"),filter:document.querySelector(".js-filters"),pagination:document.querySelector(".js-pagination")},r={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},a=new URLSearchParams({filter:r.MUSCLES,page:1,limit:window.matchMedia("(min-width: 768px)").matches?12:9}),c={method:"GET",headers:{"Content-Type":"application/json"}};new URLSearchParams({page:1,limit:window.matchMedia("(min-width: 768px)").matches?10:8});async function s(){const t=await fetch(`${o}filters?${a}`,c);if(!t.ok)throw new Error(`Ooops, status code: ${t.status}`);return await t.json()}function l(t){let i="";for(let e=1;e<=t;e++)i+=`<li class="pagination-item" data-id="${e}"><a href="#" class="pagination-link">${e}</a></li>`;n.pagination.innerHTML=i}window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches?a.set("limit",12):a.set("limit",9),s()});s().then(t=>{t.totalPages,t.results,l(t.totalPages),Array.from(n.pagination.childNodes).find(e=>e.dataset.id==t.page).classList.add("active")}).catch(t=>{console.log(t)});n.filter.addEventListener("click",d);function d(t){}
//# sourceMappingURL=commonHelpers.js.map
