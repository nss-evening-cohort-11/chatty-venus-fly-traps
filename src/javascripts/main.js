import messagesDisplay from './components/messagesDisplay/messagesDisplay';
import users from './components/users/users';
import messageData from './helper/data/messageData';
import darkMode from './components/dark_mode/dark_mode';
import largeText from './components/large_text/large_text';
import 'bootstrap';
import '../styles/main.scss';

const moment = require('moment');

const addMessage = (e) => {
  const allMessages = messageData.getMessages();
  if (e.which === 13) {
    e.preventDefault();
    let messageInput = $('#message-input').val();
    messageInput = messageInput.replace(':smile:', '😊');
    messageInput = messageInput.replace(':coronavirus:', '😷');
    messageInput = messageInput.replace(':poop:', '💩');
    const messageObject = {
      id: `message${allMessages.length + 1}`,
      name: users.selectName(),
      message: messageInput,
      timestamp: moment().format('MMMM Do, YYYY h:mm A'),
      color: users.selectColor(),
    };
    messageData.setMessages(messageObject);
    $('#message-input').val('');
  }

  messagesDisplay.messageBuilder();

  if (allMessages.length === 0) {
    $('#clear-button').prop('disabled', true);
  } else {
    $('#clear-button').prop('disabled', false);
  }
};


const deleteMessage = (e) => {
  const allMessages = messageData.getMessages();
  const messageId = e.target.closest('button').id;
  const messagePosition = allMessages.findIndex((p) => p.id === messageId);
  allMessages.splice(messagePosition, 1);
  if (allMessages.length === 0) {
    $('#clear-button').prop('disabled', true);
  } else {
    $('#clear-button').prop('disabled', false);
  }
};

const clearMessages = () => {
  messageData.setMessages(); // Calling setMessages() with no argument sets the messages array to 0, see lines 40-44 in messageData.js
  messagesDisplay.messageBuilder();
  $('#clear-button').prop('disabled', true);
};

const init = () => {
  users.printUsers();
  $('#clear-button').on('click', clearMessages);
  $('body').on('click', '#dark-mode-checkbox', darkMode.toggleDarkMode);
  $('body').on('click', '#large-text-checkbox', largeText.toggleLargeText);
  messagesDisplay.messageBuilder();
  $('#message-container').on('click', deleteMessage);
  $('body').on('keypress', '#message-input', addMessage);
};

init();
