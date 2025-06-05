#!/bin/bash

# Development Server Script
# For TrentLisa.com

echo "🚀 Starting TrentLisa.com development server..."

# Kill any existing Next.js processes
echo "🧹 Cleaning up existing processes..."
pkill -f "next dev" || true

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server in background
echo "💻 Starting development server..."
nohup npm run dev > dev.log 2>&1 &

# Save the process ID
echo $! > dev.pid

# Wait for server to start
echo "⏳ Waiting for server to start..."
sleep 5

# Check if server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Development server is running at http://localhost:3000"
    echo "📝 Logs are available in dev.log"
    echo "PID: $(cat dev.pid)"
    echo ""
    echo "To stop the server, run: ./stop-dev.sh"
else
    echo "❌ Server failed to start. Check dev.log for errors"
    cat dev.log
    exit 1
fi