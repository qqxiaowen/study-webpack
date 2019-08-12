import { AAA } from './main.js';

function component () {
  var element = document.createElement('pre');
  element.innerHTML = '123456789';

  return element;
}

  if (process.env.NODE_ENV !== 'production') {
    console.log('开发环境');
  }
console.log(AAA(6));

document.body.appendChild(component());