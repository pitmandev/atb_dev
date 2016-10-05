var React = require('react');

var Mapa = React.createClass({

	pintarMapa: function(){		
		var map = new ol.Map({
			target: 'mapa',
			layers: [
				new ol.layer.Tile({
				source: new ol.source.OSM()
				})
			],
			view: new ol.View({
				center: ol.proj.fromLonLat([this.props.longitud, this.props.latitud]),
				zoom: 4
			})
		});
	},
	componentDidMount: function(){
		alert(this.props.longitud+"\n"+this.props.latitud);
		this.pintarMapa();
	},
	render: function(){
		return null;
	}
});

module.exports = Mapa;