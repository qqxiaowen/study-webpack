import _ from 'lodash';
import './index.css';
import './index.less';
import iconOne from './01.png';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['study', 'webpack'], ' ');
  element.classList.add('main');

  let icon = new Image();
  icon.src = iconOne;
  icon.classList.add('icon-one')
  element.appendChild(icon);

  console.log('新增');
  return element;
}

document.body.appendChild(component());