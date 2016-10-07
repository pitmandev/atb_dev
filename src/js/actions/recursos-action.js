var AppDispatcher = require('../dispatchers/app-dispatcher');

module.exports = {

  // Obtener recursos turísticos
  obtenerRecursos: function(filtro) {
	//console.log('[Recursos action] (obtenerRecursos) con filtro: ' +  filtro);    
    var action = {
      actionType: "GET_RECURSOS",
      filtro: filtro
    };
    AppDispatcher.dispatch(action);
  },
  refresca: function(obj){
	
	//console.log('[Recursos action] (refresca)');  	
  	
  	var action = {
		actionType: "REFRESCA",
		obj: obj  		
 	};
    AppDispatcher.dispatch(action);
  }

};