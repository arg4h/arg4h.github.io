
wmsTopoIcgc = L.tileLayer.wms('http://ide.transporte.gob.ar/geoserver/wms?', { 
  layers: 'observ:_3.2.3.1.subte_red_usig_ont_a_view',
  crs: L.CRS.EPSG4326,
  format: 'image/png',
  transparent: true
});

/*layer_ICV = L.tileLayer('https://icv.conicet.gov.ar/tileserver-php/icv/%7Bz%7D/%7Bx%7D/%7By%7D.pbf/icv/{z}/{x}/{y}.pbf', {
	tms: true,

});
layer_ICV.addTo(map);*/

layer_1101 = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?', {
	name: "Rutas Nacionales",
        layers: 'observ:_3.4.1.1.6.rutas_nacionales_dnv18.view',
        crs: L.CRS.EPSG4326,
        format: 'image/png',
        transparent: true
});

layer_rutas_provinciales = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?', {
	name: "Rutas Provinciales",
        layers: 'observ:_3.4.1.7.red_vial_ign_ont_a_prov_view',
        crs: L.CRS.EPSG4326,
        format: 'image/png',
        transparent: true
});

layer_caminos_rurales = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?', {
        layers: 'c_rurales_6:caminos_rurales.view',
        crs: L.CRS.EPSG4326,
        format: 'image/png',
        transparent: true
});

layer_red_ferrocarril = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?', {
        layers: 'observ:_3.4.2.2.5.red_adif_20.11.2018.view',
        crs: L.CRS.EPSG4326,
        format: 'image/png',
        transparent: true
});

layer_zonas_frutih = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?', {
        layers: 'observ:zonas_horticolas_view',
        crs: L.CRS.EPSG4326,
        format: 'image/png',
        transparent: true
});

layer_area_urbana = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?' ,{
	layers: 'c_rurales_6:idera_planta_urbana_view',
	crs: L.CRS.EPSG4326,
	format: 'image/png',
	transparent: true
});

layer_centro_educ = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?' ,{
	layers: 'observ:centros_educativos_hab_view',
        crs: L.CRS.EPSG4326,
        format: 'image/png',
        transparent: true
});

layer_barrios_renabap  = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?' ,{
	layers: 'observ:barrios_renabap_view',
	crs: L.CRS.EPSG4326,
        format: 'image/png',
        transparent: true
});

layer_vulnerabilidad = L.tileLayer.wms('https://ide.transporte.gob.ar/geoserver/wms?' ,{
	name: "Vulnerabilidad",
	layers: 'observ:vulnerabilidad_3p_2016_view',
	crs: L.CRS.EPSG4326,
	format: 'image/png',
	transparent: true
});
//********************************ABRE
var ccrrVectorial;
var comedoresVectorial;
var feriasfVectorial;
var manchaVectorial;
//var layerP = L.geoJson.pouch("https://90705519-98e2-4acf-b321-1466df6704c8-bluemix.cloudant.com/ccrr").addTo(map);
//console.log(layerP);

function comedoresStyle(feature) {
  	return {
    		fillColor: "#FF00FF",
    		//fillOpacity: 1,
    		color: '#B04173',
        fillOpacity: .60
  	};
}
function loadComedores(){
	console.log('Llamando esta funcion');
	var urlComedores = 'https://raw.githubusercontent.com/arg4h/arg4h.github.io/master/datos/comedores_comunitarios.geojson';

	var xhr = new XMLHttpRequest();
	xhr.open('GET', urlComedores);

	xhr.onload = function(e) {
		var data = JSON.parse(this.response);

		var geojsonMarkerOptions = {
                	radius: 5,
                	fillColor: "#ff7800",
                	color: "#000",
                	weight: 1,
                	opacity: 1,
                	fillOpacity: 0.8
        	};

		comedoresVectorial = L.geoJson(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, geojsonMarkerOptions);
			},
			style: comedoresStyle,
			onEachFeature: onEachFeature
		});

		comedoresVectorial.addTo(map);
		comedoresVectorial.bringToFront();

		for (var i=0; i<Object.keys(array_nivel3).length; i++){
			console.log(array_nivel3[i]);
			var nombre = array_nivel3[i].name;

			if (nombre == 'Comedores Comunitarios'){
				array_nivel3[i].nombre_layer = comedoresVectorial;
				console.log(array_nivel3[i]);
			}
		}
	}

	xhr.send();
	//return comedoresVectorial;
} //cierra loadComedores

