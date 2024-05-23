# Use official Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the public directory (containing index.html) to the container
COPY public /usr/src/app/public

# Copy rest of the application to container
COPY . .

# Run npm build to build your application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
