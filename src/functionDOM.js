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

/* Add Specified Element */ // In the process of being replaced
export function addElement(parent,type,arrClass,css,text,arrAttribute,arrValue) { // Create Element in DOM dynamically
  let eleParent = document.getElementById(parent);
  let ele = document.createElement(type);
  for (let i = 0; i < arrClass.length; i++) {
    ele.classList.add(arrClass[i]);
  }
  if (css.length > 0) {
    ele.style.cssText = css;
  }
  if (text.length > 0) {
    ele.textContent = text;
  }
  for (let i = 0; i < arrAttribute.length; i++) {
    ele.setAttribute(arrAttribute,arrValue);
  }

  eleParent.appendChild(ele);
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
