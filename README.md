# Ponto Ilumeo API

Esta é uma aplicação `Node` criada para resolução do case `Ponto Ilumeo`.

### Instruções para executar a aplicação:

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto executando o comando `npm install` ou `yarn`;
3. Faça uma copia do arquivo `.env.example` e a renomeie para `.env`;
4. Substitua os valores das variáveis no arquivo `.env` pelos valores correspondentes da sua máquina;
5. Execute o comando `yarn initialize-db` ou `npm rum initialize-db` para criar as tabelas e inserir dados iniciais no banco de dados informado no `passo 4`;
6. No terminal, serão exibidos os códigos dos usuários criados. Copie-os para acessá-los na aplicação `Ponto Ilumeo WEB`;
7. Execute a aplicação com `npm run dev` ou `yarn dev`;
8. A aplicação estará disponível em `http://localhost:PORT`, em que PORT é a porta informada no arquivo `.env`;

* Observações:
  - Os passos `5` e `7` irão verificar o arquivo `.env` para garantir que as variáveis estejam no formato correto.