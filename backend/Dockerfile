#use the base image from docker hub
FROM node:20-alpine

RUN npm install -g nodemon

#set the working directory
WORKDIR /app

# copy the rest of the application files
COPY . .

#Install the dependencies
RUN npm install

#expose the port your app will run on
EXPOSE 4000

#start the application
CMD [ "npm" , "run" , "start" ]




