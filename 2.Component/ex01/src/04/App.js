import React from "react";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div id="{ 'App' }">
      <h1>Ex01: property</h1>
      <MyComponent
        props02={10}
        props03={true}
        props04={{ no: 1, name: "둘리" }}
        props05={["javascript", "react", "es6"]}
        props06={() => {
          return "함수";
        }}
        props07={18}
        props08={[true, false, false]}
        props09={{
          no: 10,
          name: "마이콜",
          email: "michol@naver.com",
        }}
      />
    </div>
  );
}

export { App };
