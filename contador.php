<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador</title>
    <!-- CSS do Site -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="box">
            <div id="extra_top">
                <i id="bola_vermelha"></i>
                <i id="bola_amarela"></i>
                <i id="bola_verde"></i>
            </div>
            <h1>Contador</h1>
            <h2>Resultado</h2>
            <div class="resultado">
                <?php
                    $num1 = $_POST['numero1'];
                    $num2 = $_POST['numero2'];
                    $tipo = $_POST['np'];
                    $ladeira = $_POST['cd'];
                
                    switch ($ladeira) {
                        case 'Crescente':
                            if ($num1 <= $num2) {
                                for ($i = $num1; $i <= $num2; $i++) {
                                    echo '<span>< '.$i.' ></span>';
                                }
                            } else {
                                echo 'Erro: Número Inválido';
                            }
                            break;
                        case 'Decrescente':
                            if ($num1 >= $num2) {
                                for ($i = $num1; $i >= $num2; $i--) {
                                    echo '<span>< '.$i.' ></span>';
                                }
                            } else {
                                echo 'Erro: Número Inválido';
                            }
                        default:
                
                            break;
                    }
                ?>
            </div>
            <a href="./index.html"><button class="botao_php" type="button">Voltar ao Inicio</button></a>
        </div>
    </div>
    <script src="assets/js/javascript.js"></script>
</body>

</html>