/* FUNCTION Defintion */
// Test function
export function check(message){
  console.log(`${message} step has been completed`)
}

// Create Element
export function createElement(parent,type){
  let eleParent = document.getElementById(parent);
  let ele = document.createElement(type);

  eleParent.appendChild(ele);
  return ele;
}

// Add Classes to Element
export function eleAddClass(element,arrClass){
  for (let i = 0; i < arrClass.length; i++) {
    element.classList.add(arrClass[i]);
  }
}

// Add CSS to Element
export function eleAddCSS(element,css){
  element.style.cssText = css;
}

// Add Text to Element
export function eleAddText(element,text){
  element.textContent = text;
}

// Add Attributes to Element
export function eleAddAttribute(element,arrAttribute,arrValue){
  for (let i = 0; i < arrAttribute.length; i++) {
    element.setAttribute(arrAttribute,arrValue);
  }
}

// Delete All Child Elements
export function delAllElement(elementParent) {
  let ele = document.getElementById(elementParent);
  while (ele.hasChildNodes()) {
    ele.removeChild(ele.lastChild);
  }
}

// Add Background Image
export function addImgBackground(element, source) {
  let ele = document.getElementById(element);
  ele.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${source}) center/cover no-repeat`;
}
