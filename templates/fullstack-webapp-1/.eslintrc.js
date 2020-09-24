/**
 * ESLint 설정
 *
 * - https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  // airbnb-typescript-prettier에 포함된 설정
  // - https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier/blob/master/index.js
  extends: ['airbnb-typescript-prettier'],
  rules: {
    // javascript
    'no-use-before-define': 'off', // 선언 전에 사용 허용
    'no-underscore-dangle': 'off', // _속성명 허용
    'class-methods-use-this': 'off', // this를 사용하지 않는 인스턴스 메서드 허용
    // typescript
    '@typescript-eslint/no-empty-interface': 'off', // 빈 인터페이스 허용
    // react
    'react/react-in-jsx-scope': 'off', // jsx가 포함된 파일에서 React 임포트 생략 허용
  },
};
