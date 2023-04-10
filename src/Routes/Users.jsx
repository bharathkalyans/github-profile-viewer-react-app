import React, { useEffect, useRef, useState } from "react";
import UsersContainer from "../components/UsersContainer";
import Loading from "../components/Loading";
import { AwesomeButton } from "react-awesome-button";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef("");
  const BASE_URL = "https://api.github.com/users";

  async function allUsers() {
    setLoading(true);
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  }

  async function findUser() {
    setLoading(true);

    if (user.current.value !== "") {
      setUsers("");
      const userName = user.current.value;
      const res = await fetch(`${BASE_URL}/${userName}`);
      const data = await res.json();
      setUsers(() => [data]);
      user.current.value = "";
    } else {
      allUsers();
    }
    setLoading(null);
  }

  useEffect(() => {
    allUsers();
  }, [setUsers]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        findUser();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-11 my-5">
        <input
          type="text"
          placeholder="Search Github User by username"
          className="h-full lg:w-2/4 md:w-2/3 sm:w-1/3 text-gray-500 px-2 mx-5 rounded-lg outline-none "
          ref={user}
        />
        <button
          className="px-3 h-full bg-white text-black rounded-lg hover:bg-gray-300"
          onClick={findUser}
        >
          Search
        </button>
      </div>
      {loading ? <Loading /> : <UsersContainer users={users} />}
    </div>
  );
};

export default Users;
