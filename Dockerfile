# FROM node:current-slim

# WORKDIR /hackney-hr-app
# COPY package*.json /hackney-hr-app
# RUN npm install

# EXPOSE 3000

# COPY . /hackney-hr-app
# CMD [ "npm", "start"]

###############################
# pull official base image
FROM node:current-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]