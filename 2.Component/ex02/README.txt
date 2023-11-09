[ ex02 ]
	: Component Styling

1) inline styling
2) Normal CSS
	- css-loader option: {module: false}
	- 실행
		> npm run debug src=02 css-module=false

3) CSS Module I
	- css-loader option: {module: true}
	- 실행
		> npm run debug src=03

4) CSS Module II
	- css-loader option: {module: true}
	- 실행
		> npm run debug src=04

5) SASS/SCSS
	- css-loader option: {module: true}
	- 실행
		> npm run debug src=05

6) CSS in JS: Stlyed Component(Less & Styleable)
	> npm i styled-components
	- css-loader option: {module: true}
	- 실행
		> npm run debug src=05

7) React Modal
	> npm i react-Modal
	
8) Modal: Material UI

===================================================================

1. 설치
	1) 개발 툴
		> npm init -y	
		> npm i -D express webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
	2) 라이브러리
		> npm i react react-dom styled-components

2. 설정
	1) webpack.config.js
	2) bable.config.json

3. 스크립팅
	"scripts": {
		"debug": "npx webpack serve --progress --env",
		"build": "npx webpack"
	},

4. 테스트 서버 실행
	> npm start src=(01|02|03|04)

5. 빌드 실행
	> npm run build
