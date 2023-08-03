#!/bin/bash

echo "Building Next.js application..."
npm run build

echo "Restarting PM2 process..."
pm2 start npm --name "next-page-builder" -- start --watch