function loadFeriasF(){
	var urlFeriasF = 'https://raw.githubusercontent.com/arg4h/arg4h.github.io/master/datos/feriasfrancas.geojson';

        var xhr = new XMLHttpRequest();
        xhr.open('GET', urlFeriasF);

        xhr.onload = function(e) {
                var data = JSON.parse(this.response);

                var geojsonMarkerOptions = {
                        radius: 5,
                        fillColor: "#ff7800",
                        color: "#000",
                        weight: 1,
                        opacity: 1,
                        fillOpacity: 0.8
                };

		feriasfVectorial = L.geoJson(data, {
                	pointToLayer: function (feature, latlng) {
                        	return L.circleMarker(latlng, geojsonMarkerOptions);
                	}
        	}).addTo(map);

                feriasfVectorial.addTo(map);
                feriasfVectorial.bringToFront();

                for (var i=0; i<Object.keys(array_nivel3).length; i++){
                        var nombre = array_nivel3[i].name;

                        if (nombre == 'Ferias Francas'){
                                array_nivel3[i].nombre_layer = feriasfVectorial;
                        }
                }
        }

        xhr.send();
} //cierra loadFeriasF


//129 - Pte Peron
function load129(cod){
  if (cod == 'MU_2_MU'){
	  var urlMancha = 'https://raw.githubusercontent.com/javiarch/manchaurbana_2020/main/129_ManchaUrbana_2020.geojson';
  }  
	var xhr = new XMLHttpRequest();
	xhr.open('GET', urlMancha);

	xhr.onload = function(e) {
		var data = JSON.parse(this.response);

		var geojsonMarkerOptions = {
                	radius: 5,
                	fillColor: "#ff7800",
                	color: "#000",
                	weight: 1,
                	opacity: 1,
                	fillOpacity: 0.8
        	};

		manchaVectorial = L.geoJson(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, geojsonMarkerOptions);
			},
			style: comedoresStyle,
			onEachFeature: onEachFeature
		});

		manchaVectorial.addTo(map);
		manchaVectorial.bringToFront();

		for (var i=0; i<Object.keys(array_nivel3).length; i++){
			console.log(array_nivel3[i]);
			var nombre = array_nivel3[i].name;

			if (nombre == 'Mancha urbana nov 2020'){
				array_nivel3[i].nombre_layer = manchaVectorial;
				console.log(array_nivel3[i]);
			}
		}
	}

	xhr.send();
	//return mancha129;
} //cierra loadMancha129

