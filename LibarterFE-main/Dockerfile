# FMI-Project/LibarterFE-main/Dockerfile
# Use an official Node runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app/LibarterFE-main

# Copy package.json and package-lock.json to the container
COPY libarter-fe/src/package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY libarter-fe/ ./

# Expose the port that the app will run on
EXPOSE 80

# Health check endpoint (add appropriate logic in your application)
HEALTHCHECK --interval=30s --timeout=10s CMD curl --fail http://localhost:80/health || exit 1

# Command to run your application
CMD ["npm", "start"]
