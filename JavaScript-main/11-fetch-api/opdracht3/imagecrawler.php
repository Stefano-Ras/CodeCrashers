<?php

define('PATH', './images/');

if (is_dir(PATH)){
	if ($dh = opendir(PATH)){
		while (($file = readdir($dh))){
			if ($file != '..' && $file != '.'){
				$parts = explode('.', $file);
				$extension = $parts[count($parts) - 1];

				$alt = $file;
				$alt = preg_replace('/\-/', ' ', $alt);
				$alt = preg_replace('/(.png|.jpg)/', '', $alt);

				if ($extension == 'png' || $extension == 'jpg'){
					echo '<img src="' . PATH . $file . '" alt="' . $alt . '" width="240">';
				}
			}
		}
		closedir($dh);
	}
}