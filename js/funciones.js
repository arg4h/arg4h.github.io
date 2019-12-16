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
                li.addEventListener("click", alerta, false);
        }

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

                /*var ul_eliminar =document.getElementById(li_superior_id).getElementsByTagName("ul");
 *  *                 console.log(ul_eliminar);
 *   *                                 console.log(ul_eliminar.length);*/

                var nodos_hijos = li_superior.childNodes;
                console.log(nodos_hijos);

                /*console.log(li_superior.removeChild(li_superior.childNodes[2]));
 *  *                 console.log(li_superior.removeChild(li_superior.childNodes[1]));*/

                var lis_longitud = document.getElementById(li_superior_id).childElementCount;
                console.log(lis_longitud);

                var cantidad = lis_longitud - 1;// En la cantidad esta incluido el enlace por eso es -1

                for (var i=cantidad ; i>0; i--){
                        li_superior.removeChild(nodos_hijos[i]);
                        console.log('eliminado '+i);
                        link.removeEventListener("click", cerrarMenu, false); //<=========REMUEVE esto
                        li_superior.removeEventListener("click", alerta, false);
                        link.addEventListener("click", crearSubCarpetas, false); // <===== AGREGO esto
                        li.addEventListener("click", alerta, false);
                }

                /********************************************
 *  *                 var longitud = ul_eliminar.length;// Si tiene 2 ul (submenu) elimina el primero
 *   *                                 for (var i=0; i < longitud; i++){
 *    *                                                         li_superior.removeChild(ul_eliminar[i]);
 *     *                                                                                 console.log('eliminado '+i);
 *      *                                                                                                 }
 *       *                                                                                                                 *************************************************/
                console.log('Se cambió el comportamiento');
                /*link.removeEventListener("click", cerrarMenu, false);
 *  *                 li_superior.removeEventListener("click", alerta, false);
 *   *                                 link.addEventListener("click", crearSubCarpetas, false);
 *    *                                                 li_superior.addEventListener("click", alerta, false);*/
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
		{"id":1, "name":"Rutas Nacionales", "cod":"TA_1_RA", "subcarpeta":"no", "name_layer": layer_1101 },
		{"id":2, "name":"Rutas Provinciales", "cod":"TA_2_RP", "subcarpeta":"no", "name_layer": layer_rutas_provinciales },
		{"id":3, "name":"Caminos Rurales", "cod":"TA_4_CR", "subcarpeta":"no", "name_layer": layer_caminos_rurales },
		{"id":4, "name":"Líneas de Ferrocarril", "cod":"TA_3_LF", "subcarpeta":"no", "name_layer": layer_red_ferrocarril },
                /*{"id":1, "name":"Red Vial Nacional", "cod":"RVN"},
                {"id":2, "name":"Red Vial Provincial", "cod":"RVP"},
                {"id":3, "name":"Red Vial Comunal", "cod":"RVC"}*/];

        } else if(link_recibe == '2_TF'){

        array_nivel3 = [
		{"id":1, "name":"Zonas Frutihorticolas", "cod":"AH_1_FH", "subcarpeta":"no", "name_layer": layer_zonas_frutih },
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
                if (subC=='no'){
                	var name_layer = array_nivel3[i].name_layer;
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
				li.appendChild(link_2);
                                link.appendChild(text);
				link_2.appendChild(text_2);
                                link.addEventListener("click", cargarCapas1, false);
                        }

                //link.addEventListener("click", crearCapasNivel4, false);//crearCapasNivel4//function() {crearCapasNivel4(this.id)}
        }//cierra el for
        link_n2.removeEventListener("click", crearSubCarpetas, false);
        link_n2.addEventListener("click", cerrarMenu, false);
	//li.addEventListener("click", alerta, false);

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
function cargarCapas1(){
	var link_id = this.id;
	console.log(this);
	
	//loadCapas(link_id);// <=====Llamar

	if (link_id == 'TA_1_RA') {
		layer_1101.addTo(map);layer_1101.bringToFront();this.removeEventListener("click",cargarCapas1, false);this.addEventListener("click", removeCapas1, false);
	} else if (link_id == 'TA_2_RP'){
		layer_rutas_provinciales.addTo(map);layer_rutas_provinciales.bringToFront();this.removeEventListener("click",cargarCapas1, false);this.addEventListener("click", removeCapas1, false);
	} else if (link_id == 'TA_3_LF'){
		layer_red_ferrocarril.addTo(map);layer_red_ferrocarril.bringToFront();this.removeEventListener("click",cargarCapas1, false);this.addEventListener("click", removeCapas1, false);
	} else if(link_id =='TA_4_CR'){
                layer_caminos_rurales.addTo(map);layer_caminos_rurales.bringToFront();this.removeEventListener("click",cargarCapas1, false);this.addEventListener("click", removeCapas1, false);
	} else if (link_id == 'AH_1_FH'){
		layer_zonas_frutih.addTo(map);layer_zonas_frutih.bringToFront();this.removeEventListener("click",cargarCapas1, false);this.addEventListener("click", removeCapas1, false);
	} else if(link_id =='AH_2_CC'){
		loadComedores();this.removeEventListener("click",cargarCapas1, false);this.addEventListener("click", removeCapas1, false);
	}
}

function removeCapas1(){
	var link_id = this.id;
	console.log(this);
	console.log('remover capa');
	
	if (link_id == 'TA_1_RA') {
		map.removeLayer(layer_1101);this.removeEventListener("click", removeCapas1, false);this.addEventListener("click", cargarCapas1, false);

	}else if (link_id == 'TA_2_RP'){
		map.removeLayer(layer_rutas_provinciales);this.removeEventListener("click", removeCapas1, false);this.addEventListener("click", cargarCapas1, false);
	} else if (link_id == 'TA_3_LF'){
		 map.removeLayer(layer_red_ferrocarril);this.removeEventListener("click", removeCapas1, false);this.addEventListener("click", cargarCapas1, false);
	} else if(link_id =='TA_4_CR'){
                map.removeLayer(layer_caminos_rurales);this.removeEventListener("click", removeCapas1, false);this.addEventListener("click", cargarCapas1, false);
	} else if (link_id == 'AH_1_FH'){
		map.removeLayer(layer_zonas_frutih);this.removeEventListener("click", removeCapas1, false);this.addEventListener("click", cargarCapas1, false);
	} else if(link_id =='AH_2_CC'){
		map.removeLayer(comedoresVectorial);this.removeEventListener("click", removeCapas1, false);this.addEventListener("click", cargarCapas1, false);
	}
}
/*function loadCapas(id){
	//
	var id = id;
	if(id == 'TA_1_RA'){ layer_1101.addTo(map); 
	console.log(layer_1101)}

}*/
}//CIERRA creardiv

