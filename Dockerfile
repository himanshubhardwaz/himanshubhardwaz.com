# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.17.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3 curl

# Install SQLite
RUN apt-get install -y sqlite3

# Install pnpm using corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install node modules
COPY --link .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy application code
COPY --link . .

# Build application
RUN mkdir /data && pnpm run build

# Remove development dependencies
RUN pnpm prune --prod

# Final stage for app image
FROM base

# Install SQLite in the final image
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y sqlite3

# Install pnpm in the final image using corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy built application
COPY --from=build /app /app

# Setup sqlite3 on a separate volume
RUN mkdir -p /data
VOLUME /data

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
ENV DATABASE_URL="file:///data/sqlite.db"
CMD [ "node", "index.js" ]
