//ADAPTAR menu prueba_objeto_2.html
function creaDivs(){
	console.log('Hacer todo esto');
	var mapa = document.getElementById('map');

	if( !document.getElementById('floatingCapas')){
		
		var div_Capas = document.createElement('div');// div para el arbol de capas
                div_Capas.id = 'floatingCapas';
		mapa.appendChild(div_Capas);

		var divMostrar = document.createElement('div'); // *********div que abre el panel de capas
                divMostrar.id = 'floatingMostrar';
		divMostrar.title = 'Mostrar Árbol de Capas';
		divMostrar.addEventListener("click", mostrarDiv, false);
                mapa.appendChild(divMostrar);
		document.getElementById('floatingMostrar').innerHTML = '<i class="fa fa-bars" style="color: white; font-size:15px"></i>'
		

		var div_temas = document.createElement('div');// *********div que abre el panel para select Tema
		div_temas.id = 'floatingTemas';
		div_temas.title = 'Activar Temas';
		div_temas.addEventListener("click", barratemas, false);
		mapa.appendChild(div_temas);
		document.getElementById('floatingTemas').innerHTML = '<i class="fa fa-search" style="color: white; font-size:15px"></i>';// fa-2x = 2x Larger

		//var img_capas_ver = document.createElement("I");// imagen para botón capas
		//img_capas_ver.setAttribute("id", "id_img_ver");
		//img_capas_ver.className = "fa fa-bars";//fa-2x = 2x Larger
    
    var divButton_Filter = document.createElement('div');// *******div para filtrar por datos
		divButton_Filter.id = 'buttonFilter';
		divButton_Filter.title = 'Filter';
		mapa.appendChild(divButton_Filter);
		document.getElementById('buttonFilter').innerHTML = '<i class="fa fa-filter" style="color: white; font-size:12px"></i>';

		//divButton_Filter.addEventListener("click", divFilter, false);

		var divButton_Info = document.createElement('div');// *******div para consultar info de capas
		divButton_Info.id = 'floatingInfo';
		divButton_Info.title = 'Activar Info';
		mapa.appendChild(divButton_Info);
		document.getElementById('floatingInfo').innerHTML = '<i class="fa fa-info" style="color: white; font-size:15px"></i>';

		//var img_info = document.createElement("I");// imagen para botón consultar info
		//img_info.setAttribute("id", "id_img_info");
		//img_info.className = "fa fa-info";//fa-2x = 2x Larger

		divButton_Info.addEventListener("click", info_wms, false);

		var linkVisible = document.createElement("A");
		linkVisible.href = "#";
		linkVisible.className = "toggleSettings";
		linkVisible.setAttribute("id", "id_linkVisible");
		linkVisible.addEventListener("click", ocultarDiv, false);

		var img1 = document.createElement("I");
		img1.setAttribute("id", "id_img1");
		img1.className = "fa fa-chevron-left fa-2x = 2x Larger";
	
		var salto1 = document.createElement("br");
		
		var ulP = document.createElement("UL");//<===cambios para adaptar segun prueba_objeto
       		ulP.setAttribute("id", "id_nivel1");
		//ulP.className = "menu";

		var listaPrincipal = document.createElement("LI");
		listaPrincipal.setAttribute("id", "id_li_1");
		//lista1.className = "nivel1";
		var linkPrincipal = document.createElement("A");
                linkPrincipal.href = "#";
		//linkPrincipal.onclick= function(){cargarCarpetasNivel2()};
		linkPrincipal.title= "Primer Item";
		var tPrincipal = document.createTextNode("Prototipo v 0.1");

		div_Capas.appendChild(linkVisible);
		linkVisible.appendChild(img1);
		//divMostrar.appendChild(img_capas_ver);
		//divButton_Info.appendChild(img_info);
		div_Capas.appendChild(salto1);
		div_Capas.appendChild(ulP);
			
		ulP.appendChild(listaPrincipal);
		listaPrincipal.appendChild(linkPrincipal);
		linkPrincipal.appendChild(tPrincipal);// IDE Transporte


	for (var j=0; j<Object.keys(arraySegundoNivel).length; j++){

                var id = arraySegundoNivel[j].id;
                var name = arraySegundoNivel[j].name;
                var codigo = arraySegundoNivel[j].cod;
                //console.log(codigo);
                var numero = j+1;
                var li_id= "n2_li"+id;
                var ul = document.createElement("UL");
                ul.setAttribute("id", "n2_"+id);
                //console.log(ul);
                var li=document.createElement("Li");
                li.setAttribute("id", li_id);
li.className = "menu";
                var link = document.createElement("A");
                id_link = "id_link_n2_"+numero;
                link.setAttribute("id", codigo);

                link.href = "#";
                //console.log(link);
                var text = document.createTextNode(name);

                ulP.appendChild(ul);
                ul.appendChild(li);
                li.appendChild(link);
                link.appendChild(text);

                link.addEventListener("click", crearSubCarpetas, false); //function() {crearSubCarpetas(this.id), false}
                //li.addEventListener("click", alerta, false);
        }// cierra FOR arraySegundoNivel

	}
//}

function alerta(){
                var li = this;
                console.log(li.id);
                var li_id = li.id;

                var link_hijo = document.getElementById(li_id).firstChild;//firstChild;
                console.log(link_hijo);

                var link_hijo_id = link_hijo.id;

                var link = document.getElementById(link_hijo_id);

                console.log(link);
}

function cerrarMenu(){
	console.log('tiene que eliminar los items');
        var link = this;
        console.log(link);
        var link_id = link.id;
        console.log(link_id);

        var li_superior = document.getElementById(link_id).parentNode;
        console.log(li_superior);
        var li_superior_id = li_superior.id;

        var nodos_hijos = li_superior.childNodes;
        console.log(nodos_hijos);

        var lis_longitud = document.getElementById(li_superior_id).childElementCount;
        console.log(lis_longitud);

        var cantidad = lis_longitud - 1;// En la cantidad esta incluido el enlace por eso es -1

        for (var i=cantidad ; i>0; i--){
        	li_superior.removeChild(nodos_hijos[i]);
                console.log('eliminado '+i);
                link.removeEventListener("click", cerrarMenu, false); //<=========REMUEVE esto
                //li_superior.removeEventListener("click", alerta, false);
                link.addEventListener("click", crearSubCarpetas, false); // <===== AGREGO esto
                //li.addEventListener("click", alerta, false);
	}
        console.log('Se cambió el comportamiento');
}

function cerrarMenuNivel4(){
                console.log('tiene que eliminar los items Nivel4');
                var link = this;
                console.log(link);
                var link_id = link.id;
                console.log(link_id);

                var li_superior = document.getElementById(link_id).parentNode;
                console.log(li_superior);
                var li_superior_id = li_superior.id;

                var nodos_hijos = li_superior.childNodes;
                console.log(nodos_hijos);

                var lis_longitud = document.getElementById(li_superior_id).childElementCount;
                console.log(lis_longitud);

                var cantidad = lis_longitud - 1;

                for (var i=cantidad ; i>0; i--){
                        li_superior.removeChild(nodos_hijos[i]);
                        console.log('Nivel4 eliminado '+i);
                        link.removeEventListener("click", cerrarMenu, false); //<=========REMUEVE esto
                        link.addEventListener("click", crearCapasNivel4, false); // <===== AGREGO esto
                }
        }

function crearSubCarpetas(){////////////////////////////**************************************************
        var link_recibe = this.id;
        console.log("recibo codigo nivel 2"+link_recibe);
        var link_n2 = document.getElementById(link_recibe);

	for (var i=0; i<Object.keys(array_nivel3).length; i++){
		var id_nivel2 = array_nivel3[i].id_n2;
		var cod = array_nivel3[i].cod;
		var visible = array_nivel3[i].visible;

		if(visible == 'si'){
			console.log(cod);
		}

		if (link_recibe == id_nivel2){//Abro IF

                var id = array_nivel3[i].id;
                var name = array_nivel3[i].name;
                var cod = array_nivel3[i].cod;
                var li_id = id+"_"+cod;
		var subC = array_nivel3[i].subcarpeta;
		var layer = array_nivel3[i].nombre_layer;
		console.log(layer);
                if (subC=='no'){
                	var name = array_nivel3[i].name;
                }
                if(subC=='si'){
                	var ul4 = document.createElement("UL");
                	ul4.setAttribute("id", "nivel4_"+id+"_"+cod);
                }

                var ul = document.createElement("UL");
                ul.setAttribute("id", "nivel3_"+id+"_"+cod);
                var li= document.createElement("Li");
                li.setAttribute("id", li_id);
		li.className = "menu";
                var link = document.createElement("A");

		var link_2 = document.createElement("A");
                link.href = "#";
                link.setAttribute("id", cod);
                var text = document.createTextNode(name);
		var text_2 = document.createTextNode('+');

                li_insert_in =document.getElementById(link_recibe).parentNode;

                li_insert_in.appendChild(ul);
                ul.appendChild(li);
		li.appendChild(link);
		link.appendChild(text);

		if (subC=='si'){
			li_insert_in =document.getElementById(link_recibe).parentNode;
                        console.log(li_insert_in);
			console.log('El nuevo li_insert_in');

                        li_insert_in.appendChild(ul4);
                        ul4.appendChild(li);
                        li.appendChild(link);
                        link.appendChild(text);
			link.addEventListener("click", crearCapasNivel4, false);
		}
                if (subC=='no'){
                	ul.appendChild(li);
                        li.appendChild(link);
			
			if(visible == 'si'){
                        	console.log(cod);
				var imagen_ver = document.createElement("I");
				imagen_ver.className = "fa fa-eye = 2x Larger";
				li.appendChild(imagen_ver);
				//li.appendChild(link_2);
			}
                        link.appendChild(text);
			//link_2.appendChild(text_2);
                        link.addEventListener("click", cargarCapas1, false);
			//link.addEventListener("click", function (){cargarCapas1(name, layer)}, false);// por ahora no enviar con parametros
		}

		} //cierra el if (link_recibe == id_nivel2) **************************************
                //link.addEventListener("click", crearCapasNivel4, false);//crearCapasNivel4//function() {crearCapasNivel4(this.id)}
        }//cierra el for
        link_n2.removeEventListener("click", crearSubCarpetas, false);

        link_n2.addEventListener("click", cerrarMenu, false);
}

function mostrarDiv(){
	document.getElementById('floatingMostrar').style.display = 'none';
	document.getElementById('floatingCapas').style.display = 'block';
}
function ocultarDiv(){
	var div = document.getElementById('floatingCapas');
	div.style.display = 'none';
	document.getElementById('floatingMostrar').style.display = 'block';
}

function crearCapasNivel4(){
		console.log(this);
                var link_select_id = this.id;
                console.log('Link seleccionado');
                console.log(link_select_id);
                var link_n4 = document.getElementById(link_select_id);

                if(link_select_id == 'TFM_1_A'){
                        array_nivel4 = [
                                {"id":1, "name":"Rutas Nacionales", "cod":"TA_1_RA", "subcarpeta":"no", "name_layer": layer_1101 },
                                {"id":2, "name":"Peajes en RN", "cod":"TA_1_PRN", "subcarpeta":"no"},
                                {"id":3, "name":"Pavimento", "cod":"TA_1_Pav", "subcarpeta":"no"},
                                {"id":4, "name":"Postes kilométricos", "cod":"TA_1_PK", "subcarpeta":"no"},
                                {"id":5, "name":"Cruces Ferroviarios", "cod":"TA_1_CF", "subcarpeta":"si"},
                                {"id":6, "name":"Puentes", "cod":"TA_1_Ptes", "subcarpeta":"no"},
                                {"id":7, "name":"Túneles", "cod":"TA_1_T", "subcarpeta":"no"}
                        ];
                } else if (link_select_id == 'RVP'){
                        array_nivel4 = [
                                {"id":1, "name":"Rutas Provinciales", "cod":"TA_2_RP", "subcarpeta":"no"},
                        ];
                } else if (link_select_id == 'RVC'){
                        array_nivel4 = [
                                {"id":1, "name":"Caminos Rurales-2019", "cod":"TA_3_CR", "subcarpeta":"no"},
                                {"id":2, "name":"Caminos Terciarios", "cod":"TA_3_CT", "subcarpeta":"no"},
                        ];
                }

                li_insert_in =document.getElementById(link_select_id).parentNode;
                console.log(li_insert_in);
                var ul = document.createElement("UL");
                ul.setAttribute("id", "nivel4_"+link_select_id);
                li_insert_in.appendChild(ul);

                for (var i=0; i<Object.keys(array_nivel4).length; i++){

                	var id = array_nivel4[i].id;
                	var name = array_nivel4[i].name;
                	var cod = array_nivel4[i].cod;
                	var subC = array_nivel4[i].subcarpeta;
			if (subC=='no'){
			var name_layer = array_nivel4[i].name_layer;
			}
                	if(subC=='si'){
                        	var ul5 = document.createElement("UL");
                        	ul5.setAttribute("id", "nivel5_"+id+"_"+cod);
                	}
                	var li= document.createElement("Li");
                	var li_id ="nivel5_li_"+id+"_"+cod;
                	li.setAttribute("id", li_id);
			li.className = "menu";
                	var link = document.createElement("A");
                	link.setAttribute("id", cod);

                	link.href = "#";
                	var text = document.createTextNode(name);

                	if (subC=='si'){
                        	li_insert_in =document.getElementById(link_select_id).parentNode;
                        	console.log(li_insert_in);
			
                        	li_insert_in.appendChild(ul5);
				ul5.appendChild(li);
				li.appendChild(link);
				link.appendChild(text);
                	}
			if (subC=='no'){
                		ul.appendChild(li);
                		li.appendChild(link);
                		link.appendChild(text);
				link.addEventListener("click", cargarCapas1, false);
			}
                	//link.addEventListener("click", crearCapasNivel4, false);

                }//cierra FOR
		link_n4.removeEventListener("click", crearCapasNivel4, false);
                link_n4.addEventListener("click", cerrarMenuNivel4, false);
}

//function cargarCapas1(name, layeir){
cargarCapas1 = function cargarCapas1(){
	console.log(event);
	var target = event.target
	var link_id = target.id;
	console.log(target);

	for (var i=0; i<Object.keys(array_nivel3).length; i++){
		var id_nivel3 = array_nivel3[i].cod;
		var nombre_layer = array_nivel3[i].nombre_layer;
		load_layer = array_nivel3[i].load;

		if (link_id == id_nivel3){

			var li_padre = document.getElementById(link_id).parentNode;

			var vectorial = array_nivel3[i].vectorial;
			var llamar_funcion = array_nivel3[i].load;
      var url = array_nivel3[i].url;
      
      //modificado
			if(vectorial == 'si'){
        
        var xhr = new XMLHttpRequest();
	xhr.open('GET', url);

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

		nombre_layer = L.geoJson(data, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, geojsonMarkerOptions);
			},
			style: comedoresStyle,
			onEachFeature: onEachFeature
		});

		nombre_layer.addTo(map);
		nombre_layer.bringToFront();

		for (var i=0; i<Object.keys(array_nivel3).length; i++){
			console.log(array_nivel3[i]);
			var nombre = array_nivel3[i].name;

			if (nombre == 'San Vicente 2020'){
				array_nivel3[i].nombre_layer = nombre_layer;
				console.log(array_nivel3[i]);
			} else if (nombre == 'Pte Peron 2020'){
        array_nivel3[i].nombre_layer = nombre_layer;
				       
      } else if (nombre == 'Mancha Urbana 2020'){
        array_nivel3[i].nombre_layer = nombre_layer;
        
      }
		}
	}

	xhr.send();
        
				//llamar_funcion(); //<==================================agrego la capa llamando a la funcion
        
        
			} else {
				load_layer.addTo(map); load_layer.bringToFront(); //<==================================agrego la capa
			}
			var visible = array_nivel3[i].visible;

			if (visible == 'si'){
				/*if( countLayers == 1){
				removeCapas1();
				countLayers = 0;
				}*/
				//array_nivel3[i].visible = 'no';
				//console.log(array_nivel3[i]);
			} else {
				var imagen_ver = document.createElement("I");
				imagen_ver.className = "fa fa-eye = 2x Larger";
				li_padre.appendChild(imagen_ver);
				array_nivel3[i].visible = 'si';
			}
		}
	} //cierra FOR 

	//****Probar eliminar el link y agregar nuevamente. Por ahora NO, ver como pasar los parametros que corresponden
	/*link_padre =document.getElementById(link_id).parentNode;// obtener la lista dosnde se debe agregar el link
	
	link_padre.removeChild(target);
        var nuevo_link = document.createElement("A");
	nuevo_link.href = "#";
	nuevo_link.setAttribute("id", "agregar1");
	var text = document.createTextNode(name);
	
	link_padre.appendChild(nuevo_link);
	nuevo_link.appendChild(text);*/

	target.removeEventListener("click", cargarCapas1, false);target.addEventListener("click", removeCapas1, false);
}

