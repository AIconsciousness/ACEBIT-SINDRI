#!/bin/bash
echo "Installing dependencies..."
npm ci --only=production

echo "Building the application..."
npm run build

echo "Build completed successfully!" 