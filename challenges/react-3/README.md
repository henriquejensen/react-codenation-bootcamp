# Integrando React com API Externa
Utilizando React, Consumo de APIs e testes unitários, você irá preencher dinâmicamente a busca com dados do servidor e gerar recomendações simples

## Tópicos
Com esse desafio, você aprenderá:

- React
- ES6
- Javascript
- Testes unitários
- Consumo de API

## Requisitos
Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

## Detalhes
Dentro da pasta `src`, você encontrará a estrutura básica do projeto React, todos arquivos necessários já estão criados assim como a estrutura em relação a `HTML` e `CSS`. Sua missão será criar a lógica dos componentes para deixá-lo dinâmico.

Nesse desafio você terá que rodar o servidor `node` que está na pasta `api-proxy/index.js`, ele servirá como proxy para a API que será consumida pela sua aplicação React. O servidor deve ser executado em uma janela de terminal diferente da aplicação React utilizando o comando: `npm run proxy` que fará um proxy para a API do *recipepuppy*. A documentação pode ser encontrada aqui http://www.recipepuppy.com/about/api/.

**Exemplo:** Utilizando o proxy, sua requisição que seria:
```
http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 
```
Ficará
```
http://localhost:3030/api?i=onions,garlic&q=omelet&p=3
```

**DICAS:** 
- Aproveite o código desenvolvido no desafio anterior para facilitar a implementação
- Cuidado com o CORS
- O ciclo de vida do componente React será importante

### Tarefas
1. Implementar o service de receitas no caminho `src/services/recipe.js`, você deverá implementar e utilizar esses métodos dentro dos componentes
2. No endpoint `/search/:searchString`, utilizar o parametro `searchString` para realizar uma busca por **NOME** na API do RecipePuppy e renderizar o componente `RecipeItems` para todos os elementos dentro dos dados de amostra;
3.  No endpoint `/search/:searchString`, ao clicar em `Previous` ou `Next` a deverá buscar respectivamente os itens da página anterior ou posterior da API;
4. Ao clicar em uma receita o usuário deverá ser direcionado para o endpoint `/recipe` com uma `prop` indicando receita selecionada para o componente `RecipePage`;
5. No endpoint `/recipe` com receita seleciona, deverá ser realizada uma consulta na API buscando por receitas que tenham os mesmos **INGREDIENTES** da receita selecionada e renderizar o componente `RecipeItems` para todos os 4 primeiros itens da lista.
6. No endpoint `/recipe` com receita seleciona, ao clicar em uma receita recomendada, a receita selecionada deverá ser a escolhida pelo usuário.
7. No endpoint `/recipe` sem receita seleciona, deverá ser redirecionado para o endpoint `/search`.

### Exemplo
![](https://s3-us-west-1.amazonaws.com/codenation-challenges/react-3/JointGracefulEastrussiancoursinghounds-max-1mb.gif)

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
Em outro terminal rode:
```
npm run proxy
```
