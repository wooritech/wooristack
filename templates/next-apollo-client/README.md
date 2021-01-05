## 템플릿 제작 과정

### install packages

```
npm install --save next react react-dom
npm install --save graphql @apollo/client
npm install --save next-auth cookie
npm install --save bootstrap sass
```

```
npm install --save-dev @types/react @types/react-dom @types/node typescript
npm install --save-dev @types/graphql
npm install --save-dev @types/next-auth
npm install --save-dev @types/bootstrap
```

### tsconfig

```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "ES2019",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "*": ["./src/*"]
    }
  },
  "exclude": ["node_modules"],
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

## Dev Tools (Chrome)

https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm
