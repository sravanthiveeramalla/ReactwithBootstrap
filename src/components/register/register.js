import * as React from "react";
import {Button} from "react-bootstrap";
import {createStore} from "redux";
import "./style.css";
/*function firstreducer(state,action){
  switch(action.type){
    case "increaset":
      return state.concat(action.payload + 1);
    case "decrement":
      return action.payload-1;
    default:
      return state;
  }
}
const store = createStore(firstreducer,"0");

*/
class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      counter:0
    }
  /*  store.subscribe(() => {
      this.setState({ counter: store.getState()});
    })*/
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  /* */
  increment = function(){
    //store.dispatch({type:'increaset',payload:this.state.counter});
    this.setState({
      counter: this.state.counter+1
    })
  }
  decrement = function(){
    this.setState({
      counter: this.state.counter-1
    })
  }
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
        <div><Button onClick={this.increment}>Increment</Button>
        <Button onClick={this.decrement}>Decrement</Button>
        {this.state.counter}</div>
      </div>
    );
  }
}

export default Register;