//////////ESTO DE ABAJO SE VA
/*function crearCarpetasSub1(){
	console.log('Crear carpetas del Primer Menu');
	var menu = document.getElementById('li1_1_id');
	var sub1 = document.getElementById('ul_submenu_1_A');
	var sub2 = document.getElementById('ul_submenu_1_B');
	var sub3 = document.getElementById('ul_submenu_1_C');
	var sub4 = document.getElementById('ul_submenu_1_D');
	
	if( sub1 == null){
	var ul_sub1_A = document.createElement("UL");
        ul_sub1_A.setAttribute("id", "ul_submenu_1_A");

	var lista1_1_1 = document.createElement("LI");
        lista1_1_1.setAttribute("id", "li1_1_1_id");
        var link1_1_1 = document.createElement("A");
        link1_1_1.href = "#";
        link1_1_1.onclick= function(){crearCapasRVNacional()};
        var t1_1_1 = document.createTextNode("Red Vial Nacional");

	menu.appendChild(ul_sub1_A);
	ul_sub1_A.appendChild(lista1_1_1);
	lista1_1_1.appendChild(link1_1_1);
	link1_1_1.appendChild(t1_1_1);

	} else { console.log('ya existe, no hacer nada') }

	if( sub2 == null){
        var ul_sub1_B = document.createElement("UL");
        ul_sub1_B.setAttribute("id", "ul_submenu_1_B");

        var lista1_2_1 = document.createElement("LI");
        lista1_2_1.setAttribute("id", "li1_2_1_id");
        var link1_2_1 = document.createElement("A");
        link1_2_1.href = "#";
        var t1_2_1 = document.createTextNode("Red Vial Provincial");

        menu.appendChild(ul_sub1_B);
        ul_sub1_B.appendChild(lista1_2_1);
        lista1_2_1.appendChild(link1_2_1);
        link1_2_1.appendChild(t1_2_1);

        } else { console.log('ya existe, no hacer nada') }	
}*/

/*function crearCapasRVNacional(){
	if(submenu_1_A == null){

	var ul_sub1_A_capas = document.createElement("UL");
        ul_sub1_A_capas.setAttribute("id", "ul_submenu_1_A_capas");

	var li_layer_1101 = document.createElement("LI");
	li_layer_1101.setAttribute("id", "id_li_layer_1101");
	var link_layer_1101 = document.createElement("A");
	link_layer_1101.href = "#";
	var text_layer_1101 = document.createTextNode("Rutas Nacionales");

	submenu1.appendChild(ul_sub1_A_capas);
	ul_sub1_A_capas.appendChild(li_layer_1101);
	li_layer_1101.appendChild(link_layer_1101);
	link_layer_1101.appendChild(text_layer_1101);
	var id_layer = link_layer_1101.id;
	var name_layer = 'layer_1101';
	var layer = layer_1101;
	link_layer_1101.onclick= function(){cargarCapas1(name_layer, layer)};

	} else { console.log('ya existe el li de la capa')};

}*/

/*function cargarCapas1(name, layer){
}*/
