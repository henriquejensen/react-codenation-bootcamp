# Aplicação para explicar Redux

### Introdução

Redux é uma biblioteca que utilizamos para administrar o estado da nossa aplicação. Ele é baseado na arquitetura Flux. Suas carateristicas são:

- Ele possui um objeto global à nossa aplicação que chamamos de store
- Para um componente ter acesso a este estado (objeto global) ele deve se conectar a store
- Toda a alteração e leitura dos dados da store é feita através do conceito de publisher e subscriber
- Os publisher no redux chamanos de actions, e elas são basicamente funções que retornam um objeto puro Javascript com um type e um payload
- Os subscriber no redux chamamos de reducers, ela são funções que fazem um switch case com o type retornado pelas actions e retornam o state da store
- A união (combiner) de todos os reducers geram a store

### Instalação

`npm install redux react-redux`
Para utilizarmos o redux na nossa aplicação precisamos instalar a biblioteca `redux` e a biblioteca `react-redux` que ira fazer a conexão entre o redux e os nossos componentes React.
