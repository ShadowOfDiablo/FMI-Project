FROM node:14

WORKDIR /usr/src/app

COPY libarter-fe/package*.json ./
COPY libarter-fe/package-lock.json ./
COPY libarter-fe/tailwind.config.js ./

RUN npm install

# Add the missing dependencies to devDependencies
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
RUN npm install --save-dev react-dom react-router-dom @fortawesome/fontawesome-svg-core

COPY libarter-fe/ ./

# Expose the port that the app will run on
EXPOSE 80

# Command to run your application
CMD ["npm", "start"]
