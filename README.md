# FitnessApp

Aplicativo de fitness desenvolvido em React Native com base em protótipo do Figma.

## 🔧 Tecnologias Utilizadas

* React Native com Expo
* React Navigation (Stack e Drawer)
* Firebase Authentication & Firestore
* Hooks (useState, useEffect, custom hook)
* Consumo de API pública (JSONPlaceholder)

## 📁 Estrutura de Pastas

```
/src
  /components         # Componentes reutilizáveis (ex: Loader)
  /hooks              # Hooks personalizados (ex: useAuth)
  /navigation         # Lógica de navegação (Stack & Drawer)
  /screens            # Telas principais do app (Login, Dashboard, etc.)
  /services           # Consumo de APIs
firebaseConfig.js     # Configuração do Firebase
App.js                # Ponto de entrada do app
```

## ✅ Funcionalidades

* [x] Login e Cadastro com Firebase Authentication
* [x] Navegação com Stack + Drawer
* [x] Tela de Dashboard com lista de posts de uma API pública
* [x] Tela de Detalhes com conteúdo da API
* [x] Tela de Perfil com botão de logout
* [x] Componente de carregamento (Loader)
* [x] Hook personalizado (`useAuth`)

## 🔌 API Utilizada

* [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts): utilizada para simular a listagem de posts no Dashboard.

## 🔐 Firebase

Configure o arquivo `firebaseConfig.js` com suas credenciais do Firebase:

```js
const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_DOMINIO',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_BUCKET',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID'
};
```

## 🚀 Executando o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/fitness-app.git
```

2. Instale as dependências:

```bash
cd fitness-app
npm install
```

3. Configure o Firebase conforme explicado acima.

4. Inicie o projeto:

```bash
npx expo start
```

## 📝 Licença

Este projeto é de uso acadêmico e educacional.

---

Desenvolvido com ❤️ para fins de aprendizado.
