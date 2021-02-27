/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.welcome-section',{ interval: 200}); 
// sr.reveal('.welcome-description p',{delay: 400});
// sr.reveal('.welcome-img',{}); 
// sr.reveal('.email',{ interval: 600}); 