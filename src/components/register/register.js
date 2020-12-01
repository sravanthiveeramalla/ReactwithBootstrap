import * as React from "react";
import "./style.css";

class Register extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2 className="form-heading">Registration</h2>
        <div className="form-wrapper">
          <div className="form-group">
            <label>First Name</label>
            <div className="form-input">
              <input type="text" name="firstname" placeholder="First Name" />
            </div>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <div className="form-input">
              <input type="text" name="lastname" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
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
            <label>Confirm Password</label>
            <div className="form-input">
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn submit-btn"
              value="Register"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
