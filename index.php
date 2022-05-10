<?php

    require 'conexao.php'

?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | ClaraBank</title>

    <link rel="stylesheet" href="src/css/Login.css">

    <script src="src/javascript/Tela-Cadastro.js" defer></script>
</head>
<body>
    
    <div class="area">
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>


    <main>

        <section class="tela-login" id="tela-login">

            <h1>Bem-vindo ao Clara-Bank</h1>    

            <form action="validar.php" method="post" class="login" id="login">  

                <input type="email" name="email" class="email" id="email" placeholder="Email">

                <input type="password" name="senha" class="senha" id="senha" placeholder="Senha">

                <button class="entrar" id="entrar" type="submit">Entrar</button>

            </form>

        </section>



        <section class="tela-texto" id="tela-texto">
    	    <div class="texto" id="texto">

    	        <h1>Ainda não possui uma conta?</h1>


                <p>Então clique no botão abaixo e crie agora rápido e fácil</p>

                <a href="tela-cadastro.php">

                    <button class="botao" id="botao">Criar conta</button>
                </a>
    	    </div>

        </section>

    </main>



</body>
</html>