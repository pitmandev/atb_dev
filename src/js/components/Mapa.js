var React = require('react');

var longitud = 0;
var latitud = 0;

var map = null;

var Mapa = React.createClass({


	pintarMapa: function(lon,lat){	

		if(isNaN(lon)){
			return;
		}

		if(map==null){

			//console.log("ENTRA if "+new Number(lon)+', '+new Number(lat));

			map = new ol.Map({
				target: 'mapa',
				layers: [
					new ol.layer.Tile({
					source: new ol.source.OSM()
					})
				],
				view: new ol.View({
					center: ol.proj.fromLonLat([new Number(lon), new Number(lat)]),
					zoom: 4
				})
			});
		} else {
			//console.log("ENTRA else: "+new Number(lon)+', '+new Number(lat));
			map.getView().setCenter(ol.proj.fromLonLat([new Number(lon), new Number(lat)]));

		}
	},
	componentDidMount: function(){
		this.pintarMapa(longitud,latitud);
	},
	render: function(){
		if(this.props.data.longitude !== undefined){
			//console.log('Mapa render() ' + this.props.data.longitude + ', ' + this.props.data.latitude);
			this.pintarMapa(this.props.data.longitude,this.props.data.latitude);
		}
		return null;
	}
});

module.exports = Mapa;