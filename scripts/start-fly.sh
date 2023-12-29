#!/bin/sh

# Script to run when deploying to fly.io
# This creates or migrates the database on your fly volume and then starts the app
set -e

echo "Running start-fly script..."

DATA_FOLDER=/data
DB_FILE=$DATA_FOLDER/sqlite.db
SCHEMA_FILE=/app/scripts/schema.sql

if [ ! -d "$DATA_FOLDER" ]; then
    echo "$DATA_FOLDER is not a directory, initializing database"
    mkdir "$DATA_FOLDER"
fi

if [ ! -e "$DB_FILE" ]; then
    echo "$DB_FILE does not exist, initializing database"
    touch "$DB_FILE"
    sqlite3 "$DB_FILE" < "$SCHEMA_FILE"
fi

node -r dotenv/config /app/scripts/start-app.js
