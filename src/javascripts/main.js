import messagesDisplay from './components/messagesDisplay/messagesDisplay';
import users from './components/users/users';
import messageData from './helper/data/messageData';
import 'bootstrap';
import '../styles/main.scss';

const addMessage = () => {
  const messageInput = $('#message-input').val();
  messageData.setMessages(messageInput);
  console.error('addMessage');
};


const deleteMessage = (e) => {
  const allMessages = messageData.getMessages();
  const messageId = e.target.closest('button').id;
  const messagePosition = allMessages.findIndex((p) => p.id === messageId);
  allMessages.splice(messagePosition, 1);
};

const init = () => {
  users.printUsers();
  messagesDisplay.messageBuilder();
  $('#message-container').on('click', deleteMessage);
  $('#body').on('keypress', '#message-input', addMessage);
};

init();
