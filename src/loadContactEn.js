/* IMPORT */
import { addElement, addImgBackground } from './functionDOM.js';

/* FUNCTION Defintion */
export function loadContactEn(){
  addElement("content","div",["container-fluid","vh-100","d-flex","flex-column","align-items-center"],"overflow-y:auto;","",["id"],["container"]);
  addElement("container","div",["row","text-center"],"","",["id"],["brand"]);
  addElement("brand","h1",[],"padding-top:4vh;","Gleis 1 Dürüm",["id"],["Gleis1"]);
  addElement("container","div",["text-center","d-flex","justify-content-center"],"","",["id"],["nav"]);
  addElement("nav","h3",[],"padding:2vh;","Home",["id"],["home"]);
  addElement("nav","h3",[],"padding:2vh;","Menu",["id"],["menu"]);
  addElement("container","div",["row","text-center"],"","",["id"],["titel"]);

  /* Menu Section */
  addElement("titel","h2",[],"","Contact",[],[]);
  addElement("container","div",["d-flex","justify-content-center","flex-wrap"],"","",["id"],["contact-us"]);
}
