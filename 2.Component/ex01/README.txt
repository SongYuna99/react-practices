[ ex01 ]
	: property
	1. 컴포넌트의 데이터 
	2. 부모에서 자식으로 전달된다.
		- 컴포넌트 통신(Data Flow)
		- Top -> Down
	3. 자식에게 변경 불가
	4. 부모가 소유한 데이터
	
src/01: 함수 컴포넌트의 property
src/02: Data Flow
src/03: 클래스 컴포넌트의 property
src/04: Property Validation (패키지 설치: npm i prop-types)

===================================================================

1. 설치
	1) 개발 툴
		> npm init -y	
		> npm i -D express webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
	2) 라이브러리
		> npm i react react-dom

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
