"use strict";

document.addEventListener('DOMContentLoaded', function () {

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

  // Sliders

  let servicesSwiper = new Swiper(".brands__slider", {
    freeMode: true,
    watchOverflow: false,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      991: {
        watchOverflow: true,
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  var worksNav = new Swiper(".works__nav", {
    slidesPerView: "auto",
    freeMode: true,
    direction: "vertical",
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var worksContent = new Swiper(".works__content", {
    thumbs: {
      swiper: worksNav,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

});