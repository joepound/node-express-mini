import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function RemoveUserButton(props) {
  const { deleteUser } = useContext(UsersContext);

  return (
    <div className="userlist__button-bar__remove-user" onClick={deleteUser}>
      X
    </div>
  );
}

export default RemoveUserButton;