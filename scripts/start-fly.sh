#!/bin/sh

# Script to run when deploying to fly.io
# This creates or migrates the database on your fly volume and then starts the app
set -e

FOLDER=/database
if [ ! -d "$FOLDER" ]
then
    echo "$FOLDER is not a directory, initializing database" 
    mkdir /database
    touch /database/analytics.db
fi

sqlite3 /database/analytics.db < /app/scripts/schema.sql
node -r dotenv/config /app/scripts/start-app.js
