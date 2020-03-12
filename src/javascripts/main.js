import messagesDisplay from './components/messagesDisplay/messagesDisplay';
import messageData from './helper/data/messageData';
import '../styles/main.scss';
import 'bootstrap';

const deleteMessage = (e) => {
  const allMessages = messageData.getMessages();
  const messageId = e.target.closest('button').id;
  console.error('messages array before delete', allMessages);
  const messagePosition = allMessages.findIndex((p) => p.id === messageId);
  allMessages.splice(messagePosition, 1);
  console.error('messages array after delete', allMessages);
};

const init = () => {
  messagesDisplay.messageBuilder();
  $('#message-container').on('click', deleteMessage);
};

init();
