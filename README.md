# 🛒 Ecommerce Next.js Fullstack App

Um aplicativo de ecommerce completo e moderno desenvolvido com Next.js 15, React 19, TypeScript e integrado com Stripe para pagamentos seguros.

## 🚀 Sobre o Projeto

Este é um ecommerce fullstack que oferece uma experiência de compra completa, desde a navegação de produtos até o checkout seguro. O projeto utiliza as mais recentes tecnologias do ecossistema React/Next.js para proporcionar performance otimizada e uma excelente experiência do usuário.

## ✨ Funcionalidades

- 🏪 **Catálogo de Produtos**: Listagem e detalhamento de produtos integrados com Stripe
- 🛒 **Carrinho de Compras**: Sistema de carrinho persistente com Zustand
- 💳 **Checkout Seguro**: Integração completa com Stripe para processamento de pagamentos
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- 🎨 **UI Moderna**: Componentes elegantes com Tailwind CSS e Radix UI
- ⚡ **Performance Otimizada**: Server-side rendering e otimizações do Next.js 15
- 🔄 **Estado Global**: Gerenciamento de estado com Zustand e persistência local

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - [Next.js 15](https://nextjs.org/) - Framework React com App Router
  - [React 19](https://reactjs.org/) - Biblioteca para interfaces de usuário
  - [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para JavaScript
  - [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
  - [Radix UI](https://www.radix-ui.com/) - Componentes acessíveis e customizáveis

- **Estado e Dados:**
  - [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - Gerenciamento de estado simples e eficiente
  - [Stripe](https://stripe.com/) - Plataforma de pagamentos

- **Estilização e Ícones:**
  - [Lucide React](https://lucide.dev/) - Ícones modernos
  - [Heroicons](https://heroicons.com/) - Ícones SVG
  - [class-variance-authority](https://cva.style/) - Variantes de componentes



## ⚙️ Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone [url-do-repositorio]
   cd ecommerce-nextjs-fullstack-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

5. **Acesse a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador


## 💳 Configuração do Stripe

Para utilizar o sistema de pagamentos, você precisará:

1. Criar uma conta no [Stripe](https://stripe.com/)
2. Obter as chaves da API (Secret Key e Publishable Key)
3. Configurar as variáveis de ambiente
4. Criar produtos no dashboard do Stripe


