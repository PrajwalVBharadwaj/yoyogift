import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Input } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import style from "./LoginComponent.module.css";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: false
    };
  }

  LoginSuccess = response => {
    this.props.login(response.profileObj);
  };
  render() {
    const { isOpen } = this.props;
    return (
      <Drawer anchor="right" open={isOpen}>
        <div className={style.container}>
          <Input
            placeholder="Email..."
            className={style.inputFields}
            type="text"
            error={this.state.emailError}
          />
          <Input
            placeholder="Password..."
            type="password"
            className={style.inputFields}
          />
          <GoogleLogin
            buttonText="Login"
            clientId="871799886160-uekhldkefqmed3o383jo5bvln5e41e6a.apps.googleusercontent.com"
            onSuccess={this.LoginSuccess}
          />
        </div>
      </Drawer>
    );
  }
}

export default LoginComponent;
