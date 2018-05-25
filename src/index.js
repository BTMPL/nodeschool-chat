import React from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal } from 'styled-components';

import { ChatList } from './components/ChatList';
import { ChatInput } from './components/ChatInput';
import { Login } from './components/Login';

import { mock as api } from './utils/api';

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: Tahoma;
    font-size: 14px;
    line-height: 18px;
  }

  body, html {
    margin: 0;
    padding: 0 10px;
  }
`

const UI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;


class App extends React.Component {

  state = {
    user: null,
    messages: []
  }

  componentDidMount() {
    this.props.api.open();
    this.props.api.listen(this.handleIncommingMesssage);
  }

  componentWillUnmount() {
    this.props.api.close()
  }

  handleIncommingMesssage = (message) => {
    this.setState({
      messages: [
        ...this.state.messages,
        message
      ]
    });
  }

  handleSubmit = (message) => {
    this.props.api.send(this.state.user, message);
  }

  handleUser = (user) => this.setState({
    user
  })

  render() {
    if (!this.state.user) {
      return (
        <UI>
          <Login onSubmit={this.handleUser} />
        </UI>
      )
    }
    return (
      <UI>
        <ChatList messages={this.state.messages} /> 
        <ChatInput onSubmit={this.handleSubmit} />
      </UI>
    );
  }
}

ReactDOM.render(<App api={api} />, document.getElementById('root'));