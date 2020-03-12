import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

let timeNum = 1583995804121;
console.log(moment(timeNum).format('MMMM Do, YYYY'));
let jsx = (
  <p>{moment(timeNum).format('MMMM Do, YYYY')}</p>
);
console.log(jsx);


ReactDOM.render(
jsx,
  document.querySelector('#app')
);