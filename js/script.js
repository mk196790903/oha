jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

const drawerIcon = document.querySelector("#js-drawer-icon");
const drawerContent = document.querySelector("#js-drawer-content");


document
.querySelector("#js-drawer-icon").addEventListener("click", function(e) {
    e.preventDefault();
    drawerIcon.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
});

// accordion

jQuery(".js-accordion").on("click", function(e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
      jQuery(this).parent().removeClass("is-open");
      jQuery(this).next().slideUp();
  } else {
      jQuery(this).parent().addClass("is-open");
      jQuery(this).next().slideDown();
  }  
});

const swiper = new Swiper('#js-gallery-swiper', {
  spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '#js-gallery-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-gallery-next',
    prevEl: '#js-gallery-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },                           使っていないの削除
});