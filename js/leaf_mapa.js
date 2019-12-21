var zoom = false;
var drawControl_Existe = false;
var BING_KEY = 'AtfyQFLwAqMac5Le45E3ZNuHoolIPOnbS5lneKbIaWJI60e9cBfcvxZeBKjU-tH2';

var countLayers = 1;
buttonInfo_activo = false;

/*console.log(concatenar);
var palabra = "token ";

var concate = palabra+concatenar;
var Auth = "Auth";*/

//Window.map = new L.Map('map');
var map = L.map( 'map', {
	center: [-38.0, -68.0],
    	//crs: L.CRS.EPSG4326,
    	minZoom: 2,
    	zoom: 4
});

L.easyPrint({
	title: 'Imprimir',
	position: 'bottomright',
	elementsToHide: 'p, h2, .leaflet-control-zoom'
}).addTo(map);

var db = new PouchDB('ccrr');
var username = 'wastainceardsseransomete';
var password = '3b8f7dc469d50f9b110778a754ee599cec12e49c';
var remoteCouch = 'https://90705519-98e2-4acf-b321-1466df6704c8-bluemix.cloudant.com/ccrr';

var urlCCRR = 'https://90705519-98e2-4acf-b321-1466df6704c8-bluemix.cloudant.com/ccrr/_design/viewCaminosR/_geo/newGeoIndexC_rurales?bbox=-57.182979583740234,-37.00090757113875,-57.13268280029297,-36.99172176958989&limit=2&include_docs=true';

//var urlCCRR = 'https://wastainceardsseransomete:3b8f7dc469d50f9b110778a754ee599cec12e49c@90705519-98e2-4acf-b321-1466df6704c8-bluemix.cloudant.com/ccrr/_design/viewCaminosR/_geo/newGeoIndexC_rurales?bbox=-57.182979583740234,-37.00090757113875,-57.13268280029297,-36.99172176958989&limit=10&include_docs=true';
var crimeslayer = L.geoJson(null, {
	onEachFeature: onEachFeature
}).addTo(map);

existeL = true;

db.changes({
	since: 'now',
    	live: true
}).on('change', showTodos);

//NO HACER LLAMADAS VIA AJAX. USAR Sync
/*var xhrCR = new XMLHttpRequest();
xhrCR.send(null);*/

function showTodos() {
    //db.allDocs({include_docs: true, descending: true}, function(err, doc) {
	//console.log(doc);
    //});
    db.allDocs({include_docs: true, descending: true}).then(function (result) {
	console.log("Documentos");
	console.log(result);
	/*var geojson = {};
	geojson['type'] = 'FeatureCollection';
	geojson['features'] = [];
 
	console.log(doc.rows.length);
	for (var i = 0; i < doc.rows.length; i++) {
			if ( doc.rows[i].doc.geometry ){ // this skips non-GeoJSON docs, e.g. design documents
				var feature = {
					"type": "Feature",
					"_id": doc.rows[i].doc._id,
					"properties": doc.rows[i].doc.properties,
					"geometry": doc.rows[i].doc.geometry

				}
				geojson['features'].push(feature);
			}
		}
	console.log(geojson);
	crimeslayer.addData(geojson);*/

	var respuesta = result.rows.map( (row) => { //map devuelve un array
		return { "type": "Feature", "_id": row.id, "_rev": row.value.rev, /*"properties": {"_leaflet_id": row.properties._leaflet_id}/*, "feature_type":row.properties.feature_type },*/"geometry": row.doc.geometry };
	});
	console.log(respuesta);
	
		return Promise.all( respuesta ).then( function (result) {
			console.log("Primer promesa");
			console.log(result);

			var datos = result[0];

			let jsnL = { "type": "FeatureCollection", "features" : result};
			console.log(jsnL);

			//if(existeL == true){
				crimeslayer.addData(jsnL);

			/*} else {
				var crimeslayer = L.geoJson(null, {
                                        onEachFeature: onEachFeature
                                }).addTo(map);
				existeL = true;
			}*/

			console.log(crimeslayer);
		
	
			}).catch( function (err){
				console.log (err);
			});
   }).catch ( function (err) {
	console.log (err);
   });
}
showTodos();

