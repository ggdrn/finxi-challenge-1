# Desafio Finxi

## Sobre o Projeto

O projeto é um buscador de gifs, na qual é realizada a busca desses na [API Giphy](https://developers.giphy.com/branch/master/docs/api/endpoint/#search) e é mostrado de forma intuitiva com auxílio do [Semantic UI VueJs](https://semantic-ui-vue.github.io/#/) e rolagem infinita.

O projeto foi todo desenvolvido com o Framework JavaScript VueJs.

O projeto foi colocado em um contâiner Docker.

Para inicialização do projeto foi utilizado [CLI](https://cli.vuejs.org/) do VueJS.

## Requisitos necessários

- **Com Docker:**
  É necessário a instalação do NodeJs 12.X e GIT para inicialização do projeto.

- **Instalação do GIT:** Realize o download [aqui](https://git-scm.com/downloads) e realize a instalção.
- **Instalação do Docker:** Realize o download [aqui](https://www.docker.com/products/docker-desktop) e realize a instalção.

* **Sem Docker:**
  É necessário a instalação do NodeJs 12.X e GIT para inicialização do projeto.

* **Instalação do NodeJs:** [Acesse aqui](https://nodejs.org/en/download/) e realize o download do NodeJs 12.X.
* **Instalação do GIT:** Realize o download [aqui](https://git-scm.com/downloads) e realize a instalção.

Realizado as configurações vamos para a próxima etapa.

## Incializando o projeto

Acesse o [repositório](https://github.com/lmaiaa/finxi-challenge) do meu desafio

Execute o comando

```
git clone https://github.com/lmaiaa/finxi-challenge.git
```

- **Com Docker:**

Acesse a pasta clonada e inicialize o projeto com o seguinte comando:

```
docker-compose up -d --build
```

- **Sem Docker:**

Acesse a pasta clonada e instale as dependências

```
cd finxi-challenge

npm install
```

Após isso o projeto está pronto para ser inicializado.
Para inicializar execute o comando:

```
npm run serve
```

## Projeto inicializado

Ao inicializar o projeto este poderá ser acessado em: **http://localhost:8080**
