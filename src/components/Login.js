import React from 'react';
import styled from 'styled-components';

const LoginElement = styled.form`
  text-align: center;
`

export class Login extends React.Component {

  state = {
    user: ''
  }

  handleChange = e => this.setState({
    user: e.target.value
  });

  handleSubmit = (e) => {
    if (this.state.user.replace(/ /ig, '').length !== 0) {
      this.props.onSubmit(this.state.user);
    }

    e.preventDefault();
  }

  render() {
    return (
      <LoginElement onSubmit={this.handleSubmit}>
        <input type="text" autoFocus value={this.state.user} onChange={this.handleChange} />
        <button>Zaloguj</button>
      </LoginElement>
    )
  }
}