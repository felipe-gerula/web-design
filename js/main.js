document.querySelector(".menu-btn").addEventListener("click", ()=>{
    document.querySelector(".nav-main-left").classList.toggle("show");
});

ScrollReveal().reveal(".showcase", {delay : 400});
ScrollReveal().reveal(".novedades", {delay : 500});
ScrollReveal().reveal(".novedades-banner", {delay : 500});
ScrollReveal().reveal(".social", {delay : 500});
ScrollReveal().reveal(".form-container", {delay : 500});
ScrollReveal().reveal(".form-login", {delay : 500});