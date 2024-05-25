'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.description').forEach(desc => {
      desc.style.display = 'none';
  });
});

function showDescription(button) {
  var currentlyVisible = button.nextElementSibling.style.display === 'block';
  // Hide all descriptions
  document.querySelectorAll('.description').forEach(desc => {
      desc.style.display = 'none';
  });
  // Toggle visibility of the clicked button's description
  if (!currentlyVisible) {
      button.nextElementSibling.style.display = 'block';
  }
}

/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);


document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const descriptions = document.querySelectorAll('.section-title-car');

  document.querySelector('.prev').addEventListener('click', function() {
      changeSlide(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
      changeSlide(1);
  });

  function changeSlide(step) {
      images[currentIndex].classList.remove('active');
      descriptions[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + step + images.length) % images.length;
      images[currentIndex].classList.add('active');
      descriptions[currentIndex].classList.add('active');
  }
});
