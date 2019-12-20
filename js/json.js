
arraySegundoNivel = [
                {"id": 1, "name": "Capas Básicas", "cod": "1_TA", "visible":"cerrado"},
                {"id": 2, "name": "Capas Argentina contra el Hambre", "cod": "2_TF"},
                {"id": 3, "name": "Transporte Fluvial y Maritimo", "cod": "3_TFM"},
                {"id": 4, "name": "Transporte Aereo", "cod": "4_TAereo"},
                {"id": 5, "name": "Estudios y Estadísticas de Transporte", "cod": "5_EET"},
                {"id": 6, "name": "Capas Complementarias", "cod": "6_CC"}
];

array_nivel3 = [
	{"id":1, "id_n2": "1_TA", "name":"Rutas Nacionales", "cod":"TA_1_RA", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_1101", "load": layer_1101},
        {"id":2, "id_n2": "1_TA", "name":"Rutas Provinciales", "cod":"TA_2_RP", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_rutas_provinciales", "load": layer_rutas_provinciales},
        {"id":3, "id_n2": "1_TA", "name":"Caminos Rurales", "cod":"TA_3_CR", "subcarpeta":"no", "visible":"no", "work":"c_rurales_6", "nombre_layer": "layer_caminos_rurales", "load": layer_caminos_rurales},
        {"id":4, "id_n2": "1_TA", "name":"Líneas de Ferrocarril", "cod":"TA_4_LF", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_red_ferrocarril", "load": layer_red_ferrocarril},
        {"id":5, "id_n2": "1_TA", "name":"Area Urbana", "cod":"TA_5_AU", "subcarpeta":"no", "visible":"si", "nombre_layer": "layer_area_urbana", "load": layer_area_urbana},

	{"id":6, "id_n2": "2_TF", "name":"Zonas Frutihorticolas", "cod":"AH_1_FH", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_zonas_frutih", "load": layer_zonas_frutih},
        {"id":7, "id_n2": "2_TF", "name":"Comedores Comunitarios", "cod":"AH_2_CC", "subcarpeta":"no", "visible":"no", "nombre_layer": comedoresVectorial, "load": loadComedores, "vectorial":"si"},
        {"id":8, "id_n2": "2_TF", "name":"Centros Educativos", "cod":"AH_3_CE", "subcarpeta":"no", "visible":"no", "work":"observ", "nombre_layer": "layer_centro_educ", "load": layer_centro_educ},

	{"id":9, "id_n2": "3_TFM", "name":"Completar", "cod":"TFM_1_A", "subcarpeta":"si"}
];

//NOTA: cuando es vectorial: 'si', en load es la funcion que crea la capa y la agrega al mapa ----- loadComedores.
//ERROR AL ELIMINAR: en nombre_layer no encuentra la variable para eliminarla
//SE CORRIGE: al agregar la capa se tomo la variable y se agrega en "nombre_layer" donde "name" == Comedores Comunitarios

