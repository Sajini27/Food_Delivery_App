#use the base image from docker hub
FROM node:20-alpine

#set the working directory
WORKDIR /app

#copy the package.json and package-lock.jason files
COPY package*.json ./

#Install the dependencies
RUN npm install

# copy the rest of the application files
COPY . .

#expose the port your app will run on
EXPOSE 5173

#start the application
CMD [ "npm" , "run" , "dev" ]