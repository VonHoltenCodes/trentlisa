#!/bin/bash

# Stop Development Server Script

echo "🛑 Stopping development server..."

if [ -f dev.pid ]; then
    PID=$(cat dev.pid)
    if ps -p $PID > /dev/null; then
        kill $PID
        echo "✅ Server stopped (PID: $PID)"
        rm dev.pid
    else
        echo "⚠️  No server process found with PID: $PID"
        rm dev.pid
    fi
else
    echo "⚠️  No dev.pid file found"
    echo "Attempting to find and kill Next.js processes..."
    pkill -f "next dev" || echo "No Next.js processes found"
fi