removeCapas1 = function removeCapas1(){
	var target = event.target;
	var link_id = target.id;

	var li_padre = document.getElementById(link_id).parentNode;

	var imagen_eliminar = li_padre.childNodes[1];
	
	li_padre.removeChild(imagen_eliminar);
	
	for (var i=0; i<Object.keys(array_nivel3).length; i++){
                var id_nivel3 = array_nivel3[i].cod;
		console.log(id_nivel3);
                var nombre_layer = array_nivel3[i].nombre_layer;
		console.log(nombre_layer);
                remove_layer = array_nivel3[i].load;

                if (link_id == id_nivel3){
			console.log(array_nivel3[i]);
			//var name_layer = array_nivel3[i].nombre_layer;
			var vectorial = array_nivel3[i].vectorial;

			if (vectorial == 'si'){
				console.log(nombre_layer);
				map.removeLayer(nombre_layer);
			} else {
                        	map.removeLayer(remove_layer);
			}

			var visible = array_nivel3[i].visible;

			if (visible == 'si'){
				array_nivel3[i].visible = 'no';			
			}
                }
        } //cierra FOR

	//target.removeEventListener("click", removeCapas1, false);target.addEventListener("click", function() {cargarCapas1(layer)}, false);
	target.removeEventListener("click", removeCapas1, false);target.addEventListener("click", cargarCapas1, false);
}
/*function loadCapas(id){
	//
	var id = id;
	if(id == 'TA_1_RA'){ layer_1101.addTo(map); 
	console.log(layer_1101)}

}*/
}//CIERRA creardiv

