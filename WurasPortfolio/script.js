"use strict";
const btnshowModal = document.querySelector(".showModal");
const btncloseModal = document.querySelector(".closeModal");
const overlay = document.querySelector(".overlay");

console.log(btnshowModal);
const modal = document.querySelector(".modal");
const showModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnshowModal.addEventListener("click", showModal);
btncloseModal.addEventListener("click", closeModal);

// document.querySelectorAll("a[href^='#']").forEach((anchor) => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behaviour: "smooth",
//         });
//     });
// });