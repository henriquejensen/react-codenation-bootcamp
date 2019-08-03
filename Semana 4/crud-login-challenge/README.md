# Desafio CRUD em React

A ideia do projeto é criar uma aplicação conforme o design abaixo. CRUD (Create, Read, Update, Delete) é o nome que damos para uma aplicação que realiza as 4 operações basicas de Criar algo, Ler algo, Atualizar algo e Deletear algo.
No caso da nossa aplicação ela deve criar, ler um produto ou todos, atualizar um produto e deletar um produto.
Os produtos são um objeto do tipo

```js
Produto = {
  name: String, // obrigatorio
  descriptions: String, // obrigatorio
  price: float, // obrigatorio
  category: Category // obrigatorio
};

Category = {
  PERSONAL: "Personal",
  SPORTS: "Sports",
  FASHION: "Fashion",
  MOTORS: "Motors"
};
```

### Tarefas

1. Tela inicial ("/") é uma rota com uma lista de todos os produtos já cadastrados e um botao no topo para criar um novo produto
2. Cada linha da tabela tera que exibir:
   - Nome
   - Descrição
   - Preço
   - Categoria
   - Acões (Serão três botões: Ver, Editar, Deletar)
3. Ao clicar em Ver produto ele redireciona para a tela de ver um produto ("/produto/:id"), que exibira todos os detalhes daquele produto
4. Ao clicar em Editar ele encaminha para a tela ("/produto/editar/:id) que sera um formulario para atualizar o produto
5. Ao clicar em Deletar ele mostrara um alert com o nome do produto e se o usuario deseja deleta-lo
6. Ao clicar em Criar um Novo Produto ele encaminha para a tela ("/produto/criar") que tem um formulario para criar um novo produto
7. Quando o usuario criar um novo produto um Alert do boostrap ira mostrar a mensagem "Produto criado com sucesso"

### Bonus:

8. Salvar todos os produtos no localStorage
9. Não deixar o usuario criar um produto com o mesmo nome de um ja criado
10. Adicionar o campo image no produto, ele sera um upload de arquivo do computador do usuario

![table de produtos](https://i.ytimg.com/vi/SJxRj2GTObM/maxresdefault.jpg)
![formulario adicionar produto](https://i0.wp.com/www.codeofaninja.com/wp-content/uploads/2014/06/create-product-with-categories-drop-down.jpg?resize=889%2C546&ssl=1)
![formulario atualizar produto](https://i2.wp.com/www.codeofaninja.com/wp-content/uploads/2011/12/update-record-form.jpg?resize=1029%2C588&ssl=1)
![tela de leitura de 1 produto](https://i2.wp.com/www.codeofaninja.com/wp-content/uploads/2014/06/read-one-record.jpg?resize=1003%2C601&ssl=1)
![feedback de um produto adicionado](https://i0.wp.com/www.codeofaninja.com/wp-content/uploads/2014/06/create-product-file-submitted.jpg?resize=1005%2C653&ssl=1)
