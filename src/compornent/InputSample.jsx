import React, { useState, useRef } from "react";

function InputSample() {
  const [formValue, setFormValue] = useState({
    email: "",
    id: "",
  });

  const emailInput = useRef();

  const { email, id } = formValue;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue, //비구조할당 구조
      [name]: value,
    });
    // 입력 행위인 대상 target의 값이 value 를 주입해야 입력값의 대한 동작이 일어난다.
    // []안에 변수값을 넣으면 변수로 활용할 수 있다.
  };

  const onReset = () => {
    setFormValue({
      email: "",
      id: "",
    });
    emailInput.current.focus();
  };

  return (
    <div>
      <input
        id="email"
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일"
        ref={emailInput}
      />
      <br />
      <input name="id" onChange={onChange} value={id} placeholder="아이디" />
      <br />
      <button onClick={onReset}>초기화</button>
      <br />
      <div>
        <b>이메일 : {email}</b>
        <br />
        <b>아이디 : {id}</b>
      </div>
    </div>
  );
}

export default InputSample;
