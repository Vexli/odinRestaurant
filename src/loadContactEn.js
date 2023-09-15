/* IMPORT */
import {
  createElement,
  eleAddClass,
  eleAddCSS,
  eleAddText,
  eleAddAttribute
 } from './functionDOM.js';
import { mapOSM } from './osmMap.js';

/* BUILDING on DOM */
export function loadContactEn(){
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


  // Menu
  /// Variables
  const h3Menu = createElement("nav", "h3");
  const txtMenu = "Menu";
  const valMenu = ["menu"];

  /// Creation
  eleAddClass(h3Menu,clsPad3);
  eleAddText(h3Menu,txtMenu);
  eleAddAttribute(h3Menu,attId,valMenu);


  // Titel
  /// Variables
  const divTitel = createElement("container", "div");
  const valTitel = ["titel"];

  /// Creation
  eleAddClass(divTitel,clsRowTxtCen);
  eleAddAttribute(divTitel,attId,valTitel);


  // Contact
  /// Variables
  const h2Contact = createElement("titel", "h2");
  const txtContact = ["Contact"];

  /// Creation
  eleAddText(h2Contact,txtContact);


  // Contact-Us
  /// Variables
  const divContactUs = createElement("container", "div");
  const attContactUs = ["contact-us"];

  /// Creation
  eleAddClass(divContactUs,clsFlxVertical);
  eleAddAttribute(divContactUs,attId,attContactUs);


  // Map-Us
  /// Variables
  const divMap = createElement("contact-us", "div");
  const attMap = ["map"];

  /// Creation
  eleAddAttribute(divMap,attId,attMap);


  // Address
  /// Variables
  const divAddress = createElement("contact-us", "div");
  const txtAddress = "Halle Lowenplatz Bahnhofplatz, 8001 Zürich";

  /// Creation
  eleAddText(divAddress,txtAddress);


  // Hours
  /// Variables
  const h4Hours = createElement("contact-us", "h4");
  const txtHours = "Opening Hours";

  /// Creation
  eleAddText(h4Hours,txtHours);
  eleAddClass(h4Hours,clsPad3);


  // Time
  /// Variables
  const pTime = createElement("contact-us", "p");
  const txtTime = "Daily 09:00 - 23:00";

  /// Creation
  eleAddText(pTime,txtTime);

  /* Create Map */
  mapOSM("map","50vh","80vw",47.37810,8.5393635,12)
}
