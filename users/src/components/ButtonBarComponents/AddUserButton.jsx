import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function AddUserButton(props) {
  const { addUser } = useContext(UsersContext);

  return (
    <div className="userlist__button-bar__add-user" onClick={addUser}>
      +
    </div>
  );
}

export default AddUserButton;