import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

import { AddUserButton, RemoveUserButton } from ".";

function ButtonBarContainer(props) {
  const { selectedUser } = useContext(UsersContext);

  return (
    <footer className="userlist__button-bar">
      <AddUserButton />
      {selectedUser && <RemoveUserButton />}
    </footer>
  );
}

export default ButtonBarContainer;
