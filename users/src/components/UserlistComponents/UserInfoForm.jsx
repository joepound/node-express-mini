import React, { useContext } from "react";

import { UsersContext } from "../../providers/UsersProvider";

function UserInfoForm(props) {
  const { newName, newBio, handleTextInputChange } = useContext(UsersContext);

  return (
    <form className="userlist__info-form">
      <div className="userlist__info-form__field">
        <label className="userlist__info-form__field__label" htmlFor="newName">Name: </label>
        <input
          className="userlist__info-form__field__input textfield"
          id="newName"
          name="setNewName"
          placeholder="Enter a name"
          required
          value={newName}
          onChange={handleTextInputChange}
        />
      </div>
      <div className="userlist__info-form__field">
        <label className="userlist__info-form__field__label" htmlFor="newBio">Bio: </label>
        <textarea
          className="userlist__info-form__field__input textarea"
          id="newBio"
          name="setNewBio"
          placeholder="Enter a short bio"
          required
          value={newBio}
          onChange={handleTextInputChange}
        />
      </div>
    </form>
  );
}

export default UserInfoForm;