function barratemas(){
	console.log('mostrar select temas');
	var mapa = document.getElementById('map');

	if(!document.getElementById('selectTemas')){
		document.getElementById('floatingTemas').setAttribute('style', 'background-color:rgba(245,245,245,0.6);');
		var div_tema = document.createElement('div');
		div_tema.id = "selectTemas";
		mapa.appendChild(div_tema);

		var x = document.createElement("select");
                x.setAttribute("id", "idselecttema");
                x.setAttribute('onchange', 'queryTema()');
		div_tema.appendChild(x);

                for (var i=0; i<Object.keys(array_temas).length; i++){

                        var id = array_temas[i].id;
                        var value = array_temas[i].value;
                        var texto = array_temas[i].texto;

                        var z = document.createElement("option");
                        z.setAttribute("value", value);
                        var t = document.createTextNode(texto);
                        z.appendChild(t);

                        x.appendChild(z);
                }
        } else {// si ya existe la barra la remuevo
                var barra= document.getElementById('selectTemas');
                mapa.removeChild(barra);
                //layerCaminos_wms.params["cql_filter"] ="include; i_jerarquia like '%'";
                //layerCaminos_wms.params["styles"] = "";
                //layerCaminos_wms.redraw(true);
                document.getElementById('floatingTemas').setAttribute('style', 'background-color:rgba(0,45,68,0.6);');
        }
}

