const apiName = 'saeeds-market-api'; // Name to use in PM2
const webName = 'saeeds-market-web'; // Name to use in PM2
const repo = 'git@gitlab.com:twitchkidd/saeeds-market.git'; // Link to your repo
const user = 'gareth'; // Server user
const path = `/home/${user}/hupdog.com`; // Path on the server to deploy to
const host = 'localhost'; // Server hostname
const apiPort = 8913; // Port to use locally on the server
const webPort = 8912; // Port to use locally on the server
const build =
  'yarn install && yarn rw build && yarn rw prisma migrate deploy && yarn rw prisma db seed'; // Build commands

module.exports = {
  apps: [
    {
      name: apiName,
      node_args: '-r dotenv/config',
      cwd: `${path}/current/`,
      script: 'yarn rw serve api',
      args: `--port ${apiPort}`,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: webName,
      node_args: '-r dotenv/config',
      cwd: `${path}/current/`,
      script: 'yarn rw serve web',
      args: `--port ${webPort}`,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user,
      host,
      ref: 'origin/main',
      repo,
      path,
      ssh_options: 'ForwardAgent=yes',
      'post-deploy': `${build} && pm2 reload pm2.config.js --env production && pm2 save`,
    },
  },
};
