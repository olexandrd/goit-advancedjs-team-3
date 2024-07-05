import"./assets/header-dfc918cd.js";import{t as p}from"./assets/vendor-7b59b48c.js";import"./assets/scroll-up-d9ee8fc0.js";const x=localStorage.getItem("favorites"),c=JSON.parse(x)||[],L=document.querySelector(".favorites-text"),u=document.querySelector(".practice-list"),r=document.querySelector(".favorites-pagination"),d=document.querySelector(".exercise-header-dt"),v=document.querySelector(".exercise-header");c.length||L.classList.remove("visually-hidden");function h(e,i){const a=i<768?8:10;let t=[];if(e.length<=a)return e;for(let s=0;s<e.length;s+=a){let n=e.slice(s,s+a);t.push(n)}return t}const y=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function o(e){const i=e.map(({_id:a,name:t,rating:s,bodyPart:n,burnedCalories:l,target:f,time:g})=>`<li class="exercise-card">
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
                <div class="exercise-card-info-element-content-target-no-overflow">${l} / ${g} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${n}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${f}</div>
              </div>
            </div>
          </div>
        </li>`).join("");u.innerHTML=i}function m(){const e=window.innerWidth;if(r.classList.add("visually-hidden"),e>=1280)d.classList.remove("visually-hidden"),v.classList.add("visually-hidden"),o(c);else if(e>=768&&e<1280)if(d.classList.add("visually-hidden"),v.classList.remove("visually-hidden"),c.length<=10)o(c);else{r.innerHTML="",r.classList.remove("visually-hidden");const i=h(c,e);o(i[0]);let a=[],t=1;i.forEach(()=>{const s=document.createElement("li");s.classList.add("favorites-page"),s.textContent=t;const n=i[t-1];s.addEventListener("click",()=>{o(n),u.scrollIntoView({behavior:"smooth"})}),a.push(s),t+=1}),r.append(...a)}else if(d.classList.add("visually-hidden"),v.classList.remove("visually-hidden"),c.length<=8)o(c);else{r.innerHTML="",r.classList.remove("visually-hidden");const i=h(c,e);o(i[0]);let a=[],t=1;i.forEach(()=>{const s=document.createElement("li");s.classList.add("favorites-page"),s.textContent=t;const n=i[t-1],l=()=>{o(n),u.scrollIntoView({behavior:"smooth"})};s.addEventListener("click",f=>{l()}),a.push(s),t+=1}),r.append(...a)}}m();const w=p(m,50);window.addEventListener("resize",w);
//# sourceMappingURL=commonHelpers2.js.map
