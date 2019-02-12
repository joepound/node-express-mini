import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import UsersProvider from "./providers/UsersProvider";
import App from "./App";

ReactDOM.render(
  <UsersProvider>
    <App />
  </UsersProvider>,
  document.getElementById("root")
);
