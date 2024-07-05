import"./assets/header-360950f7.js";import{t as p}from"./assets/vendor-7b59b48c.js";import"./assets/scroll-up-62b43096.js";const x=localStorage.getItem("favorites"),c=JSON.parse(x)||[],L=document.querySelector(".favorites-text"),d=document.querySelector(".practice-list"),r=document.querySelector(".favorites-pagination"),v=document.querySelector(".exercise-header-dt"),u=document.querySelector(".exercise-header");c.length||(L.classList.remove("visually-hidden"),d.classList.add("visually-hidden"));function f(e,i){const a=i<768?8:10;let t=[];if(e.length<=a)return e;for(let s=0;s<e.length;s+=a){let n=e.slice(s,s+a);t.push(n)}return t}const y=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function l(e){const i=e.map(({_id:a,name:t,rating:s,bodyPart:n,burnedCalories:o,target:h,time:g})=>`<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${s}<svg class="exercise-rating-icon">
                  <use href="./images/icons.svg#icon-star"></use>
                </svg>
              </p> 
            </div>
            <button class="exercise-start-btn" data-exercise-id="${a}" type="button">
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
              <p class="exercise-card-title-text">${y(t)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${o} / ${g} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${n}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${h}</div>
              </div>
            </div>
          </div>
        </li>`).join("");d.innerHTML=i}function m(){const e=window.innerWidth;if(r.classList.add("visually-hidden"),e>=1440)v.classList.remove("visually-hidden"),u.classList.add("visually-hidden"),l(c);else if(e>=768&&e<1440)if(v.classList.add("visually-hidden"),u.classList.remove("visually-hidden"),c.length<=10)l(c);else{r.innerHTML="",r.classList.remove("visually-hidden");const i=f(c,e);l(i[0]);let a=[],t=1;i.forEach(()=>{const s=document.createElement("li");s.classList.add("favorites-page"),s.textContent=t;const n=i[t-1];s.addEventListener("click",()=>{l(n),d.scrollIntoView({behavior:"smooth"})}),a.push(s),t+=1}),r.append(...a)}else if(v.classList.add("visually-hidden"),u.classList.remove("visually-hidden"),c.length<=8)l(c);else{r.innerHTML="",r.classList.remove("visually-hidden");const i=f(c,e);l(i[0]);let a=[],t=1;i.forEach(()=>{const s=document.createElement("li");s.classList.add("favorites-page"),s.textContent=t;const n=i[t-1],o=()=>{l(n),d.scrollIntoView({behavior:"smooth"})};s.addEventListener("click",h=>{o()}),a.push(s),t+=1}),r.append(...a)}}m();const w=p(m,50);window.addEventListener("resize",w);
//# sourceMappingURL=commonHelpers2.js.map
