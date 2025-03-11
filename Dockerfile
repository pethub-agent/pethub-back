# Use a imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instala as dependências
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Gera o cliente do Prisma
RUN npx prisma generate

# Compila o projeto TypeScript
RUN npm run build

# Expõe a porta que o NestJS vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]