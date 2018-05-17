import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux"
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./SignUp.css";
import {
  createSignup,
  requestLogin,
} from '../../actions/signup'

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      password_confirmation: "",
      username: "",
      newUser: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.username.length > 0 &&
      this.state.picture.length > 0 &&
      this.state.password === this.state.password_confirmation

    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
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
    this.props.createSignup(this.state)
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
        <FormGroup controlId="password_confirmation" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
          />
        </FormGroup>

        <FormControl type="submit" name="" value="Sign Up" class="signup-btn" />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : ""}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
})


const mapDispatchToProps = (dispatch) => ({
  createSignup: user => dispatch(createSignup(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)