function addTodo(text, propiedades) {
	var textJ = JSON.parse(text);
	console.log(textJ);
	var textoProp = JSON.parse(propiedades);

	var idInsert = Math.floor(Math.random() * 1000);

	var todo = {
      		_id: new Date().toISOString(),
      		title: "nueva_geom"+idInsert,
		properties : textoProp,
        	geometry: textJ,
      		completed: false
    	};
	//db.put(todo, function callback(err, result) {
	db.put(todo).then( function(result){
		console.log("everything is A-OK");
      		console.log(result);
	}).catch( function(err){
		console.log("Ocurrio un error");
		console.log(err);
	})
      	/*if (!err) {
        	console.log('Successfully posted a todo!');
        	console.log(result);
      	}
    	});*/
}//cierra addTodo con promises

function sync() {
    //syncDom.setAttribute('data-sync-state', 'syncing');
    var opts = {
        live: true,
        auth: {
        username: username,
        password: password
        }
    };
    db.sync(remoteCouch, opts, syncError).on('change', showTodos);
}

function syncError() {
    //syncDom.setAttribute('data-sync-state', 'error');
    console.log("Error al sincronizar");
}

if (remoteCouch) {
	sync();
}

map.zoomControl.setPosition('bottomright');//topright

/*var drawnItems = new L.FeatureGroup();
//console.log(drawnItems);

        map.addLayer(drawnItems);

        var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
map.addControl(drawControl);
drawControl.setPosition('topright');*/	

/*var urlCity = 'https://raw.githubusercontent.com/geo4aguilares/Repositorio/master/ingenios.geojson';

var xhr = new XMLHttpRequest();
xhr.open('GET', urlCity);

xhr.onload = function(e) {
  	var data = JSON.parse(this.response);
  	console.log(data);

  	var geojsonMarkerOptions = {
    		radius: 5,
    		fillColor: "#ff7800",
    		color: "#000",
    		weight: 1,
    		opacity: 1,
    		fillOpacity: 0.8
  	};

    	L.geoJson(data, {
    		pointToLayer: function (feature, latlng) {
        	return L.circleMarker(latlng, geojsonMarkerOptions);
    		}
    	}).addTo(map);
}

xhr.send();*/

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 18
}).addTo(map);

var bingLayer = L.tileLayer.bing(BING_KEY).addTo(map);

var OSM = L.tileLayer( 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
}).addTo(map);

/*map.addControl(drawControl);

map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;
            drawnItems.addLayer(layer);
        });*/

var baseMaps = {
	"<span style='color: gray'>Carto</span>": CartoDB_DarkMatter,
	"<span style='color: gray'>Bing</span>": bingLayer,
	"<span style='color: gray'>OpenStreetMap</span>": OSM
};

var overlayMaps = {
    //"WMS": wmsTopoIcgc,
    //"Geojson": pointG
};

L.control.layers(baseMaps).addTo(map);

layer_area_urbana.addTo(map);
layer_area_urbana.bringToFront();

//******************************************
//https://www.codeproject.com/Articles/1020023/Editing-Spatial-Data-in-Leaflet
//https://codeday.me/es/qa/20190407/445881.html
//https://codeday.me/es/qa/20190201/157473.html
var polygonDrawer = new L.Draw.Polyline(map);

//var toolbarE = new L.EditToolbar.Edit(map);

map.on(L.Draw.Event.DRAWSTART, function(e) {
  console.log("draw start: " + e.layerType);
});
map.on(L.Draw.Event.DRAWSTOP, function(e) {
  console.log("draw stop: " + e.layerType);
  console.log(e);

});

