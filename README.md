# 우리테크 웹스택

## 템플릿 목록

| 이름 (template name)                                             | 설명                                                                    |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [fullstack-webapp-1](./templates/fullstack-webapp-1)             | Typescript / Ant Design / Next.js / GraphQL / Prisma 기반의 웹앱 템플릿 |
| [serverless-webapp-1](./templates/serverless-webapp-1)           | Serverless Framework 기반의 웹앱 템플릿                                 |
| [next-apollo-server-mongo](./templates/next-apollo-server-mongo) | Typescript / Next.js / GraphQL / Nexus / Apollo Server / MongoDB        |
| [next-simple-client](./templates/next-simple-client)             | Typescript / Next.js / swr / bootstrap5                                 |
| [next-apollo-client](./templates/next-apollo-client)             | Typescript / Next.js / GraphQL / Apollo Client / bootstrap5             |

## create-webstack 으로 템플릿 설치하기

`templates` 디렉토리에 구성된 템플릿을 이용해 새로운 프로젝트를 시작할때 좀더 쉽게 초기 설치작업을 진행 할 수 있도록 도와주는 도구 입니다.

```
npx create-webstack <project-name> -t <template-name>
```

or

```
npx create-webstack <project-name> --template <template-name>
```

## 참고사항

- next.js 기반 템플릿은 기본적으로 Fullstack 입니다. 템플릿 이름에 `server`, `client`를 명시하는 이유는 주된 기능을 표현하기 위해서 입니다.
