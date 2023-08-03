#!/bin/bash

# Start the site using PM2
./start-site.sh &

# Watch for file changes and trigger build
./watch-changes.sh
