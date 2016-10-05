var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');
var Footer = require('./components/footer');
var DatosBasicos = require('./components/DatosBasicos');
var Mapa = require('./components/mapa');

var nLongitud = 0;
var nLatitud = 0;
var data = [];


var DatosBasicosContainer = React.createClass({
	cargarRecursos: function(intervalo){
		$.ajax({
			url: "https://private-f627e6-recursos.apiary-mock.com/recursos",
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data[0]});
				nLongitud = data.longitude;
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
        this.cargarRecursos(this);
        //cargarRecursos(this);
	},
	componentWillUnmount: function(){
		this.setState({data:null});
	},
	render: function(props){
		return (
			<div>
			<DatosBasicos key="datosBasicos" data={this.state.data} />
			</div>
		);
	}
});


var MapaContainer = React.createClass({
	getInitialState: function(){
		return {datos: []};
	},
	componentDidMount: function(){
        //this.cargarRecursos(this);
	},
	componentWillUnmount: function(){
		this.setState({datos:null});
	},
	render: function(props){
		return (
			<div>
				<Mapa key="mapa" longitud={nLongitud} latitud={nLatitud} />
			</div>
		);
	}
});
ReactDOM.render(<DatosBasicosContainer />,document.getElementById('datosBasicos'));
ReactDOM.render(<Header />,document.getElementById('header'));
ReactDOM.render(<Footer />,document.getElementById('footer'));
ReactDOM.render(<MapaContainer />, document.getElementById('mapa'));