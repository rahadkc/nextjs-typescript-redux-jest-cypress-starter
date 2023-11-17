# Use the official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Define the command to start your Next.js app
CMD ["npm", "run", "dev"]
