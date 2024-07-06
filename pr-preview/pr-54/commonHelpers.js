import{q as o,a as l,r as e,b as m,o as k,c as b,d as f,e as L,s as E,f as P}from"./assets/eventHandlers-3c8eadc7.js";import"./assets/search-input-d1df183b.js";import"./assets/scroll-up-f4787011.js";import{i}from"./assets/vendor-7b59b48c.js";window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches?(o.set("limit",12),l.set("limit",10)):(o.set("limit",9),l.set("limit",8)),o.set("page",1),l.set("page",1),e.searchForm.reset(),e.searchForm.classList.add("visually-hidden"),m()});m();e.filter.addEventListener("click",k);e.pagination.addEventListener("click",b);e.list.addEventListener("click",f);e.exercisesContainer.addEventListener("click",L);document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("subscribeForm"),s=document.getElementById("subscribeBtn");t.addEventListener("submit",async n=>{n.preventDefault();const r=t.elements.email.value;try{s.disabled=!0,s.textContent="Subscribing...";const c=await E(r);i.success({title:"Success",message:c.message})}catch(c){i.error({title:"Error",message:c.message})}finally{s.disabled=!1,s.textContent="Send",t.reset()}})});let a=0,d;function p(t){t.preventDefault(),a&&d?P(d,{rate:Number(a),email:e.ratingForm.elements.email.value,review:e.ratingForm.elements.comment.value}).then(()=>{u(),i.success({message:"Thanks for rating!"}),e.ratingForm.reset()}).catch(s=>{i.error({message:s.message})}):i.warning({message:"Please select rating"})}function g(t){const s=t.target.closest(".rating-star-container");if(s){const n=document.querySelectorAll(".js-rating-star");a=s.dataset.id,document.querySelector(".js-rating-label").textContent=Number(a).toFixed(1);for(let r=0;r<a;r++)n[r].classList.add("rating-star--active");for(let r=a;r<5;r++)n[r].classList.remove("rating-star--active")}}function y(){d=JSON.parse(document.querySelector("button[data-exercise]").dataset.exercise)._id,e.exercisePopUpBackdrop.classList.remove("is-open"),e.exercisePopUpBackdrop.style.display="none",e.ratingPopUpBackdrop.classList.add("is-open"),e.ratingPopUpContent.innerHTML=h(),C()}function u(){e.ratingPopUpBackdrop.classList.remove("is-open"),e.exercisePopUpBackdrop.style.display="flex",e.exercisePopUpBackdrop.classList.add("is-open"),S()}function x(){let t="";for(let s=0;s<5;s++)t+=`
    <div class="rating-star-container" data-id="${s+1}">
      <svg class="rating-star js-rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`;return`
    <div class="rating rating--dark">
      <span class="rating-label js-rating-label">0.0</span>
        ${t}
      </div>`}function h(){return`
    <p class="rating-data-parameter-name">Rating</p>
    <div class="rating-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${x()}
      </div>
    </div>
    </div>
  `}function C(){e.ratingPopUpCloseBtn.addEventListener("click",u),e.ratingPopUpContent.addEventListener("click",g),e.ratingForm.addEventListener("submit",p)}function S(){e.ratingPopUpCloseBtn.removeEventListener("click",u),e.ratingPopUpContent.removeEventListener("click",g),e.ratingForm.removeEventListener("submit",p)}function v(){const t=document.querySelector(".js-add-rating");return t?(t.addEventListener("click",y),!0):!1}const B=new MutationObserver(t=>{t.forEach(s=>{(s.type==="childList"||s.type==="subtree")&&v()})});B.observe(document,{childList:!0,subtree:!0});v();
//# sourceMappingURL=commonHelpers.js.map
