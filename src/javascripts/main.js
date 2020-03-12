import messagesDisplay from './components/messagesDisplay/messagesDisplay';
import users from './components/users/users';
import deleteMessage from './components/delete_message/delete_message';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  users.printUsers();
  messagesDisplay.messageBuilder();
  $('#message-container').on('click', deleteMessage.deleteMessage());
};

init();
