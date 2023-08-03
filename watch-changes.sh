#!/bin/bash

# Watch for file changes and trigger build
chokidar "pages/**/*" "components/**/*" -c "npm run build && pm2 restart next-page-builder"
