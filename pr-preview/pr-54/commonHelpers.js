import{q as o,a as l,r as e,s as v,b as k}from"./assets/header-cb6ed807.js";import{r as p,o as b,a as f,b as L,c as E}from"./assets/search-input-f835893e.js";import"./assets/scroll-up-a7acf2f2.js";import{i}from"./assets/vendor-7b59b48c.js";window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches?(o.set("limit",12),l.set("limit",10)):(o.set("limit",9),l.set("limit",8)),o.set("page",1),l.set("page",1),e.searchForm.reset(),e.searchForm.classList.add("visually-hidden"),p()});p();e.filter.addEventListener("click",b);e.pagination.addEventListener("click",f);e.list.addEventListener("click",L);e.exercisesContainer.addEventListener("click",E);document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("subscribeForm"),t=document.getElementById("subscribeBtn");s.addEventListener("submit",async n=>{n.preventDefault();const a=s.elements.email.value;try{t.disabled=!0,t.textContent="Subscribing...";const c=await v(a);i.success({title:"Success",message:c.message})}catch(c){i.error({title:"Error",message:c.message})}finally{t.disabled=!1,t.textContent="Send",s.reset()}})});e.exercisePopupAddRatingBtn.addEventListener("click",P);let r=0,d;function g(s){s.preventDefault(),r&&d?k(d,{rate:Number(r),email:e.ratingForm.elements.email.value,review:e.ratingForm.elements.comment.value}).then(()=>{m(),i.success({message:"Thanks for rating!"}),e.ratingForm.reset()}).catch(t=>{i.error({message:t.message})}):i.warning({message:"Please select rating"})}function u(s){const t=s.target.closest(".rating-star-container");if(t){const n=document.querySelectorAll(".js-rating-star");r=t.dataset.id,document.querySelector(".js-rating-label").textContent=Number(r).toFixed(1);for(let a=0;a<r;a++)n[a].classList.add("rating-star--active");for(let a=r;a<5;a++)n[a].classList.remove("rating-star--active")}}function P(){d=JSON.parse(document.querySelector("button#add-favorites").dataset.exercise)._id,e.exercisePopUpBackdrop.classList.remove("is-open"),e.exercisePopUpBackdrop.style.display="none",e.ratingPopUpBackdrop.classList.add("is-open"),e.ratingPopUpContent.innerHTML=y(),e.ratingPopUpCloseBtn.addEventListener("click",m),e.ratingPopUpContent.addEventListener("click",u),e.ratingForm.addEventListener("submit",g)}function m(){e.ratingPopUpBackdrop.classList.remove("is-open"),e.exercisePopUpBackdrop.style.display="flex",e.exercisePopUpBackdrop.classList.add("is-open"),e.ratingPopUpCloseBtn.removeEventListener("click",m),e.ratingPopUpContent.removeEventListener("click",u),e.ratingForm.removeEventListener("submit",g)}function x(){let s="";for(let t=0;t<5;t++)s+=`
    <div class="rating-star-container" data-id="${t+1}">
      <svg class="rating-star js-rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`;return`
    <div class="rating rating--dark">
      <span class="rating-label js-rating-label">0.0</span>
        ${s}
      </div>`}function y(){return`
    <p class="rating-data-parameter-name">Rating</p>
    <div class="rating-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${x()}
      </div>
    </div>
    </div>
  `}
//# sourceMappingURL=commonHelpers.js.map
