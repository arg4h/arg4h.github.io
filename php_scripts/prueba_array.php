<?php
$array = '[{"a":"uno", "b":"dos"}, {"a":"tres"}]';

$capas = json_decode($array, true);

$ages = array_column($capas, 'b');
var_dump($ages);
//print_r($capas);

$long = count($capas);

echo $long;

//echo $capas[0]["a"]; 

for($i=0; $i<$long; $i++){
	$value = $capas[$i];

	echo $value;
	/*foreach ( $value as $nombre => $hexa ) {
 	echo $nombre.'='.$hexa;
	}*/	

}
		

?>
