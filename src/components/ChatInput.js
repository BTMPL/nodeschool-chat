import React from 'react';
import styled from 'styled-components';

const ChatInputElement = styled.div`
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

  handleSubmit = () => {
    if (this.state.message) {
      this.props.onSubmit(this.state.message);
      this.setState({
        message: ''
      });
    }
  }

  render() {
    return (
      <ChatInputElement>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Napisz</button>
      </ChatInputElement>
    )
  }
}