import React, { useState } from "react";
//import Hello from "./compornent/Hello";
//import Text from "./compornent/Text";
//import Counter from "./compornent/Counter";
// import InputPractice from "./compornent/InputPractice";
import InputSample from "./compornent/InputSample";
import UserList from "./compornent/UserList";
import CreateUser from "./compornent/CreateUser";
import InputPracticeTest from "./compornent/InputPracticeTest";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const clickHandler = () => {
    console.log("click");
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "smlee3",
      email: "smlee3@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "yskim",
      email: "yskim@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "wjh",
      email: "wjsm@naver.com",
      active: false,
    },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClick = () => {
    // setUsers([...users, { id: 4, username, email }]);
    // concat 은 배열에 배열을 합쳐준다.
    // setState에 넣으면 상태가 변경된다.
    const user = {
      id: users.length + 1,
      username: username,
      email: email,
      active: false,
    };
    // const addUser = users.concat({
    //   id: users.length + 1,
    //   username: username,
    //   email: email,
    // });
    setUsers(users.concat(user));
  };

  const onRemove = (id) => {
    setUsers(users.filter((a) => a.id != id));
  };

  const onToggle = (id) => {
    const toggleUser = users.map((user) => ({
      ...user,
      active: user.id === id ? (user.active ? false : true) : false,
    }));
    setUsers(toggleUser);
  };
  return (
    <div id="app">
      {/* props 데이터를 컴포넌트에 넣어준다. */}
      {/* <Hello
        message="Hello, World!"
        name="Seungmi Lee"
        color="red"
        fontWeight="700"
      > */}
      {/* isVisible 만 있어도 true다. */}
      {/* <Text isVisible={true} />
        <Text />
      </Hello> */}

      {/* <Counter /> */}
      {/* <InputSample /> */}
      {/* <InputPractice /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onClick={onClick}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <InputPracticeTest />
    </div>
  );
}

export default App;
