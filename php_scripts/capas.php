<?php

if( isset($_REQUEST['envio'])){
	$envio=$_REQUEST['envio'];
}

switch($envio){

        case "crearCapa":
        crearCapa();
        break;

}

function crearCapa(){

	$date = date("Y-m-d_h-i-sa");
	$name_file = "mapa_".$date.".html";
	$layer_file = "layer_".$date.".js";

	$center = $_REQUEST['center'];
	$zoom = $_REQUEST['zoom'];
	$array_capas = $_REQUEST['data'];//Recibi las CAPAS
	$urlR = $_REQUEST['url'];

	$capas = json_decode($array_capas, true);

	$long = count($capas);

	$layer_iframe = [];

	for($i=0; $i<$long; $i++){
		$capa = $capas[$i];
		$capaX = var_dump($capa);

		//echo $capaX;
		$url = $urlR;
		$name = 'layer_'.$i;
		$srs = $capas[$i]["srs"];
		$layers = $capas[$i]["layers"];
		$format = $capas[$i]["format"];
		$transp = $capas[$i]["transparent"];

		if ($transp == 1){
			$transparent = 'true';
		} else {
			$transparent = 'false';
		}

		$capa_generada = <<< EOT
		L.tileLayer.wms("$url", {
			name : "$name",
			layers: "$layers",
			crs: L.CRS.EPSG4326,
			format: "$format",
			transparent: $transparent
		})
		EOT;
		array_push($layer_iframe, $capa_generada);
		//print_r($layer_iframe);
	}

        $cantCapas = count($capas);//contar cantidad de capas recibidos

$file = "../iframe/mapa1.html";
$fp = fopen($file, "r");

while ($linea = fgets($fp)) {
    $aux[] =  htmlspecialchars($linea);
    $numlinea++;
}

fclose($fp);

$long_iframe = count($layer_iframe);

for($i=0; $i<$long_iframe; $i++){
	$capa_i = $layer_iframe[$i];
}

$aux[13] = "var map = L.map('map',{ center: ".$center.", zoom: ".$zoom." });";
$aux[19] = '<script type="text/javascript" src="./js/'.$layer_file.'"></script>;';

//**************************************************
//script layers // Como no existe, lo crea
if (!$fp3 = fopen("../iframe/js/".$layer_file, "a+")){
	echo "No se ha podido abrir el archivo";
} else {

        $array_L = $_REQUEST['data'];
        $url_Req = $_REQUEST['url'];

        $capas_L = json_decode($array_L, true);
	$long_iframe = count($capas_L);

        for($i=0; $i<$long_iframe; $i++){
                $capa_L = $capas_L[$i];
                $capaZ = var_dump($capa_L);

                //echo $capaX;
                $url_L = $url_Req;
                $name_L = $capas_L[$i]["name"];//'layer_'.$i;
		$layer_nro= 'layer_'.$i;
                $srs_L = $capas_L[$i]["srs"];
                $layers_L = $capas_L[$i]["layers"];
                $format_L = $capas_L[$i]["format"];
                $transp_L = $capas_L[$i]["transparent"];

                if ($transp_L == 1){
                        $transparent_L = 'true';
                } else {
                        $transparent_L = 'false';
                }

                $capa_generada_L = <<< EOD
                var $layer_nro = L.tileLayer.wms("$url_L", {
                        name : "$name_L",
                        layers: "$layers_L",
                        crs: L.CRS.EPSG4326,
                        format: "$format_L",
                        transparent: $transparent_L
                }).addTo(map).bringToFront();control.addOverlay($layer_nro, "$name_L");
                EOD;
		
		fwrite($fp3,$capa_generada_L."\t");
	}
}
fclose($fp3);
//***********************************

if (!$fp2 = fopen("../iframe/".$name_file, "a+")){
    echo "No se ha podido abrir el archivo";
}else{

        $long = count($aux);
        echo $long;

        foreach($aux as $key => $value){
                //$value = $aux[i];
                $line = html_entity_decode($value);
                fwrite($fp2,$line."\t");
        }
}
fclose($fp2);

echo $name_file;

}//cierra crearCapa

?>
