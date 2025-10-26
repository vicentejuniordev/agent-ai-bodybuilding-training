# AI agent para um treino personalizado🏋
## Visão Geral
Um projeto bem simples para integrar em qualquer aplicação. O agente consiste em presonalizar um treino para a pessoa que está interessada na academia, ou já treina há um tempo mais está indecisa do que fazer. O agente sugere a partir de alguns dados um treino personalizado partindo do seu principal objetivo.

--- 
## 🛠️ Tecnologias Utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## ⚙️ Instalação e Execução

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (versão 21 ou superior)
- [NPM](https://www.npmjs.com) 

---

### 🚀 Clonando o repositório

```bash
git clone https://github.com/seuusuario/nomedoprojeto.git
```
---
### 📦 Instalando dependências
```bash
npm install
```
---
### ⚙️ Configurando variáveis ambiente
Siga o exemplo do arquivo .env.example:
```bash
PORT=
GEMINI_API_KEY=
```
---
 ### 👀 Algumas observações de config do agent
 Nessa pasta knowledge, está onde fica os dados ou diretrizes que o agente vai buscar para informar o treino personalizado...

---
 ### 👷 Arquitetura da Aplicação
 A arquitura escolhida foi um MVC bem básico seguindo esse fluxo:
 ```text
 Controller -> Service + IA -> Return
 ```

 Em relação a a própria api, implementei uma arquitetura **REST**.

 Ao que diz a estrutura das pastas, possuimos essa organização:
 \`\`\`plaintext


 \`\`\`


 ```plaintext
📁 src/
 ┣ 📂 routes/     
 ┣ 📜 agent.ts
 ┣ 📜 prompt.ts
 ┣ 📜 types.ts
 ┣ 📜 server.ts    
 ```