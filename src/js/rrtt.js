var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');
var Footer = require('./components/footer');
var DatosBasicos = require('./components/DatosBasicos');
var Recursos = React.createClass({
	// Petición al servicio REST (mock) que devuelve los datos correspondiente a un RECURSO TURISTICO
	cargarRecursos: function(intervalo){
		$.ajax({
			url: "https://private-f627e6-miapi7.apiary-mock.com/recursos",
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
		//clearInterval(intervalo);    
	},
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
        this.cargarRecursos(this);
	},
	render: function(props){
		return (
			<DatosBasicos key="datosBasicos" data={this.state.data} />
		);
	}
});

ReactDOM.render(<Header />,document.getElementById('header'));
ReactDOM.render(<Recursos />,document.getElementById('datosBasicos'));
ReactDOM.render(<Footer />,document.getElementById('footer'));
