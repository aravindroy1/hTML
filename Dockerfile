FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# Copy everything (including the public folder)
COPY . . 
EXPOSE 3000
CMD ["node", "app.js"]