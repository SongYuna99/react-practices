[ React Practices ] 
   : Routing

ex01: React Router Basic I: Implemented in a Simple Way(hashchange event driven)
ex02: React Router Basic II: HTML5 history API
ex03: React Router Basic III: HashRouter &amp; BrowserRouter
ex04: React Router Basic V: Link VS NavLink
ex05: Styling &amp; Semantic Markup
ex06: Composition
ex07: Nesting Routes
ex08: BrowserRouter & SSR

- Install Dependency
   : react-router: 6.0.x(2021.6 beta), react-router-dom: 6.0.x(2021.6 beta)
      > npm i react-router react-router-dom

===============================================================

1. 설치
   1) 개발 툴
      > npm init -y
      > npm i -D express webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
   2) 라이브러리
      > npm i react react-dom prop-types react-addons-update react-router react-router-dom

2. 설정
   1) webpack.config.js
   2) bable.config.json

3. 스크립팅
   "scripts": {
   "debug": "npx webpack serve --progress --env",
   "build": "npx webpack"
   },

4. 테스트 서버 실행
   > npm run debug

5. 빌드 실행
   > npm run build src=(01|02|03|04|05)
