import * as React from "react";

class Login extends React.Component {
  public state = {
    login: true,
    email: "",
    password: "",
    name: "",
  };

  public render() {
    return (
      <div>
        <h4 className="mv3">{this.state.login ? "Login" : "Sign Up"}</h4>
        <div className="flex flex-column">
          {!this.state.login && (
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              placeholder="Your name"
            />
          )}
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="Your email address"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => this.confirm()}>
            {this.state.login ? "login" : "create account"}
          </div>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !this.state.login })}
          >
            {this.state.login
              ? "need to create an account?"
              : "already have an account?"}
          </div>
        </div>
      </div>
    );
  }

  public confirm = async () => ({});

  public saveUserData = (id: string, token: string) => {
    localStorage.setItem("graphcool-user-id", id);
    localStorage.setItem("graphcool-auth-token", token);
  }
}

export default Login;
