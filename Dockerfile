FROM node:20 AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

ARG API_ENDPOINT
ENV API_ENDPOINT $API_ENDPOINT

RUN pnpm install
RUN pnpm build


FROM node:20-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/.output .output
COPY --from=builder /app/node_modules node_modules

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
