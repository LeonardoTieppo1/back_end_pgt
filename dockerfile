FROM node:20-lts

WORKDIR /app

# Copy all project files (excluding .env)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy environment variables
COPY .env .

EXPOSE 3000

CMD ["node", "index.js"]
