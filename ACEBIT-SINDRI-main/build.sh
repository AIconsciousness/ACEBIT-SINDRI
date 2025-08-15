#!/bin/bash
echo "Installing dependencies with legacy peer deps..."
npm ci --legacy-peer-deps --production=false

echo "Building the application..."
npm run build

echo "Build completed successfully!" 