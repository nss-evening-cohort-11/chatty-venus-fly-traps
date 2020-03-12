import messagesDisplay from './components/messagesDisplay/messagesDisplay';
import users from './components/users/users';
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
  users.printUsers();
  messagesDisplay.messageBuilder();
  $('#message-container').on('click', deleteMessage);
};

init();
