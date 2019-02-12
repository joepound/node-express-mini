import React, { useContext, useEffect } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function UserlistSelect(props) {
  const { users, selectedUser, getUsers, handleUserSelect } = useContext(
    UsersContext
  );
  useEffect(() => getUsers(), [users]);

  return (
    <div className="userlist__select">
      <label className="userlist__select__label">View any user below: </label>

      <select
        className="userlist__select__dropdown"
        name="setSelectedUser"
        value={selectedUser}
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
              >
                {user.name}
              </option>
            ))}
          </>
        ) : (
          <option disabled hidden value="">
            No users currently available.
          </option>
        )}
      </select>
    </div>
  );
}

export default UserlistSelect;
