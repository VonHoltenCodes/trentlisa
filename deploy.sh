#!/bin/bash

# Wedding Website Deployment Script
# For TrentLisa.com

set -e  # Exit on error

echo "🚀 Starting TrentLisa.com Wedding Website..."

# Check if node_modules exists, install if not
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean any existing .next build
if [ -d ".next" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf .next
fi

# Build the production version
echo "🔨 Building production version..."
npm run build

# Start the production server
echo "✨ Starting production server..."
npm run start &

# Save the process ID
echo $! > server.pid

# Wait for server to start
sleep 3

# Check if server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Server is running at http://localhost:3000"
    echo "🎉 Wedding website deployed successfully!"
    echo "PID: $(cat server.pid)"
else
    echo "❌ Server failed to start"
    exit 1
fi