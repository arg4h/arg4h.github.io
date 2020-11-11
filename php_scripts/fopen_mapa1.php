<?php


$file = "../iframe/mapa1.html";
$fp = fopen($file, "r");
//$contents = fread($fp, filesize($file));

while ($linea = fgets($fp)) {
    echo htmlspecialchars($linea).'<br/>';
    $aux[] =  htmlspecialchars($linea);    
    $numlinea++;
}

fclose($fp);

$layer1 = <<<EOT
capaRecibida
EOT;

$coords = '-40.0, -68.0';
$zoom = '5';
//unset($aux[13]);
$aux[13] = "var map = L.map('map',{ center: [".$coords."], zoom: ".$zoom.", minZoom: 2, maxZoom: 7 });";
$aux[14] = $layer1.".addTo(map);";
echo $numlinea;
//echo '<pre>';
//print_r($aux);
//echo '</pre>';

if (!$fp2 = fopen("../iframe/fichero.html", "a+")){
    echo "No se ha podido abrir el archivo";
}else{
	//$value = $aux[14];
	//fputs($fp2,$value);

	$long = count($aux);
	echo $long;

	//for($i=0; $i<$long; $i++){
	foreach($aux as $key => $value){
		//$value = $aux[i];
		$line = html_entity_decode($value);
		fwrite($fp2,$line."\t");
	}	
}
fclose($fp2);
?>
