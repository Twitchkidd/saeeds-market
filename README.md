# Saeed's International Market and Cafe

## Dev

Todo: difference between njjkgeerts self-hosting and the official docs, `yarn add workspace api @redwoodjs/api-server`
Todo: do I need to `sudo -u postgres psql` and create the db 'saeeds'?

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Open a browser to `http://localhost:8912` to see the web app. Lambda functions run on `http://localhost:8913` and are also proxied to `http://localhost:8912/api/*`. TODO: Is that an accurate thing to say about the dev environment, redwood.toml is changed to it, test
