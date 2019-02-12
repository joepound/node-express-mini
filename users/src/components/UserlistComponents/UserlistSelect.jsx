import React, { useContext, useEffect } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function UserlistSelect(props) {
  const { users, selectedUser, getUsers, handleUserSelect } = useContext(
    UsersContext
  );
  useEffect(() => getUsers(), []);

  return (
    <div className="userlist__select">
      <label className="userlist__select__label" htmlFor="selectedUser">View any user below: </label>
      <select
        className="userlist__select__dropdown"
        id="selectedUser"
        name="setSelectedUser"
        value={selectedUser ? selectedUser.id : ""}
        onChange={handleUserSelect}
      >
        {users.length ? (
          <>
            <option disabled hidden value="">
              Select a user...
            </option>
            {users.map(user => (
              <option
                key={user.id}
                className="userlist__select__dropdown__option"
                value={user.id}
              >
                {user.name}
              </option>
            ))}
          </>
        ) : (
          <option disabled hidden value="">
            Add some users....
          </option>
        )}
      </select>
    </div>
  );
}

export default UserlistSelect;
