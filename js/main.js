document.querySelector(".menu-btn").addEventListener("click", ()=>{
    document.querySelector(".nav-main-left").classList.toggle("show");
});

ScrollReveal().reveal(".showcase", {delay : 300});
ScrollReveal().reveal(".novedades", {delay : 400});
ScrollReveal().reveal(".novedades-banner", {delay : 400});
ScrollReveal().reveal(".social", {delay : 400});