import React from "react";
// props 를 구조분해 {}같은 구조 오브젝트 에 props 구조를 그대로 가져온다.
function Hello({ children, message, name, color, fontWeight, onClick }) {
  return (
    <div onClick={() => onClick()}>
      {message} <span style={{ color, fontWeight }}>{name}</span>
      {children}
    </div>
  );
}

Hello.defaultProps = {
  color: "red",
  onClick: () => console.warn("onClick 이벤트를 추가해주세요."), // 에러의 여지를 막아주는 default
};

export default Hello;
