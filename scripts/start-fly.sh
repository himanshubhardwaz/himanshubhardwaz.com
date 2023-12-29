# #!/bin/sh

# # Script to run when deploying to fly.io
# # This creates or migrates the database on your fly volume and then starts the app
# set -e

# echo "Executing start-fly.sh"

# DATABASE_DIR=/data
# DATABASE_FILE=$DATABASE_DIR/sqlite.db

# # Check if the database file exists
# if [ -f "$DATABASE_FILE" ]; then
#     echo "$DATABASE_FILE exists, skipping initialization"
# else
#     # Create the database directory if it doesn't exist
#     if [ ! -d "$DATABASE_DIR" ]; then
#         echo "$DATABASE_DIR is not a directory, creating it"
#         mkdir -p "$DATABASE_DIR"
#     fi

#     # Print debug information
#     ls -la "$DATABASE_DIR"

#     # Touch the database file
#     echo "$DATABASE_FILE does not exist, initializing database"
#     touch "$DATABASE_FILE"

#     # Add write permissions to the database file
#     chmod +w "$DATABASE_FILE"

#     # Print debug information after touching the file
#     ls -la "$DATABASE_DIR"

#     # Run schema migration
#     sqlite3 "$DATABASE_FILE" < /app/scripts/schema.sql

#     # Print debug information after migration
#     ls -la "$DATABASE_DIR"
#     ls -la "$DATABASE_FILE"
# fi

# # Start the Node.js application
# node -r dotenv/config /app/scripts/start-app.js


#!/bin/sh

# Script to run when deploying to fly.io
# This creates or migrates the database on your fly volume and then starts the app
set -e

echo "Executing start-fly.sh"

DATABASE_DIR=/data
DATABASE_FILE=$DATABASE_DIR/sqlite.db

# Check if the database file exists
if [ -f "$DATABASE_FILE" ]; then
    echo "$DATABASE_FILE exists, deleting and reinitializing"
    
    # Delete the existing database file
    rm "$DATABASE_FILE"
else
    # Create the database directory if it doesn't exist
    if [ ! -d "$DATABASE_DIR" ]; then
        echo "$DATABASE_DIR is not a directory, creating it"
        mkdir -p "$DATABASE_DIR"
    fi
fi

# Print debug information
ls -la "$DATABASE_DIR"

# Touch the database file
echo "Initializing database"
touch "$DATABASE_FILE"

# Print debug information after touching the file
ls -la "$DATABASE_DIR"

# Add write permissions to the database file
chmod +w "$DATABASE_FILE"

# Run schema migration
sqlite3 "$DATABASE_FILE" < /app/scripts/schema.sql

# Print debug information after migration
ls -la "$DATABASE_DIR"
ls -la "$DATABASE_FILE"

# Start the Node.js application
node -r dotenv/config /app/scripts/start-app.js
