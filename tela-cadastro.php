<?php

    require 'conexao.php'

?>




<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G-Bank | Cadastro</title>

    <link rel="stylesheet" href="src/css/cadastro.css">

    <script src="src/javascript/Tela-Cadastro.js" defer></script>

</head>
<body>
    
    <main>

        <section class="tela-texto" id="tela-texto">

    	    <div class="texto" id="texto">

    	        <h1>Já possui sua conta?</h1>


                <p>Então clique no botão abaixo e entre agora mesmo!</p>

                <a href="index.php">

                    <button class="botao" id="botao">Entrar</button>

                </a>
    	    </div>

        </section>


        <section class="formulario" id="formulario">

            <h1 >Cadastre-se</h1>

            <form method="post" action="inserir.php" name="form" class="tela-formulario" id="tela-formulario">
                
                <input type="text" name="nome" class="nome" id="nome" placeholder="Nome">
                <p id="error_nome"></p>

                <input type="text" name="sobrenome" class="sobrenome" id="sobrenome" placeholder="Sobrenome">
                <p id="error_sobrenome"></p>

                <input type="text" name="cpf" class="cpf" id="cpf" placeholder="CPF">
                <p id="error_cpf"></p>

                <input type="email" name="email" class="e-mail" id="email" placeholder="Email">
                <p id="error_email"></p>

                <input type="password" name="senha" class="senha" id="senha" placeholder="Senha">
                <p id="error_senha"></p>

				<button class="botao-cadastro" id="botao-cadastro" type="submit">Criar sua conta</button>

            </form>

        </section>

    </main>


</body>
</html>