import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux"
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import FacebookLoginButton from '../../fbAuth/FacebookLoginButton/'
import GoogleLoginButton from '../../googleAuth/GoogleLoginButton/'
import "../Signup/SignUp.css";
import {
  createSignin
} from '../../actions/signin'

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      newUser: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
    this.props.createSignin(this.state)
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

        <FormControl type="submit" name="" value="Sign In" class="signin-btn" />
      </form>
    );

    return(
      <div>
            <FacebookLoginButton />
            <GoogleLoginButton />
          </div>
    );
  }

  render() {
    return (
      <div className="Signin">
        {this.state.newUser === null
          ? this.renderForm()
          : ""}
          <div className="clearfix"></div>
          <div className="oauth-button col-md-6 col-md-push-4">
            <FacebookLoginButton />
            <GoogleLoginButton />
          </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
})


const mapDispatchToProps = (dispatch) => ({
  createSignin: user => dispatch(createSignin(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)