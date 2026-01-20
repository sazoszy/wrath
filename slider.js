let slides = document.querySelectorAll(".slide");
let sza = 0;

setInterval(() => {
    slides[sza].classList.remove("active");
    sza = (sza + 1) % slides.length;
    slides[sza].classList.add("active");
}, 3000);