function loadGeojson(){
	var urlCity = 'https://raw.githubusercontent.com/geo4aguilares/Repositorio/master/ingenios.geojson';

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

xhr.send();
//}


var owsrootUrl = 'https://ide.transporte.gob.ar/geoserver/c_rurales_6/ows';
 
var defaultParameters = {
	service: 'WFS',
	version: '1.0.0',
        request: 'GetFeature',
	maxFeatures: 200,
	typeName: 'c_rurales_6:caminos_rurales.view',
	outputFormat: 'application/json',
};

var customParams = {
            bbox: map.getBounds().toBBoxString()
        };
var parameters = L.Util.extend(defaultParameters, customParams);

//var drawnItems = new L.FeatureGroup(); 
var URL = owsrootUrl + L.Util.getParamString(parameters);
//var URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
console.log(URL);

var xhrC = new XMLHttpRequest();

xhrC.onreadystatechange = function(){
		if (xhrC.readyState==4 && xhrC.status==200)
	{
	var data = JSON.parse(xhrC.responseText);
	//document.getElementById("FirstName").innerHTML = JSONObject.language;
	//document.getElementById("LastName").innerHTML = JSONObject.isbn;
	console.log(data);
	}

	var geojsonCcrrOptions = {
                fillColor: "#ff7800",
                color: "green",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
        };
	var selected;

	ccrrVectorial = L.geoJson(data, 
				{style: geojsonCcrrOptions,
				onEachFeature: onEachFeature}//ver en NUEVAS
	);

	/*ccrrVectorial.eachLayer(
    		function(l){
		//console.log(l);
        	drawnItems.addLayer(l);
	});*/

	/*ccrrVectorial.bindPopup(function (layer) {
		console.log(layer);
          	var nomenclador = 'Nomenclador: ' + layer.feature.properties.nomenclador;
          	var id = 'Id: ' + layer.feature.properties.id;
         	 return '<div>' + nomenclador + '<br>' + id + '</div>';
        });*/
	ccrrVectorial.addTo(map);
	console.log(ccrrVectorial);


	//ccrrVectorial.editing.enable();

	ccrrVectorial.on('edit', function() {
                        console.log('Polyline was edited!');
                });
	console.log('Mostrar si es false');
	console.log(drawControl_Existe);
	if(drawControl_Existe == true){

		var featureGroup = L.featureGroup().addTo(map);//L.featureGroup([ccrrVectorial]).addTo(map);
		//console.log(featureGroup);

		//*****************************************************
		//-----Funciona para agregar la barra de dibujo. Despues de dibujar, edita TODOS los features----------
		/*var drawnItems = new L.FeatureGroup();
        	map.addLayer(drawnItems);

        	var drawControl = new L.Control.Draw({
            		edit: {
                		featureGroup: drawnItems
            		}
        	});
        	map.addControl(drawControl);

        	map.on('draw:created', function (e) {
            		var type = e.layerType,
                	layer = e.layer;
            		drawnItems.addLayer(layer);
        	});*/
		//-----------------------

		/*var drawControl = new L.Control.Draw({
			position: 'topright',
			draw: true,
        		edit: {
                		featureGroup: featureGroup,
				//edit: false
        		}
		}).addTo(map);*/

		/*new L.EditToolbar.Edit(map, {
                        featureGroup: drawControl.options.featureGroup,
                        selectedPathOptions: drawControl.options.edit.selectedPathOptions
                });*/

		/*featureGroup.addLayer(ccrrVectorial);

		map.on('draw:edited', function(e) {

            // Each time a feaute is created, it's added to the over arching feature group
                         featureGroup.addLayer(e.layer);
			let layers = e.layers;
  			layers.eachLayer(function(layer) {
    			console.log(layer);
  			});
                });*/

		//_______________________________________________________

		//ccrrVectorial.editing.enable();
		//+++++++++++++++++++++++++++++++++++++++++
		/*
		map.pm.addControls({
  			position: 'topright',
  			drawCircle: false,
		});

		map.on('pm:drawstart', function(e){ 
  			//workingLayer.on('pm:vertexadded', e => {
    			console.log(e);
			let layer = e.workingLayer;
			console.log(layer);
  			//});
		});
		*/
 		//*******************************************	
		
		/*drawControl_Existe = true;

		var selectedFeature = null;
		function onEachFeature(feature, layer) {
			featureGroup.addLayer(layer);
        		layer.on("click", function(e){
        			if(selectedFeature)
        				layer.editing.disable();
        				selectedFeature = e.target;
					console.log(selectFeature);
        				e.target.editing.enable();
			});
		}*/

		/*ccrrVectorial.on('click', function(event){
  			editableLayers.eachLayer(function(layer) {
    			layer.editing.disable()
  		})
  		event.target.editing.enable();
		});*/	


	}
        /*L.geoJson(data, {
                pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, geojsonMarkerOptions);
                }
        }).addTo(map);*/
};
xhrC.open('GET', URL);

/*xhr.onload = function(e) {
        var data = this.reponse;//JSON.parse(this.response);
        console.log(data);
}*/

xhrC.send();
}

