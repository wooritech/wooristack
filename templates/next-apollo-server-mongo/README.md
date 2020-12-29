# 우리테크 웹스택 템플릿

## 개요

Apollo Server를 이용해 GraphQL API 서비스를 제공하기 위한 기본 템플릿입니다.

### 구성

- typescript
- next.js
- apollo-server
- nexus
- mongodb

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
$ npm install --save apollo-server-micro graphql nexus next react react-dom graphql-scalars mongodb
$ npm install --save-dev typescript ts-node @types/react @types/react-dom @types/node @types/mongodb tsconfig-paths
```

- ts-node compile 시 경로 오류를 해결하기 위해 [tsconfig-paths](https://github.com/dividab/tsconfig-paths) 추가

#### tsconfig.json

````json
{
  "compilerOptions": {
    /*
      Note that the "module" setting will be overriden by nextjs automatically
      (cf. https://github.com/zeit/next.js/discussions/10780).
      If you need to change it, you should use the --compiler-options or provide a separate
      tsconfig.json entirely.
    */
    "module": "esnext",
    "target": "ES2019",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
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
      "*": [
        "./src/*"
      ]
    }
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

- src 경로 단축을 위해 baseUrl + paths 추가: 기본은 src 에서 시작함.

#### nexus.tsconfig.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "types": ["nexus-prisma-typegen"],
    "esModuleInterop": true
  }
}
````

- nexus, next tsconfig 를 공유하기 위해 extends 추가

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
