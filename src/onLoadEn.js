/* FUNCTION Defintion */
function addElement(parent,type,arrClass,css,text,id) { // Create Element in DOM dynamically
  let eleParent = document.getElementById(parent);
  let ele = document.createElement(type);
  for (let i = 0; i < arrClass.length; i++) {
    ele.classList.add(arrClass[i]);
  }
  ele.style.cssText = css;
  ele.textContent = text;
  ele.setAttribute('id',id);

  eleParent.appendChild(ele);
}

function testLink(item) {
  return console.log(`${item} is Linked`);
}

/* FUNCTION CALL */
addElement("content","div",["align-items-center","col-12","container-fluid","d-flex","justify-content-center","p-0","vh-100"],"","","div-Container")
addElement("div-Container","div",["flex","justify-content-center","row","text-center","cstm-container","m-0"],"","","section")
addElement("section","h1",[],"","Gleis 1 Dürüm","h1-titel")
addElement("section","h2",[],"","Your destination for delicous travel food.","h1-titel")
addElement("section","div",["flex","justify-content-center","d-flex","text-center","cstm-container","col-11","col-md-8","col-lg-6"],"","","tab")
addElement("tab","h3",[],"padding:2vw;","Menu","menu")
addElement("tab","h3",[],"padding:2vw;","Contact","contact")
