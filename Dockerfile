FROM node:15.13-alpine
WORKDIR /imosaid
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
CMD ["npm","start"]