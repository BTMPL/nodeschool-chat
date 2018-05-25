import React from 'react';
import styled from 'styled-components';

const LoginElement = styled.div`
  text-align: center;
`

export class Login extends React.Component {

  state = {
    user: ''
  }

  handleChange = e => this.setState({
    user: e.target.value
  });

  handleSubmit = () => {
    if (this.state.user.replace(/ /ig, '').length !== 0) {
      this.props.onSubmit(this.state.user);
    }
  }

  render() {
    return (
      <LoginElement>
        <input type="text" value={this.state.user} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Zaloguj</button>
      </LoginElement>
    )
  }
}