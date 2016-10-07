var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');
var Footer = require('./components/footer');
var DatosBasicos = require('./components/DatosBasicos');
var Mapa = require('./components/mapa');

var RecursoActionCreators = require('./actions/recursos-action');
var RecursoStore = require('./stores/recursos-store');

var nLongitud = 0;
var nLatitud = 0;
//var data = [];
var data;

function getStateFromStore() {
    data = RecursoStore.getAll();
    //console.log('VISTA getStateFromStore '+data.island);
    return data;
}	

var DatosBasicosContainer = React.createClass({
	onload: function(){
	    var filtro = "https://private-f627e6-recursos.apiary-mock.com/recursos";
	    RecursoActionCreators.obtenerRecursos(filtro);
	},
	onChange: function() {
		//this.setState(getStateFromStore());			
		this.setState({data:getStateFromStore()});
		//console.log('[RRTT] la vista ha cambiado de datos basicos. Datos actualizados ' + this.state.data.island);
	},
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
		RecursoStore.addChangeListener(this.onChange);
		this.onload();
	},
	componentWillUnmount: function(){
		RecursoStore.removeChangeListener(this.onChange);
		//this.setState({data:null});
	},
	render: function(props){
		//console.log('RRTT render');
		return (
			<div>
			<DatosBasicos key="datosBasicos" data={this.state.data} />
			</div>
		);
	}
});


var MapaContainer = React.createClass({
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function(){
        //this.cargarRecursos(this);
		RecursoStore.addChangeListener(this.onChange);
		RecursoActionCreators.refresca();
	},
	componentWillUnmount: function(){
		//this.setState({datos:null});
	},
	onChange: function() {		
		this.setState({data:getStateFromStore()});
		//console.log('[RRTT] la vista del mapa ha cambiado ');
	},	
	render: function(props){
		return (
			<div>
				<Mapa key="mapa" data={this.state.data} />
			</div>
		);
	}
});
ReactDOM.render(<DatosBasicosContainer />,document.getElementById('datosBasicos'));
ReactDOM.render(<Header />,document.getElementById('header'));
ReactDOM.render(<Footer />,document.getElementById('footer'));
ReactDOM.render(<MapaContainer />, document.getElementById('mapa'));