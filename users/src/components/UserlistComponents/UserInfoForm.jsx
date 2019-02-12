import React from "react";

function UserInfoForm(props) {
  return (
    <form className="userlist__info-form">
      <div className="userlist__info-form__field">
        <label className="userlist__info-form__field__label">Name: </label>
        <input
          className="userlist__info-form__field__input textfield"
          placeholder="Enter a name"
          required
        />
      </div>
      <div className="userlist__info-form__field">
        <label className="userlist__info-form__field__label">Bio: </label>
        <textarea
          className="userlist__info-form__field__input textarea"
          placeholder="Enter a short bio"
          required
        />
      </div>
    </form>
  );
}

export default UserInfoForm;
