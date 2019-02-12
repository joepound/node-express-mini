import React, { createContext, useState } from "react";

export const UsersContext = createContext();

function UsersProvider(props) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UsersContext.Provider value={usersContext}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersProvider;