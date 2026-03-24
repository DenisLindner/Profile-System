# Profile System

Um projeto prático focado na construção de um sistema de autenticação e gerenciamento de perfil de usuário de forma estruturada e profissional. 

## 📖 Contexto

Este projeto foi desenvolvido com o propósito de aprofundar os conhecimentos em autenticação e autorização utilizando o ecossistema **NestJS**. O desenvolvimento abordou a criação de mecânicas robustas na proteção de rotas, como a utilização de **Guardiões (Guards)** e **Decorators** customizados. Além disso, foram aplicados conceitos fundamentais para a liberação de recursos baseados na autorização de usuários e emissão de tokens JWT.

## 🎯 Objetivos

- **Autenticação Segura:** Tratamento e hash de senhas utilizando o `bcrypt`.
- **Autorização com JWT:** Geração e validação de tokens para controlar os acessos através do `@nestjs/jwt`.
- **Proteção de Rotas:** Criação e aplicação de Guards no NestJS para impedir o acesso de usuários não autorizados a endpoints protegidos.
- **Validação de Dados:** Uso de `class-validator` e `class-transformer` para assegurar que apenas dados válidos entrem na aplicação.

## 💻 Stack e Bibliotecas

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Framework:** [NestJS](https://nestjs.com/)
- **Banco de Dados & ORM:** [Prisma ORM](https://www.prisma.io/) utilizando [SQLite](https://sqlite.org/) (`@prisma/adapter-better-sqlite3`)
- **Segurança:** `bcrypt`, `@nestjs/jwt`
- **Validação:** `class-validator`, `class-transformer`

## 🔌 Endpoints

### Autenticação (`/auth`)
- `POST /auth/register` - Criação de uma nova conta de usuário.
- `POST /auth/login` - Autenticação de usuário e retorno do token JWT.

### Usuários (`/users`)
*(Todas as rotas abaixo exigem o token JWT no header `Authorization: Bearer <token>`)*
- `GET /users/me` - Retorna os dados do perfil do usuário autenticado.
- `PATCH /users/me` - Atualiza as informações do perfil do usuário autenticado.
- `DELETE /users/me` - Deleta a conta do usuário autenticado.

## 🚀 Como Rodar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina.
- Gerenciador de pacotes (`npm` ou `yarn`).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DenisLindner/profile-system.git
   cd profile-system
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto copiando a base do `.env.example`:
   ```bash
   cp .env.example .env
   ```
   - *Certifique-se de configurar a variável `DATABASE_URL` e o segredo do JWT corretamente no seu arquivo `.env`.*

4. **Prepare o banco de dados (Prisma):**
   ```bash
   npx prisma migrate dev
   ```
   *(Caso não esteja utilizando migrations, utilize `npx prisma db push`)*

5. **Inicie a aplicação:**
   ```bash
   npm run dev
   ```
   *A API estará rodando por padrão na porta `3333` (http://localhost:3333).*

## 📞 Contato

Desenvolvido por **Denis Lindner**. Se quiser bater um papo, tirar dúvidas ou acompanhar meus estudos, sinta-se à vontade para entrar em contato:

- **GitHub:** [DenisLindner](https://github.com/DenisLindner)
- **LinkedIn:** [Denis Lindner](https://www.linkedin.com/in/denis-lindner)
- **E-mail:** [lindnerdenis19@gmail.com](mailto:lindnerdenis19@gmail.com)
