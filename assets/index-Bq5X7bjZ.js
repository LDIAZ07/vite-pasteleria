(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("menuButton"),n=document.getElementById("sidebar"),l=document.getElementById("overlay");s.addEventListener("click",function(){n.classList.toggle("active"),l.classList.toggle("active")}),l.addEventListener("click",function(){n.classList.remove("active"),l.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{var s,n,l,t,e,o,r,i,a;(s=document.getElementById("sucursal"))==null||s.addEventListener("click",()=>{c("sucursales.hbs")}),(n=document.getElementById("personalizados"))==null||n.addEventListener("click",()=>{c("pastelespersonalizados.hbs")}),(l=document.getElementById("otros"))==null||l.addEventListener("click",()=>{c("otros.hbs")}),(t=document.getElementById("pasteleshelados"))==null||t.addEventListener("click",()=>{c("pasteleshelados.hbs")}),(e=document.getElementById("reseñas"))==null||e.addEventListener("click",()=>{c("reseñas.hbs")}),(o=document.getElementById("sobrenosotros"))==null||o.addEventListener("click",()=>{c("sobrenosotros.hbs")}),(r=document.getElementById("pastelesnormales"))==null||r.addEventListener("click",()=>{c("pastelesnormales.hbs")}),(i=document.getElementById("faq"))==null||i.addEventListener("click",()=>{c("faq.hbs")}),(a=document.getElementById("portafolio"))==null||a.addEventListener("click",()=>{c("portafolio.hbs")})});async function c(s){try{const n=await fetch(`pages/${s}`);if(!n.ok)throw new Error(`No se pudo cargar ${s}`);const l=await n.text(),e=Handlebars.compile(l)({});document.getElementById("content").innerHTML=e,d(s),u(),f()}catch(n){console.error("Error cargando la página:",n)}}function d(s){const n=document.querySelector("head"),l=document.createElement("link");let t="";s==="sucursales.hbs"?t="public/css/sucursales.less":s==="pastelespersonalizados.hbs"?t="public/css/pastelespersonalizados.less":s==="otros.hbs"?t="public/css/otros.less":s==="pasteleshelados.hbs"?t="public/css/pasteleshelados.less":s==="reseñas.hbs"?t="public/css/reseñas.less":s==="sobrenosotros.hbs"?t="public/css/sobrenosotros.less":s==="pastelesnormales.hbs"?t="public/css/pastelesnormales.less":s==="faq.hbs"?t="public/css/faq.less":s==="portafolio.hbs"&&(t="public/css/portafolio.less"),t&&(l.rel="stylesheet",l.href=t,n.appendChild(l))}function u(){const s=document.querySelector(".carousel-track");if(!s)return;const n=Array.from(s.children),l=document.querySelector(".carousel-button.right"),t=document.querySelector(".carousel-button.left");let e=0;function o(){const r=n[0].getBoundingClientRect().width;s.style.transform=`translateX(-${e*r}px)`}l==null||l.addEventListener("click",()=>{e=(e+1)%n.length,o()}),t==null||t.addEventListener("click",()=>{e=(e-1+n.length)%n.length,o()})}function f(){const s=document.querySelectorAll(".tarjeta-borde"),n=document.querySelectorAll(".tarjeta"),l=document.querySelectorAll(".tarjeta h3");s.forEach((t,e)=>{const o=n[e],r=l[e];let i=!1;r&&(r.style.display="none"),t.addEventListener("click",()=>{!o||!r||(i?(o.style.height="30px",r.style.fontSize="2px",o.style.opacity="0",r.style.display="none",t.style.opacity="1"):(o.style.height="300px",o.style.zIndex="150",r.style.fontSize="16px",o.style.opacity="1",r.style.display="block",t.style.opacity="1"),i=!i)})})}
