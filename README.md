<h1 align="center">mncode-rest-api</h1>
<h3 align="center">API REST construída usando Node.js, TypeScript, MySQL, gerando contêiner no DOCKER da API</h3>


<h3 align="left">Languages and Tools:</h3>

<p align="left">  <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/
typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> 
<a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
</p>


## Installation

- Criar o arquivo .env na raiz do projeto, com as configurações do seu banco MySQL: 

## Example

```html
DB_HOST = "mysqldb"
DB_USER = ""
DB_PASSWORD = ""
DB_NAME = "bd_mncode"
DB_PORT = "3306"

MYSQLDB_USER = "root"
MYSQLDB_ROOT_PASSWORD = ""
MYSQLDB_DATABASE = "bd_mncode"
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306

NODE_DOCKER_PORT = 3000
NODE_LOCAL_PORT = 3000
```


## Running the api
```bash
#linha de comando
$ npm run dev
```

```bash
#Executar com docker

#criar imagem e container

$  docker compose up -d

#o comando para iniciar o servidor e executar em modo de desenvolvimento com reinicialização automática:

$ docker-compose up
```
