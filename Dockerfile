FROM node:20-alpine as builder

ENV NODE_ENV build

USER node

# Instalar dependências do CORE
WORKDIR /home/node/core
COPY core/package*.json ./
RUN npm ci
COPY --chown=node:node core/tsconfig*.json ./
COPY --chown=node:node core/src ./src
RUN npm run build

# Instalar dependências do BACKEND
WORKDIR /home/node/backend
COPY backend/package*.json ./
RUN npm ci

# Copiar o restante dos arquivos necessários
COPY --chown=node:node backend/prisma ./prisma
COPY --chown=node:node backend/tsconfig*.json ./
COPY --chown=node:node backend/src ./src

# Copiar BUILD do core para node_modules do backend
RUN cp -r /home/node/core/dist /home/node/backend/node_modules/@core

# Gerar Prisma, buildar backend e remover dev-deps
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
