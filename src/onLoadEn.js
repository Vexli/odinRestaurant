/* IMPORT */
import {
  createElement,
  eleAddClass,
  eleAddCSS,
  eleAddText,
  eleAddAttribute
 } from './functionDOM.js';

/* FUNCTION Defintion */
export function loadHomeEn(){
  // Variables General
  const attId = ["id"];
  const clsPad3 = ["p-3"];
  const clsRowTxtCen = ["row","text-center"];
  const clsFlxHorizontal = ["d-flex","justify-content-center","text-center"];

  // Container
  /// Variables
  const divContainer = createElement("content", "div");
  const clsCover = ["align-items-center","justify-content-center","container-fluid","vh-100","d-flex","flex-column"];
  const cssContainer = "overflow-y:auto;";
  const valContainer = ["container"];

  /// Creation
  eleAddClass(divContainer,clsCover);
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


  // Tagline
  /// Variables
  const h2Tagline = createElement("brand", "h2");
  const cssTagline = "padding-top:4vh";
  const txtTagline = "Your destination for delicous travel food.";
  const valTagline = ["tagline"];

  /// Creation
  eleAddCSS(h2Tagline,cssTagline);
  eleAddText(h2Tagline,txtTagline);
  eleAddAttribute(h2Tagline,attId,valTagline);


  // Nav
  /// Variables
  const divNav = createElement("container", "div");
  const valNav = ["nav"];

  /// Creation
  eleAddClass(divNav,clsFlxHorizontal);
  eleAddAttribute(divNav,attId,valNav);


  // Menu
  /// Variables
  const h3Menu = createElement("nav", "h3");
  const txtMenu = "Menu";
  const valMenu = ["menu"];

  /// Creation
  eleAddClass(h3Menu,clsPad3);
  eleAddText(h3Menu,txtMenu);
  eleAddAttribute(h3Menu,attId,valMenu);


  // Contact
  /// Variables
  const h3Contact = createElement("nav", "h3");
  const txtContact = "Contact";
  const valContact = ["contact"];

  /// Creation
  eleAddClass(h3Contact,clsPad3);
  eleAddText(h3Contact,txtContact);
  eleAddAttribute(h3Contact,attId,valContact);
};
