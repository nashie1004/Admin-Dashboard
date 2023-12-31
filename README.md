# SocialSphereX

Reddit clone with Vite React, Typescript and C#.

## Start
1. Setup ``.\client\.env`` 
```
VITE_REACT_APP_SERVER_PORT= http://localhost:####/
VITE_REACT_APP_API_CONNECTION_STRING = http://localhost:####/
VITE_REACT_APP_REPO_URL = ###
```

2. Setup ``.\presentation\appsettings.json`` default connection

```
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=MyEFCoreDatabase;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```

3. `cd .\presentation\` then
`dotnet watch`

4. `cd .\client\` then
`npm run dev`

## Reference
- [Layers 1](https://positiwise.com/blog/clean-architecture-net-core)
- [Layers 2](https://www.youtube.com/watch?v=1OLSE6tX71Y) 
- [Layers 3](https://juldhais.net/clean-architecture-in-asp-net-core-web-api-4e5ef0b96f99)
- [Layers 4](https://positiwise.com/blog/clean-architecture-net-core) 
- [Icon](https://favicon.io/emoji-favicons/fire/#google_vignette)
- [Admin](https://wrapbootstrap.com/theme/materialpro-react-admin-template-WB0869819)
- [Style](https://mui.com/material-ui/customization/palette/)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
