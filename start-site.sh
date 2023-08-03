#!/bin/bash

# Start the site with PM2
pm2 start npm --name "next-page-builder" -- start --watch
