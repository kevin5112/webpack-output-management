import _ from 'lodash';
import Notes from './data.csv';
import json from './data.json5';
import toml from './data.toml';
import Data from './data.xml';
import yaml from './data.yaml';
import Icon from './icon.png';
import './style.css';

console.log(toml.title); // output 'TOML Example
console.log(toml.owner.name); //output 'Tom Preston-Werner'

console.log(yaml.title); //output 'YSML Exmaple'
console.log(yaml.owner.name); //output 'TomPreston-Werner

console.log(json.title); // output 'JSON5 Example'
console.log(json.owner.name); // output 'Tom Preston-Werner'

function component() {
  const element = document.createElement('div');

  // lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack']);
  element.classList.add('hello');

  // add image to existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
