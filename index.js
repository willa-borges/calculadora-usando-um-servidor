const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000);

app.post('/somar', (req, res) => {
    const { numero1, numero2 } = req.body;
    const soma = Number(numero1) + Number(numero2);
    res.send(`O resultado da soma é: ${soma}`);
});

app.post('/subtrair', (req, res) => {
    let { numero1, numero2 } = req.body;
    let troca = 0;
    if (numero1 < numero2) {
        troca = numero2;
        numero2 = numero1;
        numero1 = troca;
    }
    const subtracao = Number(numero1) - Number(numero2);
    res.send(`O resultado da subtração é: ${subtracao}`);
});

app.post('/dividir', (req, res) => {
    const { numero1, numero2 } = req.body;

    if (numero2 === 0) {
        res.status(400).send('Erro: Divisão por zero não é permitida');
    } else {
        const divisao = Number(numero1) / Number(numero2);
        res.send(`O resultado da divisão é ${divisao}`);
    }

});

app.post('/multiplicar', (req, res) => {
    const { numero1, numero2 } = req.body;
    const multiplicacao = Number(numero1) * Number(numero2);
    res.send(`O resultado da multiplicação é ${multiplicacao}`);
});
