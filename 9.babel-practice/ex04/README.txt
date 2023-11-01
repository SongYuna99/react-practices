4. Env Preset: 변환 규칙 모음
	1) Preset
		- 여러 플러그인 변환 규칙을 한번에 적용하기 위해서 관련 플러그인을 모아놓은 것
		- 종류는
			① ECMAPScript 년도 별로 모아놓은 것
			② ECMAScript stage(level 0, 1, 2, 3)로 모아놓은 것
			③ 3rd party: TypeScript, JSX
			등 다양하다.
		- ECMAScript Preset은 Env Preset(preset-env, ECMAScript Lebel3)이다.
	2) 설치
		> npm init -y
		> npm i -D @babel/core @babel/cli @babel/preset-env
	3) 프리셋 설치 확인
		> npm list --dept=1 | grep @babel/plugin
	4) Env Preset 설정
		- 타겟 브라우저를 설정하는 방식
		- 브라우저별 ex6 호환성 테이블(https://compat-table.github.io/compat-table/es6/)
	5) 변환하기
		> npx babel src/index.js -o dist/index.js