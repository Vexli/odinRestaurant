/* IMPORT */
import { addElement } from './functionDOM.js';
import { mapOSM } from './osmMap.js';

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
  addElement("container","div",["d-flex","justify-content-center","flex-column","text-center"],"","",["id"],["contact-us"]);
  addElement("contact-us","div",[],"","",["id"],["map"]);
  addElement("contact-us","div",[],"","Halle Lowenplatz Bahnhofplatz, 8001 Zürich",[],[]);
  addElement("contact-us","h4",["p-3"],"","Opening Hours",["id"],["hours"]);
  addElement("contact-us","p",[],"","Daily 09:00 - 23:00",[],[]);
  mapOSM("map","50vh","80vw",47.37810,8.5393635,12)
}
