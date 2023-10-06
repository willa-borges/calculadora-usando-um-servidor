# calculadora-usando-um-servidor


Criei uma calculadora simples utilizando conceitos de criação de servidor em minha própria máquina.


Para fazer isso necessitamos ter instalado o programa vs code e o node JS

Após a instalação dos mesmos iniciamos nosso projeto:
Abrimos o VS Code e clicamos na imagem a seguir: 

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/a5e3b242-9d8e-4063-bfb5-e6bd6f4b571c)

Após clicar nesse item da folha, digitar index.js conforme a imagem a seguir:

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/0dde7306-6f3c-423c-815c-802df41b822e)

Criando o package.JSON com as informações básicas necessárias para rodar o projeto:

No terminal digite 'npm init -y' e aperte enter

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/8322264d-9ea5-45d6-9785-b93734c6b549)

Após a instalação devemnos instalar o express para rodar o servidor:

Digite 'npm install express' no terminal conforme a imagem:

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/e585c5d8-44d8-4501-9852-02b50d13e228)

Instalar o nodemon como dependência de desenvolvimento. para restartar automaticamente o servidor e facilitar os testes:

Digite no terminal 'npm install -D nodemon' e aperte enter:

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/16026386-f9cb-4d43-a031-481a11f3590e)

Após realizar esses passos o vs code deve estar assim: 

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/6a28181b-5ab9-4add-bd09-f55994c35a61)

Agora vamos ignorar a pasta node_modules para não enviar ao github pois não é necessário:

O vs code ficará assim: 

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/4b23592e-aed2-4d9d-8385-e4f0089cb1be)


Dentro dessa aba que abriu do git ignore digita 'node_modules' e aperta ctr + s para salvar

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/e7deb777-02bd-4bba-a6c1-8d0771657c04)

Cliclar no arquivo package.json e fazer a seguinte alteração em scripts: 

App(ou outro nome que prefira)

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/0df2985b-8c19-45b4-8fc4-6145616502ac)

Clica na aba index.js para inicializar o projeto


Digitar: 'const express = require('express');' serve para chamar/importar o express na biblioteca que instalamos e colocar pra funcinonar.

Digitar: 'const app = express();' serve para instanciar o app que utilizamos e falar que iremos utiliza-lo com o express.

Digitar: 'app.use(express.json());' servirá para utilizar o express com os arquivos em formato json que iremos utilizar nas requisições do body nas rotas.

Digitar: 'app.listen(3000);' serve para escolher a rota que o servidor ira escutar ou seja utilizar para transitar as informações.

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/7c83bc6c-7bed-425c-9f50-5edf8dec2e09)

Na sequencia devemos criar as rotas conforme a imagem a seguir: ![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/10ae0983-a281-47cc-9c99-ba94dd4d552b)


Decidi que iria sempre fazer a subtração utilizando o numero maior menos o numero menor, conforme o código por isso utilizei variáveis ao invés de constantes apenas nessa rota.

Na divisão coloquei uma condição para não permitir dividir por zero.

Nas 4 rotas como a requisição vem através do body em forma de string, transformei as strings em numeros antes de realziar as operações.

Aperta ctr + s para salvar tudo.

Após tudo pronto, para rodar o projeto, digitar no terminal 'npm run app' e apertar enter.

![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/cbc1207c-59c3-4d83-96f9-48f4ee2a53ef)


Utilizando o insomnia para testar os códigos e se as rotas estão funcionando:

verifique que o caminho inicial (localhost:3000) é o mesmo para todos, o que muda é a rota final após a /

Divisão: ![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/59446cf6-ab50-46d2-b6b2-6db16f2a28b6)
Mutiplicação: ![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/5bc1acc1-62e0-4744-83e7-fbb3520f855b)
Soma: ![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/86f329f8-6e0f-4f84-897b-70c3f5affa4a)
Subtração: ![image](https://github.com/willa-borges/calculadora-usando-um-servidor/assets/141872446/b444b4da-95a0-41eb-8140-ae8af7d5f692)

