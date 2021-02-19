import * as React from "react";
import "./style.css";

class Login extends React.Component {
  render() {
    return (
      <div className="form-container">
        <div className="form-login-wrapper">
          <div className="form-wrap-col1">
            <img src="../images/groceries.jpg" />
          </div>
          <div className="form-wrap-col2">
        <h2 className="form-heading">Login</h2>
            <div className="form-group">
              <label id="email-label">Email Address</label>
              <div className="form-input">
                <input type="text" name="email" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="form-input">
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-input">
              <input type="checkbox" name="Remember me" />Remember me
              </div>
            </div>
            <div className="form-group">
              <input type="submit" className="btn submit-btn" value="Login" />
            </div>
            <div className="form-group">
              <div className="form-input forgotdiv">Forgot
              <a href="/forgotpwd">&nbsp;Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
