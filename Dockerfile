FROM node:lts-alpine AS builder
WORKDIR /opt/app

COPY . .

RUN npm install --only=prod

FROM node:lts-alpine
WORKDIR /opt/app

COPY --chown=1000:1000 --from=builder /opt/app .

USER node

CMD ["npm", "start"]