import React, { createContext, useState } from "react";
import axios from "axios";

export const UsersContext = createContext();

function UsersProvider(props) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [newName, setNewName] = useState("");
  const [newBio, setNewBio] = useState("");

  const baseURL = "https://joepound-ls-brwawe-1.herokuapp.com/api";
  const usersContext = {
    users,
    selectedUser,
    newName,
    newBio,

    textInputSetters: {
      setNewName,
      setNewBio
    },

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

    addUser() {
      if (!newName) {
        alert("Please enter a name first.");
      } else if (!newBio) {
        alert("Please enter a bio first.");
      } else {
        axios
          .post(`${baseURL}/users`, {name: newName, bio: newBio})
          .then(res => {
            alert(`User ${newName} was successfully added.`);
            usersContext.getUsers();
            setNewName("");
            setNewBio("");
          })
          .catch(err => console.log(err));
      }
    },

    deleteUser() {
      if (window.confirm("Are you sure you want to deleted the selected user?")) {
        axios
          .delete(`${baseURL}/users/${selectedUser.id}`)
          .then(res => {
            alert(`User ${selectedUser.name} was successfully deleted.`);
            usersContext.getUsers();
            setSelectedUser("");
          })
          .catch(err => console.log(err));
      }
    },

    handleTextInputChange(e) {
      usersContext.textInputSetters[e.currentTarget.name](e.currentTarget.value);
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
