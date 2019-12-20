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

		var divButton_Info = document.createElement('div');
		divButton_Info.id = 'floatingInfo';
		//divButton_Info
		mapa.appendChild(divButton_Info);

		//if(buttonInfo_activo==false){
			divButton_Info.addEventListener("click", info_wms, false);
		/*} 
		else if (buttonInfo_activo==true){
			divButton_Info.removeEventListener("click", info_wms, false);
			divButton_Info.addEventListener("click", quitar_info, false);
		}*/

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
			console.log("Entro en  el IF");


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
function cargarCapas1(){
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
			if(vectorial == 'si'){
				llamar_funcion(); //<==================================agrego la capa llamando a la funcion
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

function removeCapas1(){
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

