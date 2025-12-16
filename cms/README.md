# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
```

### deployment

Build the container first:
```
docker build \
  --build-arg NODE_ENV=production \
  -t ghcr.io/elektrolytmangel/hydr0.garden-cms:latest \
  -f Dockerfile.prod .
```

login to container registry with read/write access token [issue token](ttps://github.com/settings/tokens/new?scopes=write:packages) | [github cr doku](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

```
export CR_PAT=YOUR_TOKEN

echo $CR_PAT | docker login ghcr.io -u elektrolytmangel --password-stdin
```

push to github container registry
```
docker push ghcr.io/elektrolytmangel/hydr0.garden-cms:latest
```