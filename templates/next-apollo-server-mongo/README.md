# 우리테크 웹스택 템플릿

## 설치

```
$ npx create-webstack my-app --template next-apollo-server-mongo
```

## 실행

```
$ npm run dev
```

## 제작과정

#### install

```sh
$ npm install --save apollo-server-express graphql nexus next react react-dom graphql-scalars mongodb
$ npm install --save-dev typescript ts-node @types/react @types/react-dom @types/node @types/mongodb
```

#### tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx"]
}
```

#### nexus.tsconfig.json

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "types": ["nexus-prisma-typegen"],
    "esModuleInterop": true
  }
}
```

#### .babelrc

```json
{
  "presets": ["next/babel"]
}
```

#### next.config.js

```js
module.exports = {
  async rewrites() {
    return [{ source: '/graphql', destination: '/api' }];
  },
};
```

#### mongodb modeling

좀더 기다려 보기로 한다.
