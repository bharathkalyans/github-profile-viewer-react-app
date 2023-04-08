import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const BASE_URL = "https://api.github.com/users";

  async function allUsers() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    allUsers();
  }, [setUsers]);
  console.log(users);
  return <div>Users</div>;
};

export default Users;
