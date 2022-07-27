<h1 align="center">
    <br>
    <p align="center"> AchAmigo <p>
</h1></br>
<h2 align="center">
    <p :dog: :dog: :dog:>
    <p align="center"> API de coleção de abrigos e de animais para adoção <p>
</h2></br>

</br>
![4tyo](https://user-images.githubusercontent.com/83047619/181359994-1aa159f5-0783-4623-b6b2-be2c99c09fa3.gif)
</br>

<!--ts-->
- [AchAmigo](#-AchAmigo)
- [Arquitetura do Projeto](#-Arquitetura-do-Projeto)
- [Tecnologias Que Utilizei](#-Tecnologias-Que-Utilizei)
- [Preparando o Ambiente Para o Projeto](#-Preparando-o-Ambiente-Para-o-Projeto)
- [Banco De Dados](#-Banco-De-Dados)
- [Rotas (endponts)](#-Rotas-(endponts))
- [Autenticação e Rotas De Login](#-Autenticação-e-Rotas-De-Login)
- [Teste Jest](#-Teste-Jest)
- [Deploy Heroku](#-Deploy-Heroku)


<!--te-->
</br>

##  AchAmigo

</br>

Esse projeto tem como objetivo o desenvolvimento de uma API que une informações de vários abrigos/ongs, que cuidam de animais sem lar e tentam dar uma nova vida para esses bichinhos a partir do processo de adoção.
Os abrigos poderão cadastrar suas principais informações, assim como os meios que utilizam para receberem doações. Alem disso, poderão disponibilizar uma lista completo com informações dos pets que estão disponívies para adoção. Já o usuário que tem interesse em doar para esses abrigo, ou em adotar um pet e Achar um novo Amigo poderá unir todas essas informações em um só lugar.
O AchAmigo foi desenvolvido como trabalho final do curso de backend da {Reprograma}.

</br>

##  Arquitetura do Projeto

</br>

A arquitetura segue o padrão mvc e suas pastas e arquivos estão organizados assim:

```
 📁PROJETO-ACHAMIGO
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controller
   |  |    |- 📄 abrigosController.js
   |  |    |- 📄 autenticacao.js
   |  |    |- 📄 petsController.js
   |  |    |- 📄 usuariosController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 abrigosModels.js
   |  |    |- 📄 petsModels.js
   |  |    |- 📄 usuarioModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 abrigosRoutes.js
   |  |    |- 📄 petsRoutes.js
   |  |    |- 📄 usuariosRouter.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |  |--📁 test
   |  |   |- 📄 abrigos.test.js
   |  |   |- 📄 pets.test.js
   |  |   |- 📄 usuarios.test.js
   |  |
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
</br>

##  Tecnologias Que Utilizei

</br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript no lado server.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `jest`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação.|
| `heroku`| hospeda a documentação.|

</br>

##  Preparando o Ambiente Para o Projeto

</br>

Para executar este projeto, você deverá ter instalado o Node.js e as dependências do npm.

Seguiremos a ordem de instalações no terminal:

- Clone o projeto através do comando:
`$git clone https://github.com/Nathercia/Projeto-Final---Reprograma.git`
- `npm init -y`
- `npm install `
- `npm install express `
- `npm install nodemon `
- `npm install mongoose `
- `npm i --save-dev dotenv`
- `npm install jsonwebtoken --save`
- `npm install bcrypt --save`
- `npm install --save-exact jest@28.1.0 --save-dev`
- Inicialize com o comando `npm start` para que você possa executar o projeto localmente.

</br>

##  Banco De Dados

</br>

Para o desenvolvimento do projeto foi necessário a criação de uma conta no MongoDb onde os dados dos modelos ficam armazenados.

Foram utilizados três schemas:

- `abrigoSchema` - Modelo com os dados dos abrigos que poderão ajustar, através de um login e senha, suas informações e adicionar os pets que encontram-se disponíveis para adoção.
- `petsSchema` - Modelo com os dados dos pets ques estão disponívies para adoção (e que estão atrelados a um abrigo)
- `usuarioSchema` - Modelo dos usuários do sistema, estes poderão favoritar seus abrigos e pets favoritos através de um login e senha.

</br>

##  Rotas (endeponts)

</br>

O projeto utiliza od métodos CRUD (Create, Read, UpDate, Delete) do HTTP e nele será possivel criar, ler, alterar e deletar dados das colções de Pets, Abrigos ou Usuários.
Através da ferramento Postman é possível chegar às seguintes rotas:


</br>

| Verbo  |    EndPoint     |       Descrição da Rota             | Status | Auth | Login |
| ------ | -------------   | ------------------------------------| ------ | -----| ----- |
| GET    | /abrigos        |  Listar todas os abrigos            |   200  |  ❌  |  ❌  |
| GET    | /abrigos/name   |  Listar o abrigo pela nome          |   200  |  ❌  |  ❌  |
| GET    | /abrigo/:id     |  Listar o abrigo pelo id            |   200  |  ❌  |  ❌  |
| GET    | /pets           |  Listar todos os pets               |   200  |  ❌  |  ❌  |
| GET    | /pet/:id        |  Listar o pet pelo id               |   200  |  ❌  |  ❌  |
| GET    | /usuarios       |  Listar todos os usuários           |   200  |  ❌  |  ❌  |
| GET    | /usuario/:id    |  Listar o usuário pelo id           |   200  |  ❌  |  ❌  |
| POST   | /abrigo         |  Criar um novo abrigo               |   201  |  ❌  |  ❌  |
| POST   | /pet            |  Criar um novo pet                  |   201  |  ✔️  |  ✔️  |
| POST   | /usuario        |  Criar um novo usuário              |   201  |  ❌  |  ❌  |
| PUT    | /abrigo/:id     |  Alterar um abrigo                  |   200  |  ✔️  |  ✔️  |
| PUT    | /pet/:id        |  Alterar um pet                     |   200  |  ✔️  |  ✔️  |
| PUT    | /usuario/:id    |  Alterar um usuario                 |   200  |  ✔️  |  ✔️  |
| DELETE | /abrigo/:id     |  Deletar um abrigo                  |   200  |  ✔️  |  ✔️  |
| DELETE | /pet/:id        |  Deletar um pet                     |   200  |  ✔️  |  ✔️  |
| DELETE | /usuario/:id    |  Deletar um usuario                 |   200  |  ✔️  |  ✔️  |

</br>

📌 A documentação via Swagger do projeto pode ser acessada pelo link: [Swagger aqui](http://acha-amigo.herokuapp.com/minha-rota-de-documentacao/).


</br>

##  Autenticação e Rotas de Login:

</br>

Instalação das dependências necessárias:

- Inicialize o comando de instalação `npm i express cors` para instalar o cors.
- Inicialize o comando de instalação `npm i --save-dev dotenv` para instalar dontenv.
- Inicialize com o comando `npm start` para que você possa executar os testes.

</br>

Foram criadas 2 rotas (para os abrigos e para os usuários) para a geração do token de autenticação:

| Verbo  |   EndPoint    |      Descrição da Rota             | Status | Auth | Login |
| ------ | ------------- | -----------------------------------| ------ | -----| ----- |
| POST   | /abrigo/login | Adicionar um token para abrigo     |   201  |  ✔️  |  ✔️  |
| POST   | /usuario/login| Adicionar um token para usuario    |   201  |  ✔️  |  ✔️  |


A autenticação é exigida no acesso via header do Postman com a opção: **Authorization**, no type basta escolher a opção **bearer token** e em seguida adicionar o token que foi gerado na rota de login.

</br>

##  Teste Jest

</br>

Instalar o Jest dentro da pasta raiz do projeto:

- Inicialize o comando de instalação `npm install --save-exact jest@28.1.0 --save-dev` para instalar o Jest.
- Incluir o no package_json -> `"test:watch": "jest --watchAll"`.
- Inicialize com o comando `npm run test:watch` para testar.

</br>

## Deploy Heroku

</br>

📌 O deploy do projeto foi feito utilizando o Heroku: [Deploy aqui](https://acha-amigo.herokuapp.com/abrigos).

