var React = require('react');

var DatosBasicos = React.createClass({
	
	render: function(){
		//console.log('DatosBasicos render');
		return(			
			<div>
				<span>CARACTERISTIQUES I DADES BÀSIQUES</span>
				<ul>
					<li>ILLA {this.props.data.island}</li>
					<li>MUNICIPI {this.props.data.municipalities}</li>
					<li>ADREÇA {this.props.data.address}</li>
					<li>TELÈFON 1 {this.props.data.phone_1}</li>
					<li>TELÈFON 2{this.props.data.phone_2}</li>
					<li>WWW {this.props.data.web}</li>
					<li>EMAIL {this.props.data.email}</li>
					<li>FACEBOOK {this.props.data.facebook}</li>
					<li>TWITTER {this.props.data.twitter}</li>
					<li>INSTAGRAM {this.props.data.instagram}</li>
					<li>YOUTUBE {this.props.data.youtube}</li>
				</ul>
			</div>
		);
	}
});

module.exports = DatosBasicos;