# 🏋️ Treino App

Aplicativo web para gerenciamento de treinos semanais, com autenticação Firebase e organização por dia da semana.

## Tecnologias

- React 19 + Vite
- Firebase (Auth + Firestore)
- Styled Components
- Framer Motion
- React Router DOM v7

## Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/treino-app.git
cd treino-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo de exemplo e preencha com suas credenciais do Firebase:

```bash
cp .env.example .env
```

Acesse o [Firebase Console](https://console.firebase.google.com), selecione seu projeto,
vá em **Configurações do projeto > Seus apps** e copie as chaves para o `.env`.

> ⚠️ **Nunca commite o arquivo `.env`!** Ele já está no `.gitignore`.

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Build para produção

```bash
npm run build
```

## Deploy na Vercel

Configure as variáveis de ambiente no painel da Vercel:
**Settings > Environment Variables** — adicione todas as chaves do `.env.example`.

O arquivo `vercel.json` na raiz já configura os headers de cache.

## Estrutura do projeto

```
src/
├── componentes/       # Cadastro, TreinoForm, TreinoItem
├── firebase/          # Configuração do Firebase
├── services/          # authService, treinosService
├── styles/            # Styled components e tema
├── App.jsx
├── Home.jsx
├── Login.jsx
└── main.jsx
```

## Segurança

- Credenciais do Firebase via variáveis de ambiente (`VITE_*`)
- Ownership validation em todas as operações de escrita/deleção
- Firestore Security Rules deve ser configurado para `/users/{uid}/workouts`
