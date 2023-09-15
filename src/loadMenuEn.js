/* IMPORT */
import {
  check,
  createElement,
  eleAddClass,
  eleAddCSS,
  eleAddText,
  eleAddAttribute,
  addImgBackground,
  addElement
 } from './functionDOM.js';
import imgBurger from './asset/img/burger.webp';
import imgDueruem from './asset/img/dueruem.webp';
import imgKebab from './asset/img/kebab.webp';
import imgWrap from './asset/img/wrap.webp';

/* FUNCTION Defintion */
export function loadMenuEn(){
  // Variables General
  const attId = ["id"];
  const clsPad3 = ["p-3"];
  const clsRowTxtCen = ["row","text-center"];
  const clsFlxHorizontal = ["d-flex","justify-content-center","text-center"];
  const clsFlxVertical = [...clsFlxHorizontal, "flex-column"];

  // Container
  /// Variables
  const divContainer = createElement("content", "div");
  const clsContainer = ["container-fluid","vh-100","d-flex","flex-column","align-items-center","text-center"];
  const cssContainer = "overflow-y:auto;";
  const valContainer = ["container"];

  /// Creation
  eleAddClass(divContainer,clsContainer);
  eleAddCSS(divContainer,cssContainer);
  eleAddAttribute(divContainer,attId,valContainer);


  // Brand
  /// Variables
  const divBrand = createElement("container", "div");
  const valBrand = ["brand"];

  /// Creation
  eleAddClass(divBrand,clsRowTxtCen);
  eleAddAttribute(divBrand,attId,valBrand);


  // Gleis1
  /// Variables
  const h1Gleis1 = createElement("brand", "h1");
  const cssGleis1 = "padding-top:4vh";
  const txtGleis1 = "Gleis 1 Dürüm";
  const valGleis1 = ["gleis1"];

  /// Creation
  eleAddCSS(h1Gleis1,cssGleis1);
  eleAddText(h1Gleis1,txtGleis1);
  eleAddAttribute(h1Gleis1,attId,valGleis1);


  // Nav
  /// Variables
  const divNav = createElement("container", "div");
  const valNav = ["nav"];

  /// Creation
  eleAddClass(divNav,clsFlxHorizontal);
  eleAddAttribute(divNav,attId,valNav);


  // Home
  /// Variables
  const h3Home = createElement("nav", "h3");
  const txtHome = "Home";
  const valHome = ["home"];

  /// Creation
  eleAddClass(h3Home,clsPad3);
  eleAddText(h3Home,txtHome);
  eleAddAttribute(h3Home,attId,valHome);


  // Contact
  /// Variables
  const h3Contact = createElement("nav", "h3");
  const txtContact = "Contact";
  const valContact = ["contact"];

  /// Creation
  eleAddClass(h3Contact,clsPad3);
  eleAddText(h3Contact,txtContact);
  eleAddAttribute(h3Contact,attId,valContact);


  // Titel
  /// Variables
  const divTitel = createElement("container", "div");
  const valTitel = ["titel"];

  /// Creation
  eleAddClass(divTitel,clsRowTxtCen);
  eleAddAttribute(divTitel,attId,valTitel);


  // Menu
  /// Variables
  const h2Menu = createElement("titel", "h2");
  const txtMenu = ["Menu"];

  /// Creation
  eleAddText(h2Menu,txtMenu);


  // The-Menu
  /// Variables
  const divTheMenu = createElement("container", "div");
  const clsTheMenu = [...clsFlxHorizontal, "flex-wrap"];
  const attTheMenu = ["the-menu"];

  /// Creation
  eleAddClass(divTheMenu,clsTheMenu);
  eleAddAttribute(divTheMenu,attId,attTheMenu);


  // Create Menu Cards
  /// Variables
  const clsMenuItem = ["text-center","justify-content-center","align-items-center","menu-item","d-flex","flex-column"];
  const clsMenutItemP = ["p-menu"];
  const arrMenuItem = ["Dürüm","Wrap","Kebab","Burger"];
  const arrMenuItemImg = [imgDueruem,imgWrap,imgKebab,imgBurger];
  const arrMenuItemP = [
    "Savor the goodness of our savory dürüm! Packed with tender marinated meat, crisp veggies, and aromatic spices, it's the perfect handheld delight.",
    "Wrap and roll into flavor with our scrumptious wrap! Grilled goodness in a soft flatbread - meat, veggies, and zesty sauces bundled together for a satisfying meal.",
    "Indulge in kebab bliss with juicy, grilled skewers, served with fluffy rice and tangy tzatziki. It's a sensational flavor experience.",
    "Indulge in our mouthwatering burger with juicy patty, fresh veggies, and flavorful condiments on a toasted bun. A burger masterpiece awaits!"
  ];

  /// Creation
  for (let i = 0; i < arrMenuItem.length; i++) {
    let menuItemId = arrMenuItem[i];
    let menuItemCopy = arrMenuItemP[i];
    let menuItem = createElement("the-menu", "div");

    // Create Menu Item
    eleAddClass(menuItem,clsMenuItem);
    eleAddAttribute(menuItem,attId,menuItemId);

    // Add Background Image
    addImgBackground(menuItemId,arrMenuItemImg[i]);

    // Add H4 Content
    let menuItemH4 = createElement(menuItemId, "h4");
    eleAddText(menuItemH4,menuItemId);

    // Add Description Content
    let menuItemP = createElement(menuItemId, "p");
    eleAddText(menuItemP,menuItemCopy);
  }


  // Food
  /// Variables
  const divFood = createElement("container", "p");
  const txtFood = "All menu items are available with your choice of Beef (CH), Chicken (FR), or Falafel";

  /// Creation
  eleAddText(divFood,txtFood)
};
