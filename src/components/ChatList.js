import React from 'react';
import styled from 'styled-components';

const ChatMessageElement = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #d3d3d3;  
`;

const ChatListElement = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const toTwoDiggits = input => input < 10 ? `0${input}` : input;

const toDate = obj => {
  const hours = toTwoDiggits(obj.getHours());
  const minutes = toTwoDiggits(obj.getMinutes());

  return `${hours}:${minutes}`;
};

const ChatDate = ({
  date
}) => <span>[{toDate(new Date(date))}]</span>;

const ChatMessage = ({
  author,
  message,
  date
}) => {
  return (
    <ChatMessageElement>
      <ChatDate date={date} />
      {' '}
      <b>{author}</b>: {message}
    </ChatMessageElement>
  )
};


export class ChatList extends React.PureComponent {

  chatList = null;

  componentDidUpdate() {
    
  }

  render() {    
    return (
      <ChatListElement ref={ref => this.chatList = ref}>
        {this.props.messages.map(item => <ChatMessage key={item.id} {...item} />)}
      </ChatListElement>
    )
  }
}