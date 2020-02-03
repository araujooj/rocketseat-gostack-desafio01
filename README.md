<h1 align="center">
    <img 
    alt="Bootcamp GoStack Rocketseat"
    src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" 
    width="200px" />
</h1>

<h3 align="center">
  Desafio 01 - Conceitos do NodeJS
</h3>

<blockquote align="center">"Muito a aprender você ainda tem. - Mestre Yoda”</blockquote>

<blockquote align="center">
  <a href="#rocket-qual-foi-o-desafio">Qual foi o desafio?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotas-da-nossa-mini-aplicacao">Rotas da nossa mini aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tutorial">Tutorial</a>
</blockquote>

## :rocket: Qual foi o desafio?

Esse desafio é para colocar em prática os conceitos e as práticas que foram ensinadas no módulo 01, que você pode encontrar 
nesse [Repositório](https://github.com/araujooj/rocketseat-gostack-modulo01), onde documentei e falei um pouco sobre.

### :clipboard: Rotas da nossa mini aplicação
 `POST /projects`: Nessa rota, é onde armazena os projetos cadastrados pelo usuário, em um array dentro de nossa aplicação.
 Exemplo de requisição abaixo.

  ```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

- `GET /projects`: Rota que exibe todos os projetos;

- `PUT /projects/:id`: Rota que tem a função de alterar os projetos já cadastrados;

- `DELETE /projects/:id`: Deleta o projeto informado;


### :question: Tutorial: Como rodar o projeto?

- Com node e npm (ou yarn) instalado, use npm install (yarn) e depois npm run dev(yarn dev) para iniciar o servidor.
---

Feito com :purple_heart: by araujooj :wave: