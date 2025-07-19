FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 19000
CMD ["npm", "start"]