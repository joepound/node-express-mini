import React from "react";

function UserlistSelect(props) {
  return (
    <div className="userlist__select">
      <label className="userlist__select__label">View any user below: </label>
      <select className="userlist__select__dropdown">
        <option disabled selected hidden value="">Select a user...</option>
        <option className="userlist__select__dropdown__option">User</option>
      </select>
    </div>
  )
}

export default UserlistSelect;