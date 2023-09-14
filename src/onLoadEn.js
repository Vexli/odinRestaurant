/* IMPORT */
import { addElement } from './functionDOM.js';

/* FUNCTION Defintion */
export function loadPage(){
  addElement("content","div",["align-items-center","justify-content-center","container-fluid","vh-100","d-flex","flex-column"],"overflow-y:auto;","",["id"],["container"]);
  addElement("container","div",["row","text-center"],"","",["id"],["brand"]);
  addElement("brand","h1",[],"","Gleis 1 Dürüm",["id"],["Gleis1"]);
  addElement("brand","h2",[],"","Your destination for delicous travel food.",["id"],["tagline"]);
  addElement("container","div",["text-center","d-flex","justify-content-center"],"","",["id"],["nav"]);
  addElement("nav","h3",[],"padding:2vh;","Menu",["id"],["menu"]);
  addElement("nav","h3",[],"padding:2vh;","Contact",["id"],["contact"]);
};
