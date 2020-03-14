import messagesDisplay from './components/messagesDisplay/messagesDisplay';
import users from './components/users/users';
import messageData from './helper/data/messageData';
import '../styles/main.scss';
import 'bootstrap';


const deleteMessage = (e) => {
  const allMessages = messageData.getMessages();
  const messageId = e.target.closest('button').id;

  const messagePosition = allMessages.findIndex((p) => p.id === messageId);
  allMessages.splice(messagePosition, 1);
  if (allMessages.length === 0) {
    console.error(allMessages);
    document.getElementById('clear-button').disabled = true;
  } else {
    document.getElementById('clear-button').disabled = false;
  }
};

const clearMessages = () => {
  messageData.setMessages(); // Calling setMessages() with no argument sets the messages array to 0, see lines 40-44 in messageData.js
  messagesDisplay.messageBuilder();
  document.getElementById('clear-button').disabled = true;
};

const init = () => {
  users.printUsers();
  messagesDisplay.messageBuilder();
  $('#message-container').on('click', deleteMessage);
  $('#clear-button').on('click', clearMessages);
};

init();
