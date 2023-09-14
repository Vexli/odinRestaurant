/* IMPORT */
import { addElement, addImgBackground } from './functionDOM.js';
import imgBurger from './asset/img/burger.jpg';
import imgDueruem from './asset/img/dueruem.jpg';
import imgKebab from './asset/img/kebab.jpg';
import imgWrap from './asset/img/wrap.jpg';

/* FUNCTION Defintion */
export function loadMenuEn(){
  console.log('test');
  addElement("content","div",["container-fluid","vh-100","d-flex","flex-column","align-items-center"],"overflow-y:auto;","",["id"],["container"]);
  addElement("container","div",["row","text-center"],"","",["id"],["brand"]);
  addElement("brand","h1",[],"padding-top:4vh;","Gleis 1 Dürüm",["id"],["Gleis1"]);
  addElement("container","div",["text-center","d-flex","justify-content-center"],"","",["id"],["nav"]);
  addElement("nav","h3",[],"padding:2vh;","Home",["id"],["home"]);
  addElement("nav","h3",[],"padding:2vh;","Contact",["id"],["contact"]);
  addElement("container","div",["row","text-center"],"","",["id"],["titel"]);

  /* Menu Section */
  addElement("titel","h2",[],"","Menu",["id"],["the-menu"]);
  addElement("container","div",["d-flex","justify-content-center","flex-wrap"],"","",["id"],["con-menu"]);
  addElement("con-menu","div",["text-center","align-items-center","menu-item"],"","",["id"],["dueruem"]); //Dürüm
  addImgBackground("dueruem",imgDueruem);
  addElement("dueruem","h4",[],"","Durum",[],[]); //Titel
  addElement("dueruem","p",["p-menu"],"","Savor the goodness of our savory dürüm! Packed with tender marinated meat, crisp veggies, and aromatic spices, it's the perfect handheld delight.",[],[]); //Copy
  addElement("con-menu","div",["text-center","align-items-center","menu-item"],"","",["id"],["wrap"]); //Wrap
  addImgBackground("wrap",imgWrap);
  addElement("wrap","h4",[],"","Wrap",[],[]); //Titel
  addElement("wrap","p",["p-menu"],"","Wrap and roll into flavor with our scrumptious wrap! Grilled goodness in a soft flatbread - meat, veggies, and zesty sauces bundled together for a satisfying meal.",[],[]); //Copy
  addElement("con-menu","div",["text-center","align-items-center","menu-item"],"","",["id"],["kebab"]); //Kebab
  addImgBackground("kebab",imgKebab);
  addElement("kebab","h4",[],"","Kebab",[],[]); //Titel
  addElement("kebab","p",["p-menu"],"","Indulge in kebab bliss with juicy, grilled skewers, served with fluffy rice and tangy tzatziki. It's a sensational flavor experience.",[],[]); //Copy
  addElement("con-menu","div",["text-center","align-items-center","menu-item"],"","",["id"],["burger"]); //Burger
  addImgBackground("burger",imgBurger);
  addElement("burger","h4",[],"","Burger",[],[]); //Titel
  addElement("burger","p",["p-menu"],"","Get ready for a burger bonanza like no other! Sink your teeth into our mouthwatering burger, where juicy patties meet fresh veggies, melted cheese, and secret sauces, all hugged by a soft, toasted bun. It's a flavor explosion in every bite, and your taste buds are invited to the party!",[],[]); //Copy

  /* Additional Info*/
  addElement("container","p",[],"","All menu items are available with your choice of Beef (CH), Chicken (FR), or Falafel",[],[]);
};
