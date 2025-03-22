FROM node:20-alpine as builder

ENV NODE_ENV build

# NÃO trocar usuário aqui para evitar conflitos de permissão

# Construindo o módulo @core primeiro
WORKDIR /home/node/core
COPY core/package*.json ./
RUN npm ci
COPY core/tsconfig*.json ./
COPY core/src ./src
RUN npm run build

# Backend com NestJS
WORKDIR /home/node/backend
COPY backend/package*.json ./
RUN npm ci

# Copiando arquivos necessários do backend
COPY backend/prisma ./prisma
COPY backend/tsconfig*.json ./
COPY backend/src ./src

# Copiando o build do @core para node_modules do backend
RUN cp -r /home/node/core/dist /home/node/backend/node_modules/@core

# Gerando Prisma e buildando backend
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# Ajuste final das permissões
RUN chown -R node:node /home/node/backend

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/backend/node_modules ./node_modules/
COPY --from=builder --chown=node:node /home/node/backend/dist ./dist/

CMD ["node", "dist/backend/src/main.js"]
