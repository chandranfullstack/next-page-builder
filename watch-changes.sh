#!/bin/bash

# Watch for file changes and trigger build
chokidar "pages/**/*" "components/**/*" "public/data/**" -c "npm run build && pm2 restart next-page-builder" --initial
