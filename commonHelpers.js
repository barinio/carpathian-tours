(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const r={modal:document.querySelector("[data-modal]"),tourBackdrop:document.querySelectorAll(".tour-backdrop"),submitBtn:document.querySelector(".modal-form-btn"),bookTourBtn:document.querySelectorAll("[data-tour-modal-close]")};r.submitBtn.addEventListener("click",d);r.bookTourBtn.forEach(n=>{n.addEventListener("click",d)});function d(n){n.preventDefault(),r.modal.classList.toggle("is-hidden"),r.tourBackdrop.forEach(t=>{t.classList.add("is-hidden")}),r.modal.classList.contains("is-hidden")?document.body.style.overflowY="auto":document.body.style.overflowY="hidden"}
//# sourceMappingURL=commonHelpers.js.map
