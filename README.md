openapi: 3.1.0
info:
  title: Food API
  description: API para gerenciar alimentos, incluindo operações de criar, listar, atualizar e deletar alimentos.
  version: 1.0.0
servers:
  - url: http://localhost:3000
    description: Servidor local

paths:
  /foods:
    get:
      summary: Listar todos os alimentos
      description: Retorna uma lista de todos os alimentos armazenados.
      responses:
        '200':
          description: Lista de alimentos retornada com sucesso
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Food'
        '500':
          description: Erro no servidor
    post:
      summary: Criar um novo alimento
      description: Adiciona um novo alimento ao banco de dados.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/NewFood'
      responses:
        '201':
          description: Alimento criado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Food'
        '500':
          description: Erro no servidor

  /foods/{id}:
    get:
      summary: Obter um alimento por ID
      description: Retorna detalhes de um alimento específico pelo ID.
      parameters:
        - name: id
          in: path
          required: true
          description: ID do alimento
          schema:
            type: integer
      responses:
        '200':
          description: Alimento retornado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Food'
        '404':
          description: Alimento não encontrado
        '500':
          description: Erro no servidor
    put:
      summary: Atualizar um alimento por ID
      description: Atualiza as informações de um alimento específico.
      parameters:
        - name: id
          in: path
          required: true
          description: ID do alimento
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/NewFood'
      responses:
        '200':
          description: Alimento atualizado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Food'
        '404':
          description: Alimento não encontrado
        '500':
          description: Erro no servidor
    delete:
      summary: Deletar um alimento por ID
      description: Remove um alimento específico do banco de dados.
      parameters:
        - name: id
          in: path
          required: true
          description: ID do alimento
          schema:
            type: integer
      responses:
        '204':
          description: Alimento deletado com sucesso
        '404':
          description: Alimento não encontrado
        '500':
          description: Erro no servidor

components:
  schemas:
    Food:
      type: object
      properties:
        id:
          type: integer
          example: 1
        name:
          type: string
          example: Frango
        protein:
          type: integer
          example: 25
        carb:
          type: integer
          example: 0
        fat:
          type: integer
          example: 5
        calories:
          type: integer
          example: 150
    NewFood:
      type: object
      properties:
        name:
          type: string
          example: Frango
        protein:
          type: integer
          example: 25
        carb:
          type: integer
          example: 0
        fat:
          type: integer
          example: 5
        calories:
          type: integer
          example: 150

2. Pesquisa e Apresentação sobre a Pilha de Tecnologias
-Pilha de Tecnologias Utilizadas:
Node.js: Plataforma de execução para construir a API com JavaScript, conhecida por ser altamente escalável e eficiente, usando um modelo de I/O assíncrono e orientado a eventos.
Express.js: Framework para Node.js que facilita o desenvolvimento de APIs RESTful, oferecendo recursos simplificados para o roteamento e middleware.
Sequelize: ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados SQL, fornecendo uma maneira de definir modelos, gerenciar migrações e executar consultas complexas de maneira mais intuitiva.

-Comparação com Ferramentas e Tendências Mais Utilizadas:
Conteúdo Estático e Renderização no Servidor (SSR)
Next.js: Um framework popular para SSR e geração de sites estáticos. Enquanto isso, APIs REST tradicionais, como a construída com Express, são focadas em operações CRUD e não na entrega de conteúdo dinâmico.
Microsserviços
A arquitetura de microsserviços permite dividir a aplicação em serviços menores e independentes, ao contrário da abordagem monolítica. O design de API REST com Express é um componente comum em uma arquitetura de microsserviços, favorecendo a escalabilidade e a manutenção.
Middleware Descentralizado e Blockchain
Tecnologias descentralizadas, como contratos inteligentes em blockchains, oferecem um contraste interessante com abordagens tradicionais de API. Por exemplo, middleware em blockchain é usado para validar e executar transações sem um servidor central, diferindo da abordagem centralizada de Express.js.

-Considerações Finais:
Desafios e Oportunidades: Integrações com serviços descentralizados podem trazer mais segurança e transparência. Além disso, o uso de SSR pode melhorar o desempenho e a SEO de aplicativos front-end.
Aplicação Prática: A arquitetura modular da API e a flexibilidade da pilha baseada em Node.js facilitam a adaptação às necessidades de escalabilidade e segurança.
