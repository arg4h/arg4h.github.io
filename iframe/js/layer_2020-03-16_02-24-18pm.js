var layer_0 = L.tileLayer.wms("https://ide.transporte.gob.ar/geoserver/wms?", {
        name : "Planta Urbana",
        layers: "c_rurales_6:idera_planta_urbana_view",
        crs: L.CRS.EPSG4326,
        format: "image/png",
        transparent: true
}).addTo(map).bringToFront();control.addOverlay(layer_0, "Planta Urbana");	var layer_1 = L.tileLayer.wms("https://ide.transporte.gob.ar/geoserver/wms?", {
        name : "Centros Educativos",
        layers: "observ:centros_educativos_hab_view",
        crs: L.CRS.EPSG4326,
        format: "image/png",
        transparent: true
}).addTo(map).bringToFront();control.addOverlay(layer_1, "Centros Educativos");	