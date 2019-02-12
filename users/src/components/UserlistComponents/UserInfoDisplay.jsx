import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function UserInfoDisplay(props) {
  const { selectedUser } = useContext(UsersContext);

  return selectedUser ? (
    <section className="userlist__selected-info">
      <h2 className="userlist__selected-info__name">{selectedUser.name}</h2>
      <div className="userlist__selected-info__bio">
        <label className="userlist__selected-info__bio__label">Bio:</label>
        <p className="userlist__selected-info__bio__content">{selectedUser.bio}</p>
      </div>
    </section>
  ) : null;
}

export default UserInfoDisplay;
