    FROM node:alpine
    WORKDIR /usr/work/
    Run npm install typescript -g
    COPY . .