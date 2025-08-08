# Use the base image from Docker Hub
FROM node:20-alpine

# Install nodemon globally
RUN npm install -g nodemon

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 4000

# Start the app using correct script
CMD [ "npm", "run", "server" ]
