#!/bin/bash

# Navigate to the project directory (optional: change if needed)
cd "$(dirname "$0")"

echo "🔄 Pulling latest code from Git..."
git pull origin main

# Stop and remove the existing container if it's running
echo "🛑 Stopping any existing container..."
docker stop digimark || true
docker rm digimark || true

# Pull the latest Docker image
echo "🐳 Pulling latest Docker image..."
docker pull basu6/digimark

# Run the container with env and port mapping
echo "🚀 Starting DigiMark container..."
docker run -d \
  --name digimark \
  --env-file .env.local \
  -p 3000:3000 \
  basu6/digimark

echo "✅ DigiMark is running at: http://localhost:3000"
