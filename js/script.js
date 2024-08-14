import modal from "./modules/modal";
import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slides from "./modules/slides";
import tabs from "./modules/tabs";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", function () {
  modal();
  calc();
  cards();
  forms();
  slides();
  tabs();
  timer();
});
