/* FUNCTION Defintion */
/* Add Specified Element */
export function addElement(parent,type,arrClass,css,text,id) { // Create Element in DOM dynamically
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
  if (id.length > 0) {
    ele.setAttribute('id',id);
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
