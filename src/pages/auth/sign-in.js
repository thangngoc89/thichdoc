import React, { Component } from "react";

import defaultPage from "../../hocs/defaultPage";
import { show } from "../../utils/lock";

const CONTAINER_ID = "put-lock-here";

class SignIn extends Component {
  componentDidMount() {
    show(CONTAINER_ID);
  }
  render() {
    return (
      <main className="mt6 mb4 flex justify-center items-center">
        <div id={CONTAINER_ID} />
      </main>
    );
  }
}

export default defaultPage(SignIn, { title: "Đăng nhập" });
