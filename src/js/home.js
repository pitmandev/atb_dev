var React = require('react');
var ReactDOM = require('react-dom');
var Boton = require('./components/boton');
var Mapa = require('./components/mapa');

ReactDOM.render(<Boton cb='rrtt'/>,document.getElementById('boton'));
ReactDOM.render(<Mapa />, document.getElementById('localiza'));

