var AppDispatcher = require('../dispatchers/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//var recursos = [];
var recursos;

/*
function cargarRecursos(filtro){
  $.ajax({
//    url: "https://private-f627e6-recursos.apiary-mock.com/recursos",
    url: filtro,
    dataType: 'json',
    cache: false,
    success: function(data){
      //console.log('success '+data);
      recursos = data[0];
    }.bind(this),
    error: function(xhr, status, err) {
      //console.error(this.props.url, status, err.toString());
    }.bind(this)
  });
}
*/
function cargarRecursos(filtro){
  var rt = '{"title":"Título del recurso turístico","type":{"lang":["es","ca","en"],"type":["Castle"],"tipology":["Monument"],"tipology_group":["Art i Cultura"]},"subtitles":{"lang":["es","ca","en"],"subtitle":"Subtítulo del recurso"},"opening_paragraphs":{"lang":["es","ca","en"],"opening_paragraph":"Entradilla del recurso"},"descriptions":{"lang":["es","ca","en"],"description":"Descripción del recurso"},"tags":{"lang":["es","ca","en"],"tags_list":"lista de etiquetas descriptivas"},"leisure_lifestyles":{"lang":["es","ca","en"],"leisure_lifestyles_list":["Familia","Pareja"]},"touristic_subjects":{"lang":["es","ca","en"],"touristic_subjects_list":["Patrimonio cultural, Turismo activo, golf"]},"seasons":["Primavera","Verano"],"phone_1":"2132135131351","phone_2":"4646465","email":"correo@gmail.com","web":"http:\/\/www.castillos.es","facebook":"http:\/\/www.castillos.es\/facebook","googlep":"http:\/\/www.castillos.es\/googlep","twitter":"http:\/\/www.castillos.es\/pio","instagram":"http:\/\/www.castillos.es\/insta","pinterest":"http:\/\/www.castillos.es\/poi","youtube":"http:\/\/www.castillos.es\/utub","address":"Avda. de Europa 8","postal_code":"12345","island":["Formentera","Ibiza"],"areas":[""],"municipalities":["Formentera","Menorca"],"locality":"Formentera","latitude":"60.21312","longitude":"14.21312","geo_file":"http:\/\/www.google.com\/maps\/Formentera","accesibility":{"lang":["es","ca","en"],"accesibility_list":["XXXXXXXXXXXXX","XXXXXXXXXXXXX"]},"time_schedule":"XXXXXXXXXXXXX","features":{"lang":["es","ca","en"],"feature_type":["Alojamiento","Cafetería"],"features_list":"Agua Caliente, Aire Acondicionado, Baño completo, Internet"},"visit_months":{"lang":["es","ca","en"],"months_list":["Enero","Febrero","Marzo","Junio"]},"distinctives":{"lang":["es","ca","en"],"distinctives_list":["Patrimonio de la Humanidad, Guía Michelín"]},"recommended_months":{"lang":["es","ca","en"],"months_list":["Mayo,Junio,Septiember"]},"url_friendly":["http:\/\/www.atb.es\/castillos\/Formentera"],"multimedia":{"url":"","main_media":0,"multimedia_type":["XXXXXXXXXXXXX"],"pixels_width":"XXXXXXXXXXXXX","pixels_height":"XXXXXXXXXXXXX","media_size":["XXXXXXXXXXXXX"]},"featured":1}';
  obj = JSON.parse(rt);
  //console.log(obj.title);
  return obj;
}

var RecursosStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    //console.log('Store emite el evento change');
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getAll: function() {
    //console.log('[RecursosStore] getAll(): recursos ' + recursos);
    return recursos;
  }
});


AppDispatcher.register(function(action) {  

  switch(action.actionType) {

    case "GET_RECURSOS":
      //console.log('[RecursosStore] respuesta al estímulo ' + action.actionType);

      //recursos.push(cargarRecursos(action.filtro));
      recursos = cargarRecursos(action.filtro);

      //console.log('[RecursosStore] Datos obtneidos '+recursos);
      RecursosStore.emitChange();
    break;

    case "REFRESCA":
      //console.log('[RecursosStore] REFRSCA ');
      RecursosStore.emitChange();
    break;

    default:
  }
});

module.exports = RecursosStore;