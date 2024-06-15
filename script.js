'use strict';

const addEventListenerToElement = function (element, eventType, handler) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(eventType, handler);
    }
  } else {
    element.addEventListener(eventType, handler);
  }
};

const navToggleButtons = document.querySelectorAll("[data-nav-toggler]");
const navigationBar = document.querySelector("[data-navbar]");
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pageOverlay = document.querySelector("[data-overlay]");

const toggleNavigationBar = function () {
  navigationBar.classList.toggle("active");
  pageOverlay.classList.toggle("active");
};

addEventListenerToElement(navToggleButtons, "click", toggleNavigationBar);

const closeNavigationBar = function () {
  navigationBar.classList.remove("active");
  pageOverlay.classList.remove("active");
};

addEventListenerToElement(navigationLinks, "click", closeNavigationBar);

const siteHeader = document.querySelector("[data-header]");
const backToTopButton = document.querySelector("[data-back-top-btn]");

const activateHeaderOnScroll = function () {
  if (window.scrollY > 150) {
    siteHeader.classList.add("active");
    backToTopButton.classList.add("active");
  } else {
    siteHeader.classList.remove("active");
    backToTopButton.classList.remove("active");
  }
};

addEventListenerToElement(window, "scroll", activateHeaderOnScroll);

let previousScrollPosition = 0;

const toggleHeaderVisibility = function () {
  if (previousScrollPosition >= window.scrollY) {
    siteHeader.classList.remove("header-hide");
  } else {
    siteHeader.classList.add("header-hide");
  }
  previousScrollPosition = window.scrollY;
};

addEventListenerToElement(window, "scroll", toggleHeaderVisibility);

const contentSections = document.querySelectorAll("[data-section]");

const revealOnScroll = function () {
  for (let i = 0; i < contentSections.length; i++) {
    if (contentSections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      contentSections[i].classList.add("active");
    }
  }
};

revealOnScroll();

addEventListenerToElement(window, "scroll", revealOnScroll);