map.on('draw:created', function (e) {
    var type = e.layerType,
    layer = e.layer;
	
    //layer.addTo(map);
    //console.log(layer);

    var featureId = L.stamp(layer);
  	layer.feature = {
    		'type': 'Feature',
    		'properties': {
      			'_leaflet_id': featureId,
      			'feature_type': e.layerType
    		}
  	};
	
	var jsonL = layer.toGeoJSON();
	console.log(jsonL);

	//ccrrVectorial.addData(jsonL);
	//crimeslayer.addData(jsonL);
	var textoJ = JSON.stringify(jsonL.geometry);//.geometry
	console.log(textoJ);

	var textoProp = JSON.stringify(jsonL.properties);
	
	
	//var textoJ = '{"type":"LineString", "coordinates":[[-59.056663513183594, -36.01251918015222], [-59.05099868774414, -36.01345644529775]]}';
	addTodo(textoJ, textoProp);//<================================================ ESTOOO
	//drawnItems.addLayer(layer);
});

crimeslayer.on('edit', function() {
	console.log('Editar y salvar!');
	console.log(crimeslayer);
});
console.log(drawControl_Existe);
if(drawControl_Existe == false){
	var featureGroup = L.featureGroup().addTo(map);
}

function dibujar(){
	polygonDrawer.enable();
	console.log("estoy dibujando");
}

map.on('draw:editstart', function (e) {
	console.log(e);
        console.log("started editing")
});
map.on('draw:edited', function (e) {
    // Update db to save latest changes.
    	var layer = e.layers;
	console.log(layer);

	var objetivo = e.target;
	console.log(objetivo);
	var id = layer._layers;
	console.log(id);
	console.log(id._leaflet_id);

	//featureGroup.addLayer(e.layers);
	//console.log(featureGroup);
	//console.log(featureGroup._leaflet_id);

	var featureId = L.stamp(id);
	console.log(featureId);
	console.log(layer.featureId);

	//var idString = JSON.stringify(id);
	//console.log(idString); 	
	//var datos = getLayerId(id);
	//console.log(datos);
	//var coordN = layer.getLatLng().toString();
	//console.log(coordN);

});

map.on('draw:editstop', function() {
	console.log('se detuvo la edicion');


	db.get('2019-07-19T16:49:38.649Z').then((doc) => {

    	//doc.title = "Changes_title";
	//var text = '{"type":"LineString", "coordinates":[[-56.87416076660156, -36.40746808220019], [-56.773223876953125, -36.39088760560906]]}';
	var text = '{"type":"LineString", "coordinates":[[-56.76361083984375, -36.35384510475375], [-56.80412292480469, -36.356057092401755], [-56.803436279296875, -36.381490432105934], [-56.76910400390625, -36.377620677623874]]}';
	var textJ = JSON.parse(text);
    	doc.geometry= textJ;
    		return db.put(doc);    
	}).then(() => {
		//map.removeLayer( crimeslayer );
		existeL = false;
		showTodos();
    		return db.get('2019-07-19T16:49:38.649Z');
	}).then((doc) => {
		showTodos();
    		console.log(doc);
	}).catch((err) => {

    		console.error(err);
	});
});
//------------------------------------------

/*map.pm.addControls({
  position: 'topleft',
  drawCircle: true,
});*/

map.on('zoomend' , function (e) {
	console.log(map.getZoom());
	var zoomLevel = map.getZoom();
	if(zoomLevel > 11){
		console.log('mostrar barra de edicion');
		zoom = true;
		console.log(zoom);
		loadGeojson();
		//dibujar();
	}
});

//https://www.e-education.psu.edu/geog585/node/765
var clickedLatLng = {lat: null, lng: null};

//******PENDIENTE info: activo / inactivo solo con wms. Ver que pasa con los vectoriales
// se cambia document.getElementById(target_id) X document.getElementById('floatingInfo') 
function quitar_info(){
	
	buttonInfo_activo= false;
	var target = event.target;
	var target_id= target.id;
	console.log(target_id);

	document.getElementById('floatingInfo').removeEventListener("click", quitar_info, false);
        document.getElementById('floatingInfo').addEventListener("click", info_wms, false);

	document.getElementById('floatingInfo').title = 'Activar Info'; //Cambiar tutulo al div cuando está desactivado
	/*document.getElementById(target_id).classList.remove('floatingInfo_desactivado');
	document.getElementById(target_id).classList.add('floatingInfo');*/
	//document.getElementById(target_id).className =  "floatingInfo";
	
	map.off('click');
}

