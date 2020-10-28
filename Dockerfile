FROM node:current-slim

WORKDIR /hackney-hr-app
COPY package*.json /hackney-hr-app
RUN npm install

EXPOSE 3000

COPY . /hackney-hr-app
CMD [ "npm", "start"]