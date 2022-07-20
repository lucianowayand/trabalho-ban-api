# Trabalho de Ban
Trabalho baseado no esquema já desenvolvido em aula

![diagrama do banco de dados](https://github.com/lucianowayand/trabalho-ban-api/blob/main/DiagramaBancoPetShop.png)

## Dependências
O projeto é feito em Node.js e PostgreSQL. Para facilitar a montagem do projeto utilizamos o Postgres dockerizado portanto sua instalação é recomendada, caso não seja utilizado o endereço do banco de dados deve ser alterado no arquivo `.env`.

## Montando o projeto
Com a versão correta do node instalada execute `npm install` na pasta raiz do projeto para baixar suas dependências, após feita a instalação execute os comandos de montagem do prisma:
```
  npx prisma generate
  npx prisma migrate dev
```
Com o banco de dados funcionando corretamente execute o servidor express através do `npm start`

## Questões
Como requisitado pelo trabalho implementamos apenas as tabelas Cliente e Animais, é possivel acessar as buscas definidas no exercicio através de:

- Uma opção para inserir novas tuplas da primeira tabela
  * `POST : /clientes`
- Uma opção para inserir novas tuplas da segunda tabela
  * `POST : /animais`
- Uma opção para listar todas as tuplas da primeira tabela
  * `GET : /clientes`
- Uma opção para listar todas as tuplas da segunda tabela
  * `GET : /animais`
- Uma opção para listar o resultado de uma consulta que envolva uma junção entre as duas tabelas
  * `GET : /clientes/animais`
- Uma opção para listar o resultado de uma consulta que envolva subconsulta(s) e uma ou mais funções de agregação.
  * `GET : /animais/tipo/:tipo`
