# Inicia a imagem a partir da imagem do node (versão 14)
FROM node:14

# Muda o working directory
WORKDIR /usr/src/app

# Copia as dependências do front-end
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código para a imagem
COPY . .

# Expõe a portas para acesso remoto
EXPOSE 3000 8000

# Executa o front-end
CMD ["npm", "run", "start"]
