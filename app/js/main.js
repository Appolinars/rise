"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Burger

  let menuIcon = document.querySelector(".burger");
  let nav = document.querySelector("nav");

  menuIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });

  // Modal

  function modal(modalTrigger, modalClose, modalSelector, modalDialog) {
    let openModal = document.querySelectorAll(modalTrigger);
    let modalContent = document.querySelector(modalDialog);
    let modalCloseBtn = document.querySelector(modalClose);
    let modalName = document.querySelector(modalSelector);
    let body = document.querySelector("body");

    openModal.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        modalName.classList.add("modal-active");
        modalContent.classList.remove("bounceOutDown");
        body.classList.add("no-scroll");
      });
    });

    modalName.addEventListener("click", function () {
      modalContent.classList.add("bounceOutDown");
      window.setTimeout(function () {
        modalName.classList.remove("modal-active");
        body.classList.remove("no-scroll");
      }, 500);
    });

    modalCloseBtn.addEventListener("click", function () {
      modalContent.classList.add("bounceOutDown");
      window.setTimeout(function () {
        modalName.classList.remove("modal-active");
        body.classList.remove("no-scroll");
      }, 500);
    });
    modalContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  modal(".explore__video-box", ".modal__video-close", ".modal__video", ".modal__video-content");

  // Works mobile accordion

  let worksBtns = document.querySelectorAll(".accordion__title");

  worksBtns.forEach((workBtn) => {
    workBtn.addEventListener("click", () => {
      worksBtns.forEach((btn) => {
        if (workBtn !== btn) {
          btn.classList.remove("active");
        }
      });
      workBtn.classList.toggle("active");
    });
  });

  // Sliders

  let brandsSwiper = new Swiper(".brands__slider", {
    freeMode: true,
    watchOverflow: false,
    observer: true,
    observeParents: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      991: {
        watchOverflow: true,
        slidesPerView: 4,
      },
    },
  });

  let worksNav = new Swiper(".works__nav", {
    slidesPerView: "auto",
    freeMode: true,
    direction: "vertical",
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  let worksContent = new Swiper(".works__content", {
    thumbs: {
      swiper: worksNav,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  let reviewsSlider = new Swiper(".reviews__slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".reviews__button-next",
      prevEl: ".reviews__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
});
