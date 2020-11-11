var layer_0 = L.tileLayer.wms("https://ide.transporte.gob.ar/geoserver/wms?", {
        name : "layer_0",
        layers: "c_rurales_6:idera_planta_urbana_view",
        crs: L.CRS.EPSG4326,
        format: "image/png",
        transparent: true
}).addTo(map).bringToFront();	var layer_1 = L.tileLayer.wms("https://ide.transporte.gob.ar/geoserver/wms?", {
        name : "layer_1",
        layers: "observ:centros_educativos_hab_view",
        crs: L.CRS.EPSG4326,
        format: "image/png",
        transparent: true
}).addTo(map).bringToFront();	var layer_2 = L.tileLayer.wms("https://ide.transporte.gob.ar/geoserver/wms?", {
        name : "layer_2",
        layers: "c_rurales_6:caminos_rurales.view",
        crs: L.CRS.EPSG4326,
        format: "image/png",
        transparent: true
}).addTo(map).bringToFront();	