## 템플릿 제작 과정

### 아이디어

이 템플릿의 기능 및 시나리오는 [React Server Components](https://reactjs.org/server-components) 의 내용을 사용했습니다.

### install packages

```
npm install --save next react react-dom
npm install --save next-auth cookie
npm install --save bootstrap sass
npm install --save swr isomorphic-unfetch
npm install --save sanitize-html date-fns excerpts marked
```

```
npm install --save-dev @types/react @types/react-dom @types/node typescript
npm install --save-dev @types/next-auth
npm install --save-dev @types/bootstrap
npm install --save-dev @types/sanitize-html @types/date-fns @types/excerpts marked
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

## Bootstrap

no react component.

## Data fetching

[swr](https://swr.vercel.app/) 으로 꽤 쉽게 데이터 패칭을 구현했다.
