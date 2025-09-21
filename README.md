# focus-trap-demo

A post-beer talk resulted into this small example :D . `FocusContext` keeps track (in a store) of the greatest and then interactive ui components just set `tabindex="-1"` if element should not catch focus. can also be used for `disabled` or for `pointer-events: none;` depending on what it should be. `FocusContext` can be added to dialogs and say forms by default.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
