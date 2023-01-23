# NxIntegrated

## Common usage

```
yarn nx serve api
yarn nx test api
```

Running Tilt:

```
tilt up
```

## Setup

```
yarn create nx-workspace nx-integrated --preset=ts
```

Adding api service:

```
yarn add -D -W @nrwl/nest
yarn nx g @nrwl/nest:app api
```
