import"./assets/header-360950f7.js";import{t as g}from"./assets/vendor-7b59b48c.js";import"./assets/scroll-up-62b43096.js";const h=localStorage.getItem("favorites"),c=JSON.parse(h)||[],p=document.querySelector(".favorites-text"),l=document.querySelector(".practice-list"),r=document.querySelector(".favorites-pagination");c.length||(p.classList.remove("visually-hidden"),l.classList.add("visually-hidden"));function f(e,i){const a=i<768?8:10;let s=[];if(e.length<=a)return e;for(let t=0;t<e.length;t+=a){let n=e.slice(t,t+a);s.push(n)}return s}const x=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function o(e){const i=e.map(({_id:a,name:s,rating:t,bodyPart:n,burnedCalories:d,target:v,time:m})=>`<li class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <h3 class="exercise-general-header">Workout</h3>
              <p class="exercise-rating">${t}<svg class="exercise-rating-icon">
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
              <p class="exercise-card-title-text">${x(s)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${d} / ${m} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${n}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${v}</div>
              </div>
            </div>
          </div>
        </li>`).join("");l.innerHTML=i}function u(){const e=window.innerWidth;if(r.classList.add("visually-hidden"),e>=1440)o(c);else if(e>=768&&e<1440)if(c.length<=10)o(c);else{r.innerHTML="",r.classList.remove("visually-hidden");const i=f(c,e);o(i[0]);let a=[],s=1;i.forEach(()=>{const t=document.createElement("li");t.classList.add("favorites-page"),t.textContent=s;const n=i[s-1];t.addEventListener("click",()=>{o(n),l.scrollIntoView({behavior:"smooth"})}),a.push(t),s+=1}),r.append(...a)}else if(c.length<=8)o(c);else{r.innerHTML="",r.classList.remove("visually-hidden");const i=f(c,e);o(i[0]);let a=[],s=1;i.forEach(()=>{const t=document.createElement("li");t.classList.add("favorites-page"),t.textContent=s;const n=i[s-1],d=()=>{o(n),l.scrollIntoView({behavior:"smooth"})};t.addEventListener("click",v=>{d()}),a.push(t),s+=1}),r.append(...a)}}u();const L=g(u,50);window.addEventListener("resize",L);
//# sourceMappingURL=commonHelpers2.js.map