//========================================================
    function peticionAjax(url) {
      return new Promise(
        function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open("get", url);
          xhr.onload = function () {
            if (xhr.status === 200) {
              resolve(xhr.response);
            } else {
              reject(Error(xhr.statusText));
            }
          };
          xhr.onerror = function () {
            reject(Error('Error de red'));
          };;
          xhr.send();
        }
      );
    }
/* POR ahora quitar llamada directa desde Github 20-12-2019
var urlTerremotos = "https://raw.githubusercontent.com/arg4h/arg4h.github.io/master/datos/barrios_populares.geojson";

peticionAjax(urlTerremotos)
	.then(function(respuesta) {
		var datos = JSON.parse(respuesta);
		console.log(datos);
		var capaVectorial = L.geoJSON(datos, {
			pointToLayer: function(entidad, latlng) {
				return L.circleMarker(latlng);
			}
		});

		capaVectorial.bindPopup(function(layer) {
			console.log(layer.feature);

			return "<div style='max-width:300px;'><h4><small>ID: " + layer.feature.properties.id_renabap + "</small></h4><h4>" + layer.feature.properties.nombre_bar + "</h4><p>" + layer.feature.properties.departamen + ", " + layer.feature.properties.localidad + ", " + layer.feature.properties.provincia + ".</p></div>";
		});

		capaVectorial.addTo(map);
	})
	.catch(function(respuesta) {
		alert("No carga");
	});
*/

///*******************Nueva function
//function startEditing(layer) {
var selectedFeature = null;
function startEditing(e) {
	console.log("Iniciar edicion del feature seleccionado");
	console.log(e);
	//console.log(e.target);
	selectedFeature = e.target;
        console.log(selectedFeature);

	var feature = selectedFeature.feature;
	console.log(feature);

	console.log("Doc");
	 console.log( selectedFeature);
	console.log("Feature" + feature);
	console.log(feature);

	/*drawnItems.addLayer(selectedFeature);//1ero seleccionar y al usar la herramienta lo muestra editable
	console.log(drawnItems);*/

	const editBtn = document.querySelector('.leaflet-draw-edit-edit');
	console.log(editBtn);
	if(editBtn instanceof HTMLElement){
  	try{
    		editBtn.click( function() { console.log("Salvar Cambios"); });//save any pending edits
		/*var todo = selectedFeature;
		todo._id = feature._id;
		todo.feature = feature;
		db.put(todo);*/
  	}
  	catch(e){
    		console.log(e);
 	}
	}
}


//var selectedFeature = null;

function onEachFeature(feature, layer) {
	//console.log(feature);
	//console.log(layer);
	//drawnItems.addLayer(layer);
      layer.on({//{
          //mousemove: mousemove,
          //mouseout: mouseout,
          /*'mouseover': function (e) {
 	      highlight(e.target);
  	},
  	    'mouseout': function (e) {
  	      dehighlight(e.target);
  	},*/
          //click: zoomToFeature
          click: startEditing,
          /*'click', function (e) {
		console.log(e);
		//var layer = e.layer;
		//console.log(layer);
		startEditing(e);
		}*/
	});
	/*featureGroup.addLayer(layer);
	layer.on("click", function(e){
	if(selectedFeature)
	selectedFeature.editing.disable();
	selectedFeature = e.target;
	e.target.editing.enable();
	});*/
      //});
 }

function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
	console.log(e.target);
	selected = e.target;
	if (selected) {
        // Reset selected to default style
        	e.target.resetStyle(selected)
        }
	selected.setStyle({
        	'color': 'yellow'
      	})

	
	//ccrrVectorial.editing.enable(); // <==========NOO
  }

function highlight (layer) {
	layer.setStyle({
	weight: 5,
	dashArray: ''
	});
	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}
}

function dehighlight (layer) {
	if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
		geojson.resetStyle(layer);
	}
}

function select (layer) {
		  if (selected !== null) {
		    var previous = selected;
		  }
			map.fitBounds(layer.getBounds());
			selected = layer;
			if (previous) {
			  dehighlight(previous);
			}
		}

