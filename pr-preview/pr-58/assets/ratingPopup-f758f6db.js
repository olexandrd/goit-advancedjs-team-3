import{e as g,d as y,i as l}from"./vendor-7b59b48c.js";import{j as b,r as n,k as E}from"./eventHandlers-396a5a98.js";const a=document.querySelector(".js-menu-container"),c=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu"),h=document.querySelectorAll(".mobile-menu-link"),o=()=>{const e=c.getAttribute("aria-expanded")==="true"||!1;c.setAttribute("aria-expanded",!e),a.classList.toggle("is-open"),e?(g(document.body),document.removeEventListener("keydown",d),a.removeEventListener("click",u)):(y(document.body),document.addEventListener("keydown",d),a.addEventListener("click",u))},d=e=>{e.key==="Escape"&&o()},u=e=>{e.target===a&&o()};c.addEventListener("click",o);S.addEventListener("click",o);h.forEach(e=>{e.addEventListener("click",o)});window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(a.classList.remove("is-open"),c.setAttribute("aria-expanded",!1),g(document.body),document.removeEventListener("keydown",d),a.removeEventListener("click",u))});(async()=>{const e=document.getElementById("quote");if(!e)return;let t;const i=localStorage.getItem("quote");if(i&&(t=JSON.parse(i),Date.now()-t.timestamp>1e3*60*60*24&&(t=null)),!t)try{t=await b(),localStorage.setItem("quote",JSON.stringify({...t,timestamp:Date.now()}))}catch{t=null}if(!t)return;const r=e.querySelector(".quote-description"),L=e.querySelector(".quote-author");r.textContent=t.quote,L.textContent=t.author,e.classList.remove("hidden")})();n.scrollUpButton.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});let s=0,m;function v(e){e.preventDefault(),s&&m?E(m,{rate:Number(s),email:n.ratingForm.elements.email.value,review:n.ratingForm.elements.comment.value}).then(()=>{p(),l.success({message:"Thanks for rating!"}),n.ratingForm.reset(),s=0}).catch(t=>{l.error({message:t.message})}):l.warning({message:"Please select rating"})}function k(e){const t=e.target.closest(".rating-star-container");if(t){const i=document.querySelectorAll(".js-rating-star");s=t.dataset.id,document.querySelector(".js-rating-label").textContent=Number(s).toFixed(1);for(let r=0;r<s;r++)i[r].classList.add("rating-star--active");for(let r=s;r<5;r++)i[r].classList.remove("rating-star--active")}}function q(){m=JSON.parse(document.querySelector("button[data-exercise]").dataset.exercise)._id,n.exercisePopUpBackdrop.classList.remove("is-open"),n.exercisePopUpBackdrop.style.display="none",n.ratingPopUpBackdrop.classList.add("is-open"),n.ratingPopUpContent.innerHTML=x(),P()}function p(){n.ratingPopUpBackdrop.classList.remove("is-open"),n.exercisePopUpBackdrop.style.display="flex",n.exercisePopUpBackdrop.classList.add("is-open"),w()}function B(){let e="";for(let t=0;t<5;t++)e+=`
    <div class="rating-star-container" data-id="${t+1}">
      <svg class="rating-star js-rating-star">
        <use href="./images/icons.svg#icon-star"></use>
      </svg>
    </div>`;return`
    <div class="rating rating--dark">
      <span class="rating-label js-rating-label">0.0</span>
        ${e}
      </div>`}function x(){return`
    <p class="rating-data-parameter-name">Rating</p>
    <div class="rating-rating-wrapper">
    <div class="dark-container">
      <div class="sub-container">
      ${B()}
      </div>
    </div>
    </div>
  `}function P(){n.ratingPopUpCloseBtn.addEventListener("click",p),n.ratingPopUpContent.addEventListener("click",k),n.ratingForm.addEventListener("submit",v)}function w(){n.ratingPopUpCloseBtn.removeEventListener("click",p),n.ratingPopUpContent.removeEventListener("click",k),n.ratingForm.removeEventListener("submit",v)}function f(){const e=document.querySelector(".js-add-rating");return e?(e.addEventListener("click",q),!0):!1}const M=new MutationObserver(e=>{e.forEach(t=>{(t.type==="childList"||t.type==="subtree")&&f()})});M.observe(document,{childList:!0,subtree:!0});f();
//# sourceMappingURL=ratingPopup-f758f6db.js.map
