# NxIntegrated

- Package-based repos focus on flexibility and ease of adoption. 
- Integrated repos focus on efficiency and ease of maintenance.

You can be successful working in either style repo. Typically, organizations that are just getting started with a monorepo begin with a package-based repo, because they want something that works quickly and that can demonstrate the value of a monorepo without a lot of upfront cost. However, if an organization is bought in to the idea of a monorepo and especially once they start to scale up, an integrated repo becomes more valuable. When making a new project is simple, every new route or feature can be its own project and sharing code across applications becomes simple and maintainable. Integrated repos restrict some of your choices in order to allow Nx to help you more.

The comparison between package-based repos and integrated repos is similar to the comparison between JSDoc and TypeScript. The former is easier to adopt and provides some good benefits. The latter takes more work but provides more value, especially at a larger scale.

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
