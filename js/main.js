document.querySelector(".menu-btn").addEventListener("click", ()=>{
    document.querySelector(".nav-main-left").classList.toggle("show");
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".novedades", {delay : 200});
ScrollReveal().reveal(".novedades-banner", {delay : 200});
ScrollReveal().reveal(".social", {delay : 200});