[ Emaillist : Frontend ]

1. 설치
	1) 개발 툴
		> npm init -y	
		> npm i -D express webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin @babel/plugin-transform-runtime @babel/plugin-syntax-throw-expressions
	2) 라이브러리
		> npm i react react-dom prop-types react-addons-update

2. 설정
	1) webpack.config.js
	2) bable.config.json

3. 스크립팅
	"scripts": {
		"debug": "npx webpack serve --progress",
		"build": "npx webpack"
	},

4. 테스트 서버 실행
	> npm run debug

5. 빌드 실행
	> npm run build
