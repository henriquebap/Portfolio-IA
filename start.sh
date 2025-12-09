#!/bin/bash
set -e

# Navigate to the portfolio directory
cd portfolio

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Build the application
echo "Building application..."
npm run build

# Start the preview server
echo "Starting preview server..."
npm run start
