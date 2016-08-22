const React = require('react');
const ReactDOM = require('react-dom');

const CoordinatesButton = require('./components/CoordinatesButton');
const DelayedButton = require('./components/DelayedButton');

ReactDOM.render(
  <div>
    <CoordinatesButton />
    <DelayedButton />
  </div>,
  document.getElementById('main')
);
