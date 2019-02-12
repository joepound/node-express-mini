import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

import { AddUserButton, RemoveUserButton, SaveUserUpdatesButton } from ".";

function ButtonBarContainer(props) {
  const { selectedUser, isInUpdateMode } = useContext(UsersContext);

  return (
    <footer className="userlist__button-bar">
      {isInUpdateMode ? <SaveUserUpdatesButton/> : <AddUserButton />}
      {selectedUser && <RemoveUserButton />}
    </footer>
  );
}

export default ButtonBarContainer;
