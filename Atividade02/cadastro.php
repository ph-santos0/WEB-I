<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Confirmação de Inscrição</title>
    <style>
        table {
            border-collapse: collapse;
            width: 60%;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
        }
        th {
            background: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Dados do Cadastro Recebidos</h1>
    <a href="index.html">Voltar ao formulário</a>
    <br><br>

    <table>
        <tr><th>Campo</th><th>Valor</th></tr>
        <?php
        foreach ($_REQUEST as $campo => $valor) {
            if (is_array($valor)) {
                $valor = implode(", ", $valor);
            }
            echo "<tr><td>" . htmlspecialchars($campo) . "</td><td>" . htmlspecialchars($valor) . "</td></tr>";
        }
        ?>
    </table>
</body>
</html>
