module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'http://172.232.96.232/',
      ref  : 'origin/main',
      repo : 'https://github.com/chandranfullstack/next-page-builder.git',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
