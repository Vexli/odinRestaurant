/* IMPORT */
import { addElement } from './functionDOM.js';

/* FUNCTION Defintion */
export function loadMenuEn(){
  addElement("content","div",["align-items-center","col-12","container-fluid","d-flex","justify-content-center","p-0","vh-100"],"","","div-Container");
  addElement("div-Container","div",["flex","justify-content-center","row","text-center","m-0"],"width:100%","","section");
  addElement("section","h1",[],"","Gleis 1 Dürüm","Gleis1");
  addElement("section","div",["flex","justify-content-center","d-flex","text-center","col-11","col-md-8","col-lg-6"],"width:100%","","tab");
  addElement("tab","h3",[],"padding:2vw 2vw 0vw 2vw;","Home","home");
  addElement("tab","h3",[],"padding:2vw 2vw 0vw 2vw;","Contact","contact");
  addElement("section","br",[],"","","");
  addElement("section","h3",[],"padding:2vw;","Menu","h3-menu");
  addElement("section","div",["flex","justify-content-center","row","text-center","m-0"],"width:100%","","menu-options");
};
