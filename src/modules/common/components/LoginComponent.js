import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  Input,
  Typography,
  Button,
  DialogTitle,
  Snackbar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import GoogleLogin from "react-google-login";
import style from "./LoginComponent.module.css";
import axiosWrapper from "../../../apis/axiosCreate";
import { adminEmail } from "../../../config/constants";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      snackBarOpen: false,
      snackBarText: null,
      emailError: false,
      passwordError: false,
      isLoading: false
    };
  }

  LoginSuccess = response => {
    let email = response.profileObj.email;
    axiosWrapper.get(`/users?email=${email}`).then(user => {
      if (user.data[0]) {
        let profile = user.data[0];
        this.props.login(profile);
        window.sessionStorage.setItem("user", JSON.stringify(profile));
        this.props.closeDialog();
        this.setState({ isLoading: false });
        return;
      }
      let profile = {
        email: response.profileObj.email,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName,
        balance_points: 0,
        wishlist: [],
        cards_gifted: [],
        cards_received: [],
        picture: response.profileObj.imageUrl
      };
      axiosWrapper.post("/users", { ...profile }).then(res => {
        this.props.login(profile);
        window.sessionStorage.setItem("user", JSON.stringify(profile));
      });
      this.setState({ isLoading: false });
      this.props.closeDialog();
    });
  };
  NativeLogin = () => {
    this.setState({ isLoading: true });
    const { email, password } = this.state;
    axiosWrapper.get(`/users?email=${email}`).then(response => {
      if (response.data.length === 0) {
        //user doesn't exist
        this.setState({
          snackBarText: "Entered email is not registered",
          snackBarOpen: true,
          email: "",
          password: "",
          emailError: true,
          passwordError: true,
          isLoading: false
        });
        return;
      }
      let profile = response.data[0];
      if (profile.password === undefined) {
        this.setState({
          snackBarText:
            "Entered email is registered through social media login, please use same login option",
          snackBarOpen: true,
          email: "",
          password: "",
          isLoading: false
        });
        return;
      }
      if (profile.password === password) {
        this.props.login(profile);
        window.sessionStorage.setItem("user", JSON.stringify(profile));
        if (profile.email === adminEmail) {
          window.sessionStorage.setItem("userType", "admin");
        }
        this.setState({ isLoading: false, email: "", password: "" });
        this.props.closeDialog();
        return;
      }
      this.setState({
        passwordError: true,
        snackBarText: "Invalid password",
        snackBarOpen: true,
        isLoading: false
      });
    });
  };
  render() {
    const { isOpen } = this.props;
    return (
      <>
        <Drawer
          anchor="right"
          open={isOpen}
          ModalProps={{ onBackdropClick: this.props.closeDialog }}
        >
          <DialogTitle>
            <CloseIcon
              style={{ float: "right" }}
              className={style.closeButton}
              onClick={this.props.closeDialog}
            />
          </DialogTitle>

          <div className={style.container}>
            <Typography variant="h3">YOYO Gifts</Typography>
            <div className={style.login}>
              <Input
                dataTest="email"
                style={{ display: "block" }}
                placeholder="Email..."
                className={style.inputFields}
                type="text"
                error={this.state.emailError}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
                value={this.state.email}
              />
              <Input
                dataTest="password"
                style={{ display: "block" }}
                placeholder="Password..."
                type="password"
                className={style.inputFields}
                error={this.state.passwordError}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
                value={this.state.password}
              />
              <Button
                dataTest="nativeLogin"
                style={{
                  display: "block",
                  backgroundColor: "black",
                  color: "white"
                }}
                onClick={this.NativeLogin}
              >
                Login
              </Button>
            </div>
            <GoogleLogin
              style={{ display: "block" }}
              buttonText="Login through Google"
              clientId="871799886160-uekhldkefqmed3o383jo5bvln5e41e6a.apps.googleusercontent.com"
              onRequest={() => {
                this.setState({ isLoading: true });
              }}
              onSuccess={this.LoginSuccess}
            />
            {this.state.isLoading ? <CircularProgress /> : null}
          </div>
        </Drawer>
        <Snackbar
          open={this.state.snackBarOpen}
          autoHideDuration={3000}
          message={this.state.snackBarText}
          onClose={() => {
            this.setState({ snackBarOpen: false });
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
        />
      </>
    );
  }
}

export default LoginComponent;
