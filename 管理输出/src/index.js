import _ from 'lodash';
import printfunc from './print';
function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['study', 'webpack'], ' ');

  let btn = document.createElement('button');
  btn.innerHTML = '快点击看看';
  btn.onclick = printfunc;
  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());