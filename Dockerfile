# Utilisez une image Node.js de base (ajustez la version si nécessaire)
FROM node:18-alpine

# Créer le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source dans le conteneur
COPY . .

# Exposer le port de votre application (par exemple, 3000)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
