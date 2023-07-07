<p align="center">
  <a target="blank"><img src="https://private-user-images.githubusercontent.com/81196756/251601171-c1436405-465b-46cd-bc0a-04a9cbbb0910.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg4Njg4MTA2LCJuYmYiOjE2ODg2ODc4MDYsInBhdGgiOiIvODExOTY3NTYvMjUxNjAxMTcxLWMxNDM2NDA1LTQ2NWItNDZjZC1iYzBhLTA0YTljYmJiMDkxMC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNzA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDcwNlQyMzU2NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMmNhN2VkOGM0NjJlMTA5Zjg0MDRjMWYxYzQ4ZDhkMmIzNmMwNzM0ZjNkN2ExNjBjMzk3YWQ2MjM4ZTQwNjQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QeW5pzA7F5Sb36GnZmWVfVhfuVn-4jbogVDn3olIJhY" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">API REST - Loja de Quadrinhos</h1>

## 📝 Descrição

<h2> Repositório de API REST de uma loja de quadrinhos.
</h2>

## 🚀 Instalação de dependências

```bash
$ npm install
```

## 🚀 Rodando a API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



## 📚 Atributos dos Quadrinhos
* Código do quadrinho - Para referenciar quadrinho. Ex: comic1
* Name - Identificação do quadrinho. Ex: Homem Aranha
* Descrição - Descrever o quadrinho. Ex: Longe de Casa
* Preço - Preço do quadrinho. EX: 35.50
* Raridade - Se o quadrinho é raro ou comum. Ex: RARO
* Quantidade - Quantidade de quadrinhos no estoque. Ex: 45
* Likes - Quantidade de likes no quadrinho. Ex: 75
* Criado em - Data de registro do quadrinho.
* Atualizado em - Data da última atualização do quadrinho.

## 📚 Endpoints

### POST /comics
Registra um novo quadrinho.

### GET /comics 
Lista todos os quadrinhos registrados.

### GET /comics/:id
Lista um quadrinho dado um determinado ID.

### DEL /comics
Apaga todos os quadrinhos registrados.

### DEL /comics/:id
Apaga um quadrinho dado um determiando ID.

### PUT /comics/:id
Atualizar atributo(os) de um quadrinho, dado um determiando ID

### PATCH /comics/:id
Modificar raridade do quadrinho, dado um determinado ID.


## 🛠️ Tecnologias utilizadas

* [Typescript](https://www.typescriptlang.org/) - É uma linguagem de programação usada, que adiciona tipos ao tradicional Javascript.

* [Nestjs](https://nestjs.com/) - Escolhido para ser o Framework para desenvolvimento, o nestjs possui uma arquitetura modular, e oferece recursos poderosos, como como injeção de dependência, roteamento, validação de dados, e integração com bibliotecas populares. Sendo assim, ele é altamente escalável, e promove a criação de um código limpo e estruturado.

* [Prisma](https://www.prisma.io/) - Ferramenta de ORM (Object-Relational Mapping) que teve como objetivo a facilitação da interação com o banco de dados. Ele oferece uma camada de abstração para manipulação e consultas de dados.

* [Npm](https://www.npmjs.com/) - Gerenciador de pacotes, muito utilizado ultimammente. E oferece uma vasta opções de pacotes a serem instalados. Facilitando assim a integração de outras bibliotecas ao projeto.

* [Postgresql](https://www.postgresql.org/docs/) - Gerenciador de banco de dados objeto relacional, será usado para aramazenamento de dados. A escolha para o uso desse gerenciador foi a facilidade de instalação e configuração. 

* [Git](https://git-scm.com/doc) - Será utilizado para versionar o projeto durante sua fase de desenvolvimento, para que assim poder ter um rastreamento de versões.

* [GitHub](https://docs.github.com/pt) - Será utilizado para hospedar o projeto durante sua fase de desenvolvimento e como beneficio poder ter um rastreamento de versões.

* [VS code](https://code.visualstudio.com/) - Editor de código para desenvolvimento. Foi escolhido, pois possui uma interface amigável e fácil utilização.

## Arquitetura baseada em módulos do NestJS

A escolha dessa arquitetura veio do fato do próprio  Nestjs  trazer essa arquitetura, visando criar uma api escalável e estruturada.

Essa API REST foi dividida em:

1. Controllers - Os controllers são responsáveis por receber as solicitações dos usuários. Eles atuam como intermediários entre a camada de visualização (interface do usuário) e a camada de serviços ou negócios (lógica do aplicativo).
2. Services - Os services foram desenvolvidos para  implementação da lógica dos quadrinhos. Eles encapsulam funcionalidades específicas e foram  projetados para serem reutilizáveis e independentes de qualquer interface de usuário específica.

3. Dtos - Para transferir dados entre diferentes módulos da API. Os Dtos são objetos que carregam dados de forma simples e coesa, permite assim  a comunicação eficiente entre os módulos.


## 📫 Contato
Você pode entrar em contato comigo por meio dos seguintes canais:

E-mail: dcs12@discente.ifpe.edu.br

LinkedIn: https://www.linkedin.com/in/deisecristiane/

GitHub: https://github.com/deisecristiane


