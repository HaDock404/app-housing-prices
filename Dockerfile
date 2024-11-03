FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16 AS production

RUN npm install -g serve

COPY --from=builder /app/build /app/build

EXPOSE 4000

CMD ["serve", "-s", "/app/build", "-l", "4000"]
