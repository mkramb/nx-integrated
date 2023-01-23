# NxIntegrated

- Package-based repos focus on flexibility and ease of adoption. 
- Integrated repos focus on efficiency and ease of maintenance.

## Common usage

Running backend & frontend:

```
yarn nx run-many --parallel --target=serve --projects=api,web
yarn nx run-many --parallel --target=test
```

Running specific apps:

```
yarn nx serve <app-name>
yarn nx test <app-name>
```

Running with Tilt:

```
tilt up
```

## Setup

Adding `api` or `web` apps:

```
yarn nx g @nrwl/nest:app api
yarn nx g @nrwl/next:app web
```
