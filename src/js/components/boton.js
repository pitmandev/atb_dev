var React = require('react');

var Boton = React.createClass({

	render:function(){
		switch (this.props.cb) {
			case 'rrtt': 
				return (<div><span>Recursos Turísticos</span><input type='button' value='Ir' onClick={this.rec_tur} /></div>);
		}

	},
	rec_tur: function(){
		document.location.href = 'http://localhost:8080\/rrtt_slider.html';
	}
});

module.exports = Boton;