//abre filter por partido*****
function divFilter(){
	console.log('Ejecutar filter');
	var mapa = document.getElementById('map');
	if(!document.getElementById('selectFilter')){
		document.getElementById('buttonFilter').setAttribute('style', 'background-color:rgba(245,245,245,0.6);');
                var div_filter = document.createElement('div');
                div_filter.id = "selectFilter";
                mapa.appendChild(div_filter);

		var label = document.createElement("LABEL");
		var text = document.createTextNode("Filtrar por Partido");
		label.appendChild(text);

		var select = document.createElement("select");
                select.setAttribute("id", "idSelectFilter");
                //select.setAttribute('onchange', 'queryFilter()');
		select.addEventListener("change", queryFilter);

		div_filter.appendChild(label);
		div_filter.appendChild(select);

		var opt = document.createElement('OPTION');
		opt.setAttribute("value", "Seleccionar");
		var textOp = document.createTextNode("Seleccionar...");
		opt.appendChild(textOp);
		select.appendChild(opt);

		for (var j=0; j<Object.keys(arraySelectR).length; j++){//recorrer el array para cargar los valores en el select Categoria

                	var id = arraySelectR[j].id;
                	var text = arraySelectR[j].textR;
                	var value = arraySelectR[j].value;

                	var z = document.createElement("OPTION");
                	z.setAttribute("value", value);
                	var t = document.createTextNode(text);
                	z.appendChild(t);

                	select.appendChild(z);
        	}
		var optT = document.createElement('OPTION');
                optT.setAttribute("value", "Mancha urbana");
                var textOpT = document.createTextNode("Mancha urbana");
                optT.appendChild(textOpT);
                select.appendChild(optT);
		
				
	} else {
		document.getElementById('buttonFilter').setAttribute('style', 'background-color:rgba(0,45,68,0.6);');
		var barra= document.getElementById('selectFilter');
                mapa.removeChild(barra);
		crimeslayer.clearLayers();
		showTodos();
	}
}
//cierra filter por partido***

