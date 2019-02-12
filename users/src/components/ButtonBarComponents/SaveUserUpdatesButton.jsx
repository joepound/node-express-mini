import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function SaveUserUpdatesButton(props) {
  const { updateUser } = useContext(UsersContext);

  return (
    <div className="userlist__button-bar__save-user-updates" onClick={updateUser}>
      SAVE
    </div>
  );
}

export default SaveUserUpdatesButton;