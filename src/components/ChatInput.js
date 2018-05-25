import React from 'react';
import styled from 'styled-components';

const ChatInputElement = styled.form`
  display: flex;
  padding: 10px 0;

  input {
    width: 90%;
  }

  button {
    width: 10%;
  }

  input, button {
    padding: 10px;
  }
`;

export class ChatInput extends React.PureComponent {

  state = {
    message: ''
  };

  handleChange = (e) => this.setState({
    message: e.target.value
  });

  handleSubmit = (e) => {
    if (this.state.message) {
      this.props.onSubmit(this.state.message);
      this.setState({
        message: ''
      });
    }

    e.preventDefault();
  }

  render() {
    return (
      <ChatInputElement onSubmit={this.handleSubmit}>
        <input type="text" autoFocus value={this.state.message} onChange={this.handleChange} />
        <button>Napisz</button>
      </ChatInputElement>
    )
  }
}