FROM node:20

WORKDIR /app

# Copy all project files (excluding .env)
COPY . .

# Install dependencies
RUN npm install

# Copy environment variables
COPY .env .

EXPOSE 3000

CMD ["node", "index.js"]