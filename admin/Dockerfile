# Use the base image from Docker Hub
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (this was missing!)
RUN npm install

# Copy app source code
COPY . .

# Expose Vite dev server port
EXPOSE 5174

# Start the frontend
CMD [ "npm", "run", "dev" ]
