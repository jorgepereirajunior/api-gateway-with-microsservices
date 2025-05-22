# 🧩 Autenticação Centralizada com API Gateway e Microsserviços usando NestJS + Nx

Este projeto demonstra como implementar uma **autenticação centralizada** usando **microsserviços NestJS** organizados em um **monorepo Nx**, com um **API Gateway** intermediando as requisições dos clientes.

---

## 🎯 Objetivo

O objetivo principal é **entender o funcionamento de microsserviços com autenticação centralizada**. A aplicação simula um fluxo básico onde o cliente se autentica através do API Gateway, que se comunica com um serviço de autenticação. Após autenticado, o cliente pode acessar o serviço de usuários, também via Gateway.

---

## 🧱 Arquitetura

```
               ┌────────────────┐
               │   Cliente    │
               └─────┌─────┘
                      │
                      ▼
             ┌───────────────────┐
             │   API Gateway    │
             └───┌───┌───────┘
                   │     │
     ┌───────────────┘     └───────────────┐
     ▼                                  ▼
┌─────────────────┐              ┌────────────────────┐
│ Auth Service  │              │ User Service   │
│ (Login/JWT)   │              │ (Perfil Usuário)│
└───────────────┘              └───────────────┘
```

---

## 🛠 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** – Framework backend com suporte a microsserviços.
- **[Nx](https://nx.dev/)** – Gerenciador de monorepos usado para organizar os serviços.
- **Yarn** – Gerenciador de pacotes.
- **JWT** – Token de autenticação via JSON Web Token.
- **HTTP** – Comunicação síncrona entre os microsserviços.

---

## 📁 Estrutura de Pastas

```
apps/
├── api-gateway/
├── auth-service/
└── user-service/
```

Cada pasta representa um microsserviço NestJS separado, gerenciado pelo Nx.

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Rode todos os serviços

```bash
yarn start:all
```

Ou rode separadamente:

```bash
nx serve api-gateway
nx serve auth-service
nx serve user-service
```

---

## 📌 Endpoints de Exemplo

### 🔐 Autenticação (`Auth Service` via `API Gateway`)

- `POST /auth/login`

```json
{
  "username": "admin",
  "password": "123456"
}
```

**Retorno esperado:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."
}
```

### 👤 Acesso ao Perfil (`User Service` via `API Gateway`)

- `GET /user/profile`
  **Cabeçalho necessário:**

```http
Authorization: Bearer <access_token>
```

---

## ⚠️ Observações Importantes

- Este projeto é apenas para **fins educacionais**.
- Não implementa criptografia de senhas, nem segurança avançada com refresh tokens ou roles.
- JWT é assinado com segredo estático e mantido no código.

---

## 📚 Aprendizados

- Organização de múltiplos serviços usando **Nx Monorepo**
- Comunicação entre microsserviços usando **HTTP**
- Implementação de **API Gateway**
- Controle de acesso com **JWT + Guards no NestJS**

---

## 📌 Futuras Melhorias

- Implementar mensagens assíncronas com Kafka ou RabbitMQ
- Adicionar banco de dados a cada microsserviço
- Separar responsabilidades em camadas (Domain, Application, Infrastructure)
- Autenticação com refresh tokens
- Testes unitários e e2e

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
