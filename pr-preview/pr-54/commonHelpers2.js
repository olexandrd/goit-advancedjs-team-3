import{g as m,e as h,h as p,i as g,j as L}from"./assets/eventHandlers-3ce4a55d.js";import{t as E}from"./assets/vendor-7b59b48c.js";import"./assets/scroll-up-97df92c3.js";let d=[];const x=document.querySelector(".favorites-text"),a=document.querySelector(".practice-list"),r=document.querySelector(".favorites-pagination");function f(e,n){const t=n<768?8:10;let o=[];if(e.length<=t)return e;for(let s=0;s<e.length;s+=t){let i=e.slice(s,s+t);o.push(i)}return o}function k(e){const n=e.target.closest(".exercise-remove-btn");if(!n)return;const t=n.getAttribute("data-exercise-id");t&&(p(t),u(m()))}function c(e){a.innerHTML=g(e,!0),L()}function u(e=d){e.length||x.classList.remove("visually-hidden");const n=window.innerWidth;if(r.classList.add("visually-hidden"),n>=1440)c(e);else if(n>=768&&n<1440)if(e.length<=10)c(e);else{r.innerHTML="",r.classList.remove("visually-hidden");const t=f(t,n);c(t[0]);let o=[],s=1;t.forEach(()=>{const i=document.createElement("li");i.classList.add("favorites-page"),i.textContent=s;const l=t[s-1];i.addEventListener("click",()=>{c(l),a.scrollIntoView({behavior:"smooth"})}),o.push(i),s+=1}),r.append(...o)}else if(e.length<=8)c(e);else{r.innerHTML="",r.classList.remove("visually-hidden");const t=f(t,n);c(t[0]);let o=[],s=1;t.forEach(()=>{const i=document.createElement("li");i.classList.add("favorites-page"),i.textContent=s;const l=t[s-1],v=()=>{c(l),a.scrollIntoView({behavior:"smooth"})};i.addEventListener("click",w=>{v()}),o.push(i),s+=1}),r.append(...o)}}document.addEventListener("DOMContentLoaded",()=>{d=m(),u(d);const e=E(u,50);window.addEventListener("resize",e),a.addEventListener("click",h),a.addEventListener("click",k)});
//# sourceMappingURL=commonHelpers2.js.map
