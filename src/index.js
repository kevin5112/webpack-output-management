import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack']);

  btn.innerHTML = 'click me to print button';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
