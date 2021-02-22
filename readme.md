# Criação de API
###Criação:
###### inicia o node:
`yarn init -y `
<br/>
###### Baixa o express
`yarn add express`
`yarn add @types/express -D`
<br/>
###### Baixa o ts
`yarn add typescript -D`
inicie o typescript dentro da aplicação:
`yarn tsc --init`
Após isso cria o tsconfig.json
<br/>
Transpila para js
`yarn add ts-node-dev -D`

após isso vá para package json e escreva:
` "scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node-modules src/server.ts"
  },
  `
  <br/>
  `yarn dev` 
  ele ira rodar no localhost de sua preferencia
  
