//ADAPTAR menu prueba_objeto_2.html
function creaDivs(){
	console.log('Hacer todo esto');
	var mapa = document.getElementById('map');

	if( !document.getElementById('floatingCapas')){
		
		var div_Capas = document.createElement('div');
                div_Capas.id = 'floatingCapas';
		mapa.appendChild(div_Capas);

		var divMostrar = document.createElement('div');
                divMostrar.id = 'floatingMostrar';
		divMostrar.addEventListener("click", mostrarDiv, false);
                mapa.appendChild(divMostrar);

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
		var tPrincipal = document.createTextNode("Argentina Contra el Hambre");


		div_Capas.appendChild(linkVisible);
		linkVisible.appendChild(img1);
		div_Capas.appendChild(salto1);
		div_Capas.appendChild(ulP);
			
		ulP.appendChild(listaPrincipal);
		listaPrincipal.appendChild(linkPrincipal);
		linkPrincipal.appendChild(tPrincipal);// IDE Transporte

		/*arraySegundoNivel = [
        	];*/

	for (var j=0; j<Object.keys(arraySegundoNivel).length; j++){

                var id = arraySegundoNivel[j].id;
                var name = arraySegundoNivel[j].name;
                var codigo = arraySegundoNivel[j].cod;
                //console.log(codigo);
                var numero = j+1;
                var li_id= "nivel2_li"+id;
                var ul = document.createElement("UL");
                ul.setAttribute("id", "nivel2_"+id);
                //console.log(ul);
                var li=document.createElement("Li");
                li.setAttribute("id", li_id);
		li.className = "menu";
                var link = document.createElement("A");
                id_link = "id_link_nivel2_"+numero;
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
        console.log("recibo codigo "+link_recibe);
        var link_n2 = document.getElementById(link_recibe);

        if(link_recibe == '1_TA'){

        array_nivel3 = [
		{"id":1, "name":"Rutas Nacionales", "cod":"TA_1_RA", "subcarpeta":"no", "work":"observ", "name_layer": layer_1101 },
		{"id":2, "name":"Rutas Provinciales", "cod":"TA_2_RP", "subcarpeta":"no", "work":"observ", "name_layer": layer_rutas_provinciales },
		{"id":3, "name":"Caminos Rurales", "cod":"TA_3_CR", "subcarpeta":"no", "work":"c_rurales_6", "name_layer": layer_caminos_rurales },
		{"id":4, "name":"Líneas de Ferrocarril", "cod":"TA_4_LF", "subcarpeta":"no", "work":"observ", "name_layer": layer_red_ferrocarril },
		{"id":5, "name":"Area Urbana", "cod":"TA_5_AU", "subcarpeta":"no", "visible":"si","layer":"c_rurales_6:idera_planta_urbana_view", "name_layer": layer_area_urbana },
                /*{"id":1, "name":"Red Vial Nacional", "cod":"RVN"},
                {"id":2, "name":"Red Vial Provincial", "cod":"RVP"},
                {"id":3, "name":"Red Vial Comunal", "cod":"RVC"}*/];

        } else if(link_recibe == '2_TF'){

        array_nivel3 = [
		{"id":1, "name":"Zonas Frutihorticolas", "cod":"AH_1_FH", "subcarpeta":"no", "work":"observ", "name_layer": layer_zonas_frutih },
		{"id":2, "name":"Comedores Comunitarios", "cod":"AH_2_CC", "subcarpeta":"no", "name_layer": comedoresVectorial },
                /*{"id":1, "name":"Red Ferroviaria Nacional", "cod":"RFN"},
                {"id":2, "name":"Red Subterraneos", "cod":"RS"},
                {"id":3, "name":"Servicio de Pasajeros", "cod":"SP"}*/
                ];

        } else if(link_recibe == '3_TFM'){

                array_nivel3 = [
                        {"id":1, "name":"Completar", "cod":"C"}
                ];

        } else if(link_recibe == '4_TAereo'){

                array_nivel3 = [
                        {"id":1, "name":"Completar", "cod":"C"}
                ];

        } else if(link_recibe == '5_EET'){

                array_nivel3 = [
                        {"id":1, "name":"Completar", "cod":"C"}
                ];

        } else if(link_recibe == '6_CC'){

                array_nivel3 = [
                        {"id":1, "name":"Completar", "cod":"C"}
                ];

        } else {

                array_nivel3 = [
                        {"id":1, "name":"Completar", "cod":"C"}
                ];

        }
        for (var i=0; i<Object.keys(array_nivel3).length; i++){

                var id = array_nivel3[i].id;
                var name = array_nivel3[i].name;
                var cod = array_nivel3[i].cod;
                var li_id ="nivel3_li_"+id+"_"+cod;
		var subC = array_nivel3[i].subcarpeta;
		var layer = array_nivel3[i].layer;
		console.log(layer);
                if (subC=='no'){
                	var name = array_nivel3[i].name;
                }
                if(subC=='si'){
                	var ul4 = document.createElement("UL");
                	ul5.setAttribute("id", "nivel4_"+id+"_"+cod);
                }

                var ul = document.createElement("UL");
                ul.setAttribute("id", "nivel3_"+id+"_"+cod);
                var li= document.createElement("Li");
                li.setAttribute("id", li_id);
                var link = document.createElement("A");

		var link_2 = document.createElement("A");
		var imagen_ver = document.createElement("I");
		imagen_ver.className = "fa fa-eye-slash = 2x Larger";
                link.href = "#";
                link.setAttribute("id", cod);
                var text = document.createTextNode(name);
		var text_2 = document.createTextNode('+');

                li_insert_in =document.getElementById(link_recibe).parentNode;
                console.log(li_insert_in);
                li_insert_in.appendChild(ul);
                ul.appendChild(li);
                //li.appendChild(link_2);
		li.appendChild(link);
                //link_2.appendChild(text_2);
		link.appendChild(text);

		if (subC=='si'){
			li_insert_in =document.getElementById(link_select_id).parentNode;
                        console.log(li_insert_in);

                        li_insert_in.appendChild(ul5);
                        ul5.appendChild(li);
                        li.appendChild(link);
                        link.appendChild(text);
			link.addEventListener("click", crearCapasNivel4, false);
		}
                if (subC=='no'){
                	ul.appendChild(li);
                        li.appendChild(link);
			//li.appendChild(imagen_ver);
			//li.appendChild(link_2);
                        link.appendChild(text);
			//link_2.appendChild(text_2);
                        link.addEventListener("click", cargarCapas1, false);
			//link.addEventListener("click", function (){cargarCapas1(name, layer)}, false);// por ahora no enviar con parametros
		}

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

                if(link_select_id == 'RVN'){
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

                }
		link_n4.removeEventListener("click", crearCapasNivel4, false);
                link_n4.addEventListener("click", cerrarMenuNivel4, false);
}

//function cargarCapas1(name, layeir){
function cargarCapas1(){
	console.log(event);
	var target = event.target
	var link_id = target.id;
	console.log(target);
	//console.log(this.name);
	//console.log(layer);
	//console.log(this.visible);

	var imagen_ver = document.createElement("I");
        imagen_ver.className = "fa fa-eye = 2x Larger";

	target.appendChild(imagen_ver);

	if (link_id == 'TA_1_RA') {
		layer_1101.addTo(map);layer_1101.bringToFront();
	} else if (link_id == 'TA_2_RP'){
		layer_rutas_provinciales.addTo(map);layer_rutas_provinciales.bringToFront();
	} else if (link_id == 'TA_3_LF'){
		layer_red_ferrocarril.addTo(map);layer_red_ferrocarril.bringToFront();
	} else if(link_id =='TA_4_CR'){
                layer_caminos_rurales.addTo(map);layer_caminos_rurales.bringToFront();
	} else if (link_id == 'AH_1_FH'){
		layer_zonas_frutih.addTo(map);layer_zonas_frutih.bringToFront();
	} else if (link_id == 'TA_5_AU'){
		layer_area_urbana.addTo(map);layer_area_urbana.bringToFront();
	} else if(link_id =='AH_2_CC'){
		loadComedores();
	}

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

function removeCapas1(){
	var target = event.target;
	
	var link_id = target.id;
	console.log(target);
	console.log('remover capa');

	var imagen_eliminar = target.childNodes[1];
	console.log(imagen_eliminar);
	
	target.removeChild(imagen_eliminar);
	console.log(target);
	
	if (link_id == 'TA_1_RA') {
		map.removeLayer(layer_1101);
	}else if (link_id == 'TA_2_RP'){
		map.removeLayer(layer_rutas_provinciales);
	} else if (link_id == 'TA_3_LF'){
		 map.removeLayer(layer_red_ferrocarril);
	} else if(link_id =='TA_4_CR'){
                map.removeLayer(layer_caminos_rurales);
	} else if (link_id == 'AH_1_FH'){
		map.removeLayer(layer_zonas_frutih);
	} else if(link_id =='AH_2_CC'){
		map.removeLayer(comedoresVectorial);
	}

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

