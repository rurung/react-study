import React, { useState, useRef } from "react";

function InputPractice() {
  const inputState = useRef();
  const [loginValue, setLoginValue] = useState({
    id: "",
    password: "",
    email: "",
  });

  const { id, password, email } = loginValue;

  const onClickChange = (e) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };

  const onReset = () => {
    setLoginValue({
      id: "",
      password: "",
      email: "",
    });
    inputState.current.focus();
  };
  return (
    <div>
      <div style={{ color: "red", paddingBottom: "15px" }}>
        <b>* Id : {id}</b>
        <br />
        <b>* Password : {password}</b>
        <br />
        <b>* email : {email}</b>
      </div>

      <input
        type="text"
        name="id"
        onChange={onClickChange}
        value={id}
        ref={inputState}
        placeholder="아이디"
      />
      <br />
      <input
        type="password"
        name="password"
        onChange={onClickChange}
        value={password}
        ref={inputState}
        placeholder="패스워드"
      />
      <br />
      <input
        type="email"
        name="email"
        onChange={onClickChange}
        value={email}
        ref={inputState}
        placeholder="이메일"
      />
      <br />
      <button onClick={onReset}>초기화</button>
    </div>
  );
}

export default InputPractice;
