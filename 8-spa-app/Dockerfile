FROM node:14-slim
WORKDIR /react-app
COPY app/ .
RUN npm install
RUN npm i -g live-server
RUN npm run build
EXPOSE 8080
CMD ["live-server","dist"]