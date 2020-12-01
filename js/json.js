//cambios 24_12_2019 - para el select
array_temas = [
	{"id":"id", "value":"", "texto":"seleccionar...     "},
	{"id":"id1", "value":"Uno", "texto":"Nacional"},
	{"id":"id2", "value":"Dos", "texto":"Provincial"},
	{"id":"id3", "value":"Tres", "texto":"Local"},
	{"id":"id4", "value":"Todos", "texto":"Mostrar todos"}
];

temas = [{
	"id": 1,
	"value": "Uno",
	"nombre":"Nacional",
	"center":[-36.0, -64.0],
	"zoom": 5,
	"layers": [layer_1101, layer_rutas_provinciales]
	},
	{
        "id": 2,
        "value": "Dos",
        "nombre":"Provincial",
        "center":[-36.0, -60.0],
        "zoom": 7,
	"layers": []
	},
        {
        "id": 3,
        "value": "Tres",
        "nombre":"Local",
        "center":[-35.0, -58.30],
        "zoom": 11,
	"layers": []
        }	
];

arraySegundoNivel = [
	{"id": 1, "name": "Infraestructura Física", "cod": "1_IF", "visible":"cerrado"},
        {"id": 2, "name": "Infraestructura Servicios", "cod": "2_Ser"},
        {"id": 3, "name": "Infraestructura Social", "cod": "3_Soc"},
        {"id": 4, "name": "Infraestructura Productiva", "cod": "4_P"},
        {"id": 5, "name": "Capas Complementarias", "cod": "5_CC"},
        {"id": 6, "name": "Estudios de Vulnerabilidad Social", "cod": "6_EVS"},
        {"id": 7, "name": "Mancha Urbana", "cod": "7_MU"}
        
];

array_nivel3 = [
	{"id":1, "id_n2": "1_IF", "name":"Rutas Nacionales", "cod":"IF_1_RA", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_1101", "load": layer_1101},
        {"id":2, "id_n2": "1_IF", "name":"Rutas Provinciales", "cod":"IF_2_RP", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_rutas_provinciales", "load": layer_rutas_provinciales},
        {"id":3, "id_n2": "1_IF", "name":"Caminos Rurales", "cod":"IF_3_CR", "subcarpeta":"no", "visible":"no", "work":"c_rurales_6", "nombre_layer": "layer_caminos_rurales", "load": layer_caminos_rurales},
        {"id":4, "id_n2": "1_IF", "name":"Líneas de Ferrocarril", "cod":"IF_4_LF", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_red_ferrocarril", "load": layer_red_ferrocarril},
        {"id":5, "id_n2": "5_CC", "name":"Area Urbana", "cod":"CC_1_AU", "subcarpeta":"no", "visible":"si", "nombre_layer": "layer_area_urbana", "load": layer_area_urbana},

	{"id":6, "id_n2": "4_P", "name":"Zonas Frutihorticolas", "cod":"P_1_FH", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_zonas_frutih", "load": layer_zonas_frutih},
        {"id":7, "id_n2": "3_Soc", "name":"Comedores Comunitarios", "cod":"So_1_CC", "subcarpeta":"no", "visible":"no", "nombre_layer": comedoresVectorial, "load": loadComedores, "vectorial":"si"},
        {"id":8, "id_n2": "3_Soc", "name":"Centros Educativos", "cod":"So_2_CE", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_centro_educ", "load": layer_centro_educ},
	{"id":9, "id_n2": "3_Soc", "name":"Barrios RENABAP", "cod":"So_3_BR", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "barrios_renabap_view", "load": layer_barrios_renabap},
	{"id":10, "id_n2": "3_Soc", "name":"Vulnerabilidad", "cod":"So_4_Vu", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_vulnerabilidad", "load": layer_vulnerabilidad},
	{"id":11, "id_n2": "4_P", "name":"Ferias Francas", "cod":"P_2_FF", "subcarpeta":"no", "visible":"no", "nombre_layer": feriasfVectorial, "load": loadFeriasF, "vectorial":"si"},
	{"id":12, "id_n2": "3_TFM", "name":"Completar", "cod":"TFM_1_A", "subcarpeta":"si"},
  {"id":13, "id_n2": "7_MU", "name":"Mancha urbana nov 2020", "cod":"MU_1_MU", "subcarpeta":"no", "visible":"no", "nombre_layer": manchaVectorial, "load": loadMancha, "vectorial":"si"}
];

//NOTA: cuando es vectorial: 'si', en load es la funcion que crea la capa y la agrega al mapa ----- loadComedores.
//ERROR AL ELIMINAR: en nombre_layer no encuentra la variable para eliminarla
//SE CORRIGE: al agregar la capa se tomo la variable y se agrega en "nombre_layer" donde "name" == Comedores Comunitarios

