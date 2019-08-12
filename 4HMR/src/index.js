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

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('index中写的更新…………');
    // printfunc();
    document.body.removeChild(element);
    let element = component();
    document.body.appendChild(element);
  })
}