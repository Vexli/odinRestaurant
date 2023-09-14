import _ from 'lodash';
import './style.css';
import { addElement, delAllElement } from './functionDOM.js';
import { loadPage } from './onLoadEn.js';
import { loadMenuEn } from './loadMenuEn.js';
import { loadContactEn } from './loadContactEn.js';

/* Event Listener */
document.addEventListener("click", (e) => { // Place marker on mouse click release
  if (e.target.id == "home") {                  // Home Tab
    delAllElement("content");
    loadPage();
  } else if (e.target.id == "menu") {           // Menu Tab
    delAllElement("content");
    loadMenuEn();
  } else if (e.target.id == "contact") {        // Contact Tab
    delAllElement("content");
    loadContactEn();
  }
});

/* FUNCTION Call */
loadPage();
