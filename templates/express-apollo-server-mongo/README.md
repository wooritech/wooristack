# 우리테크 웹스택 템플릿

## 개요

Node Express Server, Apollo Server를 이용해 GraphQL API 서비스를 제공하기 위한 기본 템플릿입니다.

### 구성

- typescript
- express
- apollo-server
- nexus
- mongoDB

## 설치

```
$ npx create-webstack my-app --template express-apollo-server-postgresql
```

## 실행

```
$ npm run dev
```

## 제작과정

#### install

```sh
$ npm install --save apollo-server-express bcryptjs express graphql graphql-scalars graphql-subscriptions jsonwebtoken mongodb nexus
$ npm install --save-dev typescript ts-node-dev @types/express @types/mongodb dotenv
```

#### tsconfig.json

```json
{
  "baseUrl": "types",
  "typeRoots": ["types"],
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "es2017",
    "esModuleInterop": true,
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "declaration": false,
    "noLib": false,
    "sourceMap": true,
    "pretty": true,
    "allowUnreachableCode": true,
    "allowUnusedLabels": true,
    "noImplicitAny": false,
    "noImplicitReturns": false,
    "noImplicitUseStrict": false,
    "outDir": "dist/",
    "baseUrl": "src/",
    "listFiles": false,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "tests/**/*"]
}
```
