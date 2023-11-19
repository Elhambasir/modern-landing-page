const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav_close_btn');
const closeBtnIcon = document.querySelector('.mnav_close_btn_icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains(navClosedClass)) {

    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);
    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);

  } else {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
  }
});

// SWIPER
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// FAQ
const faqItems = document.querySelectorAll('.faq_item');

faqItems.forEach((item) => {
  const faqBtn = item.querySelector('.faq_btn');
  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen?'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// SCROLL REVEAL ANIMATIONS
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 2000,
  delay: 600,
  //reset: true,
});

// HERO SECTION
sr.reveal('.hero_text', {origin: 'top'});
sr.reveal('.hero_img');

// STATS
sr.reveal('.stats_item', {interval: 200});


// SERVICES
sr.reveal('.services', {interval: 200});
sr.reveal('.services_top', {interval: 200});
sr.reveal('.services_item', {interval: 200});

// APPOINTMENT
sr.reveal('.appointment_title', {interval: 200});
sr.reveal('.appointment_form', {interval: 200});

// TESTIMONIALS
sr.reveal('.testimonial', {interval: 200});
sr.reveal('.testimonial_container', {interval: 200});


// TEAM
sr.reveal('.team_title', {interval: 200});
sr.reveal('.team_slider', {interval: 200});

// FAQ
sr.reveal('.faq_title', {interval: 200});
sr.reveal('.faq_item', {interval: 200});

// DEPARTMENTS
sr.reveal('.departments', {interval: 200});
sr.reveal('.departments_container', {interval: 200});


// BLOG
sr.reveal('.blog', {interval: 200});
sr.reveal('.blog_post', {interval: 200});

// BRANDS
sr.reveal('.brands', {interval: 200});

// NEWSLETTER
sr.reveal('.newsletter', {interval: 200});
sr.reveal('.newsletter_container', {interval: 200});

// FOOTER
sr.reveal('.footer_item', {
  interval: 100,
  delay: 600,
  distance: '100px',
  origin: 'bottom',
});


