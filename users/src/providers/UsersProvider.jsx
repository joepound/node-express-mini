import React, { createContext, useState } from "react";
import axios from "axios";

export const UsersContext = createContext();

function UsersProvider(props) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const baseURL = "https://joepound-ls-brwawe-1.herokuapp.com/api";
  const usersContext = {
    users,
    selectedUser,

    getUsers() {
      axios
        .get(`${baseURL}/users`)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    },

    getUserById(id) {
      axios
        .get(`${baseURL}/users/${id}`)
        .then(res => setSelectedUser(res.data))
        .catch(err => console.log(err));
    },

    handleUserSelect(e) {
      usersContext.getUserById(e.currentTarget.value);
    }
  };

  return (
    <UsersContext.Provider value={usersContext}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