function info_wms(){

	buttonInfo_activo= true;
	var target = event.target;
	var target_id= target.id;
	console.log(target_id);
	document.getElementById('floatingInfo').removeEventListener("click", info_wms, false);
        document.getElementById('floatingInfo').addEventListener("click", quitar_info, false);
	document.getElementById('floatingInfo').title = 'Desactivar Info'; //Cambiar tutulo al div
	/*document.getElementById(target_id).classList.remove('floatingInfo');
	document.getElementById(target_id).classList.add('floatingInfo_desactivado');*/

	map.on('click', function (e) {//https://codepen.io/mmsmdali/pen/LWEpym/

	if( countLayers > 0){
	var pixelPosition = e.layerPoint;
	var _layers = this._layers,
      	layers = [],
      	versions = [],
      	styles = [];

    	for (var x in _layers) {
      		var _layer = _layers[x];
      		if (_layer.wmsParams) {
			console.log(_layer.wmsParams);
        		layers.push(_layer.wmsParams.layers);
        		versions.push(_layer.wmsParams.version);
        		styles.push(_layer.wmsParams.styles);
			console.log(layers);
      		}
    	}

	var clickedLatLng = map.layerPointToLatLng(pixelPosition);
	console.log(clickedLatLng);
	//var loc = '(' + e.latlng.lat.toFixed(3) + ', ' + e.latlng.lng.toFixed(3) + ')';
	var sw = map.options.crs.project(map.getBounds().getSouthWest());
	var ne = map.options.crs.project(map.getBounds().getNorthEast());
	var BBOX = sw.x + "," + sw.y + "," + ne.x + "," + ne.y;
	//var BBOX = map.getBounds()._southWest.lng+","+map.getBounds()._southWest.lat+","+map.getBounds()._northEast.lng+","+map.getBounds()._northEast.lat;
	var WIDTH = map.getSize().x;
	var HEIGHT = map.getSize().y;
	var X = Math.trunc(map.layerPointToContainerPoint(e.layerPoint).x);
	var Y = Math.trunc(map.layerPointToContainerPoint(e.layerPoint).y);
	//var X = map.layerPointToContainerPoint(e.layerPoint).x;
	//var Y = map.layerPointToContainerPoint(e.layerPoint).y;
	console.log(X);
	console.log(Y);

	var owsrootUrl = 'https://ide.transporte.gob.ar/geoserver/wms?';

	var defaultParameters = {
        	SERVICE: 'WMS',
        	VERSION: '1.1.1',
        	REQUEST: 'GetFeatureInfo',
		LAYERS: layers,
		QUERY_LAYERS: layers,
		STYLE: '',
		BBOX: BBOX,
		FEATURE_COUNT:5,
		HEIGHT:HEIGHT,
		WIDTH: WIDTH,
		FORMAT: 'image/png',
		INFO_FORMAT: 'application/json',
		SRS: 'EPSG:3857',
		X: X,
		Y: Y
	};	

	var parameters = L.Util.extend(defaultParameters);

	var URL = owsrootUrl + L.Util.getParamString(parameters);
	console.log(URL);

        var xhr = new XMLHttpRequest();
        xhr.open('GET', URL);

        xhr.onload = function(e) {
                var data = JSON.parse(this.response);
                console.log(data);

		if (data.features.length == 0) {
			console.log('SIN feature');
		} else {
			console.log('tengo features');

			var features = data.features;
			var html;
			for (var i in features) {
				var feature = features[i];
				var properties=feature.properties;

				html+='<br/><table><caption>'+feature.id+'</caption>';
				html+='<thead><tr><th>Nombre</th><th>Datos</th></tr></thead><tbody>';

				for (var x in properties) {
                			if(x!='bbox'){
                  				html+='<tr><th>'+x+'</th><td>'+properties[x]+'</td></tr>';
                			}
              			}
              			html+='</tbody></table>';
			}

			var popup = new L.Popup({
            			maxWidth: 300,
				maxHeight: 500,
				autoPan: true
         		});
			popup.setContent(html);
			popup.setLatLng(clickedLatLng);
			map.openPopup(popup);
		}
        }
        xhr.send();
	}//cierra if countLayers
	});//cierra map on click

} //cierra function info_wms
