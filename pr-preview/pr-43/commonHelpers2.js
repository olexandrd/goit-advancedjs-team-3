import"./assets/header-d042de48.js";import{t as b}from"./assets/vendor-7b59b48c.js";import"./assets/quote-793476db.js";const v=[{_id:"64f389465ae26083f39b189e",bodyPart:"chest",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0302.gif",name:"dumbbell decline fly",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:4,burnedCalories:67,time:3,popularity:3643},{_id:"64f389465ae26083f39b18bb",bodyPart:"chest",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0331.gif",name:"dumbbell incline twisted flyes",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:4.67,burnedCalories:70,time:3,popularity:362},{_id:"64f389465ae26083f39b1824",bodyPart:"chest",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0151.gif",name:"cable bench press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:188,time:3,popularity:87},{_id:"64f389465ae26083f39b19bb",bodyPart:"chest",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0659.gif",name:"push-up (wall)",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:4.72,burnedCalories:38,time:3,popularity:436},{_id:"64f389465ae26083f39b18b1",bodyPart:"chest",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0321.gif",name:"dumbbell incline hammer press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:273,time:3,popularity:106},{_id:"64f389465ae26083f39b1aa6",bodyPart:"chest",equipment:"medicine ball",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1303.gif",name:"medicine ball chest push from 3 point stance",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:173,time:3,popularity:73},{_id:"64f389465ae26083f39b1aaa",bodyPart:"chest",equipment:"bosu ball",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1307.gif",name:"push up on bosu ball",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:259,time:3,popularity:54},{_id:"64f389465ae26083f39b1aaf",bodyPart:"chest",equipment:"medicine ball",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1312.gif",name:"medicine ball chest push with run release",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:238,time:3,popularity:72},{_id:"64f389465ae26083f39b19b8",bodyPart:"chest",equipment:"stability ball",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0655.gif",name:"push-up (on stability ball)",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:196,time:3,popularity:36},{_id:"64f389465ae26083f39b19f4",bodyPart:"chest",equipment:"smith machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0758.gif",name:"smith incline reverse-grip press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:171,time:3,popularity:50},{_id:"64f389465ae26083f39b19f4",bodyPart:"chest",equipment:"smith machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0758.gif",name:"smith incline reverse-grip press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:171,time:3,popularity:50},{_id:"64f389465ae26083f39b19f4",bodyPart:"chest",equipment:"smith machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0758.gif",name:"smith incline reverse-grip press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:171,time:3,popularity:50},{_id:"64f389465ae26083f39b19f4",bodyPart:"chest",equipment:"smith machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0758.gif",name:"smith incline reverse-grip press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:171,time:3,popularity:50}],y=JSON.stringify(v);localStorage.setItem("myData",y);const w=localStorage.getItem("myData"),n=JSON.parse(w),u=document.querySelector(".practice-list"),l=document.querySelector(".favorites-pagination"),d=document.querySelector(".exercise-header-dt"),p=document.querySelector(".exercise-header");function g(e,i){const a=i<768?8:10;let t=[];if(e.length<=a)return e;for(let s=0;s<e.length;s+=a){let r=e.slice(s,s+a);t.push(r)}return t}const x=e=>e&&e.charAt(0).toUpperCase()+e.slice(1);function o(e){const i=e.map(({_id:a,name:t,rating:s,bodyPart:r,burnedCalories:c,target:h,time:m})=>`<li class="exercise-card">
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
              <p class="exercise-card-title-text">${x(t)}</p>
            </div>
            <div class="exercise-card-info"> 
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Burned calories:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${c} / ${m} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${r}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${h}</div>
              </div>
            </div>
          </div>
        </li>`).join("");u.innerHTML=i}function f(){const e=window.innerWidth;if(l.classList.add("visually-hidden"),e>=1440)d.classList.remove("visually-hidden"),p.classList.add("visually-hidden"),o(n);else if(e>=768&&e<1440)if(d.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),n.length<=10)o(n);else{l.innerHTML="",l.classList.remove("visually-hidden");const i=g(n,e);o(i[0]);let a=[],t=1;i.forEach(()=>{const s=document.createElement("li");s.classList.add("favorites-page"),s.textContent=t;const r=i[t-1];s.addEventListener("click",()=>{o(r),u.scrollIntoView({behavior:"smooth"})}),a.push(s),t+=1}),l.append(...a)}else if(d.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),n.length<=8)o(n);else{l.innerHTML="",l.classList.remove("visually-hidden");const i=g(n,e);o(i[0]);let a=[],t=1;i.forEach(()=>{const s=document.createElement("li");s.classList.add("favorites-page"),s.textContent=t;const r=i[t-1],c=()=>{o(r),u.scrollIntoView({behavior:"smooth"})};s.addEventListener("click",h=>{c()}),a.push(s),t+=1}),l.append(...a)}}f();const L=b(f,50);window.addEventListener("resize",L);
//# sourceMappingURL=commonHelpers2.js.map
