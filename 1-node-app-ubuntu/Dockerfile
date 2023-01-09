# KOMUT ARGUMAN
FROM ubuntu:18.04
RUN sed -i s/http/ftp/ /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install nodejs -y
WORKDIR /opt/node-app
COPY . /opt/node-app
ENV channelName=kablosuzkedim
# COPY . .
# CMD ["node","/opt/node-app/index.js"]
CMD ["node","index.js"]