import React from "react";

function UserlistSelect(props) {
  return (
    <select className="userlist__select">
      <option disabled selected hidden value="">Select a user...</option>
      <option className="userlist__select__option">User</option>
    </select>
  )
}

export default UserlistSelect;