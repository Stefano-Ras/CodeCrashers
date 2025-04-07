<?php

define('PATH', './images/');

if (is_dir(PATH)){
	if ($dh = opendir(PATH)){
		while (($file = readdir($dh))){
			if ($file != '..' && $file != '.'){
				$parts = explode('.', $file);
				$extension = $parts[count($parts) - 1];

				if ($extension == 'png' || $extension == 'jpg'){
					echo '<img src="' . PATH . $file . '" alt="' . $file . '" width="240">';
				}
			}
		}
		closedir($dh);
	}
}