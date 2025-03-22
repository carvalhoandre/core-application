FROM node:20-alpine as builder

ENV NODE_ENV build

USER node

# Construindo o módulo @core primeiro
WORKDIR /home/node/core
COPY core/package*.json ./
RUN npm ci
COPY --chown=node:node core/tsconfig*.json ./
COPY --chown=node:node core/src ./src
RUN npm run build

# Backend com NestJS
WORKDIR /home/node/backend
COPY backend/package*.json ./
RUN npm ci

# Copiando arquivos necessários do backend
COPY --chown=node:node backend/prisma ./prisma
COPY --chown=node:node backend/tsconfig*.json ./
COPY --chown=node:node backend/src ./src

# Copiando o build do @core para dentro do node_modules do backend
RUN cp -r /home/node/core/dist /home/node/backend/node_modules/@core

# Gerando Prisma e buildando backend
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/backend/node_modules ./node_modules/
COPY --from=builder --chown=node:node /home/node/backend/dist ./dist/

CMD ["node", "dist/src/main.js"]
