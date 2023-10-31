import React from "react";

function Clock02(props) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let session = "AM";

  return (
    /*
      Comment01: JSX밖은 JavaScript 구문(주석 구문)이 가능하다.
    */
    <div
      /*
        Comment02: JSX Element 태그 안에서도 주석은 가능하다.(비추)
      */
      className="clock"
      title="시계"
    >
      {/*
          Comment03: 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 단다.(개추)
        */}
      {("0" + (hours > 12 ? hours - 12 : hours)).slice(-2)}
      {":"}
      {/*
          Comment04: JSX는 HTML이 아니다!
                     따라서 <!-- --> 주석은 사용할 수 없다.
        */}
      {("0" + minutes).slice(-2)}
      {":"}
      // Comment05: JSX안에서 JavaScript 주석 구문(/* */을 포함)을 사용하면
      화면에 그대로 나온다.
      {("0" + seconds).slice(-2)} {hours > 12 ? "PM" : "AM"}
    </div>
  );
}

export default Clock02;
