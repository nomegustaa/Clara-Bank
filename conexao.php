<?php

    $servidor = "Localhost";
    $usuario = "root";
    $senha = "";
    $banco = "db_banco";

    $cn = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);

    
?>