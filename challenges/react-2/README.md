# Login e criação de comentários
Utilizando React, React-Router, LocalStorage e testes unitários, você irá criar uma interface para registro e login de usuários, assim como de criação e visualização de comentários para receitas utilizando armazenamento com LocalStorage.

## Tópicos
Com esse desafio, você aprenderá:

- React
- ES6
- Javascript
- Testes unitários
- Formulários
- LocalStorage
- Controle de usuários

## Requisitos
Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

## Detalhes
Dentro da pasta `src`, você encontrará a estrutura básica do projeto React, todos arquivos necessários já estão criados assim como a estrutura em relação a `HTML` e `CSS`. Sua missão será criar a lógica dos componentes para deixá-lo dinâmico.

Dentro da pasta `sample_data`, você terá uma listagem de receitas que deverá ser impressa na tela.

Para auxiliar seu desenvolvimento, dentro da pasta `services`, você encontrará os módulos `commentsService` e `loginService`.

**DICA:** Aproveite o código desenvolvido no desafio anterior para facilitar a implementação

### Tarefas

#### Registro e Login
1. No endpoint `/user/login`, ao preencher usuário, senha e clicar no botão de `Register`, o usuário deverá ter seus dados registrados e login realizado;
2. No endpoint `/user/login`, ao preencher usuário, senha e clicar no botão de `Login`, com dados VÁLIDOS, o usuário deverá ter seu login realizado;
3. No endpoint `/user/login`, ao preencher usuário, senha e clicar no botão de `Login`, com dados INVÁLIDOS, o usuário deverá receber uma mensagem de erro;
4. O usuário LOGADO não pode entrar no endpoint `/user/login`;
5. O usuário NÃO LOGADO não pode entrar no endpoint `/user/profile`;
6. No endpoint `/user/profile`, ao clicar em `Logout` o usuário logado deverá ter sua sessão encerrada;

![](https://s3-us-west-1.amazonaws.com/codenation-challenges/react-2/HardtofindShockingFrogmouth-small.gif)

#### Comentários
1. No endpoint `/recipe/:recipeSlug`, o usuário deverá ver todos os comentários da receita listados dentro do componente `CommentsBlock`;
2. Apenas usuários logados devem poder comentar;
3. O usuário logado deve poder remover os comentários que ele mesmo criou, IMPORTANTE: O icone `trash` deverá aparecer apenas nos comentários do usuário logado;

![](https://s3-us-west-1.amazonaws.com/codenation-challenges/react-2/PhysicalDefenselessJaguarundi.webp)


### Atenção
- NÃO MUDE o nome dos componentes, eles são utilizados para a realização dos testes.
- Os testes do exercício anterior não serão validados novamente

## Rodando a aplicação
Na primeira execução rodar o comando:
```
npm install
```
Para rodar a aplicação:
```
npm start
```