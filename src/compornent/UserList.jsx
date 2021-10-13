import React, { useState } from "react";

function User({ user, onRemove, onToggle }) {
  const active = user.active ? "active" : "";
  return (
    <li className={active}>
      <span onClick={() => onToggle(user.id)}>
        <b>{user.username}</b>&nbsp;
        <span>{user.email}</span>&nbsp;
      </span>
      <button onClick={() => onRemove(user.id)}>x</button>
      {/* 함수만 받아서 선언함 */}
    </li>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
