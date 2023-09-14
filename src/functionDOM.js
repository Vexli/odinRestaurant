/* FUNCTION Defintion */
/* Add Specified Element */
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

/* Delete All Child Elements*/
export function delAllElement(elementParent) {
  let ele = document.getElementById(elementParent);
  while (ele.hasChildNodes()) {
    ele.removeChild(ele.lastChild);
  }
}

/* Add Background Image */
export function addImgBackground(element, source) {
  let ele = document.getElementById(element);
  ele.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${source}) center/cover no-repeat`;
}
