import React from 'react';
import ReactDOM from 'react-dom';

const TestComp = () => (
  <div>
    <h1>Test title</h1>
    <p>test para</p>
  </div>
);

ReactDOM.render(
  <TestComp />,
  document.querySelector('#app')
);

