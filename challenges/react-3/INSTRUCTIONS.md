# Passos da solução

1. Modificar o script proxy do `package.json` para rodar o `index.js` e não o `server.js`
   `"proxy": "node ./api-proxy/index.js"`
2. Instalar as bibliotecas necessárias para rodar o proxy. Instala-las como devDependencies

```
  "devDependencies": {
    "axios": "^0.19.0",
    "restify": "^8.4.0",
    "restify-cors-middleware": "^1.1.1"
  }
```

3. Rodar o script `proxy` do `package.json` e testá-lo no Postman ou Imsomnia e no navegador

4. No `App` passe o `searchString` da rota (`match.params.searchString`) para a `Home`

5. Chamar a função `getRecipesByName` no `componentDidMount` dentro da `Home` passando o props `searchString`

6. Colocar o retorno do `getRecipesByName` dentro do state da `Home`

7. Retornar os valores da pasta `sample_data/recipes.json` pela `getRecipesByName`, valor retornado deve ser `recipes.results`

8. Renderizar o `RecipeItem` da `Home` com o `this.state.recipes`

9. Fazer o retorno de `Nenhuma receita encontrada` quando o `this.state.recipes` estiver vazio

10. Criar o state para `page` na Home

11. Criar o `handleNextPage` e o `handlePreviousPage` para atualizar o state

12. No `handlePreviousPage` somente atualizar o state se `page` é maior que 0

13. Retirar a lógica do `componentDidMount` e colocar num método da `Home` chamado `getRecipes`

14. Chamar `getRecipes` no `componentDidMount`, `handleNextPage` e `handlePreviousPage` (nesse deve ser chamado somente quando `page` for maior que 0)

15. Criar um `fetch` para a API dentro do `getRecipesByName` e testar o retorno

16. Retornar o valor do `fetch` para a `Home` e colocar dentro do `state`, editar `RecipePage` para receber uma `Promise`

17. Passar `page` do state da `Home` para o `getRecipesByName`

18. Editar a url do `fetch` no `getRecipesByName` para receber como parametro o `name` e a `page`

19. Criar na `App` o state para `selectedRecipe` e um `handleSelectedRecipe`

20. Passar o `handleSelectedRecipe` para a `Home` e dela para `RecipeItem`. No `RecipeItem` colocar esta função no `onClick` do `Link`

21. Passar o `selectedRecipe` para a `RecipePage`

22. No constructor da `RecipePage` passar o `recipe` vindo como props para o state

23. Criar o state para `recipes` no `RecipePage`

24. Renderizar o `RecipeItem` do `RecipePage` com o `this.state.recipes`

25. Chamar a função `getRecipesByIngredients` no `componentDidMount` dentro da `RecipePage` passando o props `ingredients` do recipe

26. Colocar o retorno de `getRecipesByIngredients` no state de `recipes` da `RecipePage`

27. Criar um `fetch` para a API dentro do `getRecipesByIngredients` e retornar da mesma forma que `getRecipesByName` faz, editar `RecipePage` para receber uma `Promise`

28. Passar o método `handleSelectedRecipe` para `RecipePage` e dele para o `RecipeItem`

29. Verificar se o state de `RecipePage` possui um recipe, senão, redirecionar para a pagina principal

30. Ajustar o rota de `getRecipesByName` para o parametro da query ser `q`. Exemplo: `http://localhost:3030/api?q=lemon&p=3`

31. Colocar um `Link` para `Home` no logo da `NavBar`