function queryTema(){// llamar con onchange en el select
        console.log('tiene que cargar tema por el valor seleccionado');
	var x = document.getElementById("idselecttema").value;
        console.log(x);
	llamarTema(x);
}
function llamarTema(x){ //llamar desde queryTema, pasar el valor seleccionado en select
	nombre = x;

        for (var i=0; i<temas.length; i++){// recorrer array 'temas' en json.js
                var id_tema = temas[i].id;
                var valor = temas[i].value;
		var center = temas[i].center;
		var zoom = temas[i].zoom;
		
		if (nombre == valor){
			map.setView(center, zoom);
			var layers = temas[i].layers
			console.log('Mostrar el array de capas en temas');
			console.log(layers);
			
			for (var j=0; j<temas[i].layers.length; j++){
				console.log(temas[i].layers[j]);
				var layerOn = temas[i].layers[j];
				console.log(layerOn.wmsParams.name);

				//SI LA capa YA ESTá prendida, no volver a cargar******************************
				for (var q=0; q<Object.keys(array_nivel3).length; q++){
					name_a3= array_nivel3[q].name;
					visible_a3 = array_nivel3[q].visible;
					var cod_a3 = array_nivel3[q].cod;
					var id_a3 = array_nivel3[q].id;
                			var li_id = id_a3+"_"+cod_a3;
					console.log(li_id);

					if(layerOn.wmsParams.name == name_a3){
						if(visible_a3 == 'si'){
							console.log('NO HACER NADA');
						} else {
							layerOn.addTo(map);
							layerOn.bringToFront(map);
							array_nivel3[q].visible = 'si';
							var li = document.getElementById(li_id);
							var imagen_ver = document.createElement("I");
                                			imagen_ver.className = "fa fa-eye = 2x Larger";
                                			li.appendChild(imagen_ver);
							li.childNodes[0].removeEventListener("click", cargarCapas1, false);
							li.childNodes[0].addEventListener("click", removeCapas1, false);
						}
					}
				}
				//****************************************************************************

			}//cierra FOR interno
		}
	}// cierra FOR
}






