import React from "react";

import { UserInfoForm, UserlistSelect, UserInfoDisplay } from ".";

function UserlistContainer(props) {
  return (
    <main>
      <UserInfoForm />
      <UserlistSelect />
    </main>
  )
}

export default UserlistContainer;