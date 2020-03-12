import '../styles/main.scss';
import messageData from '../../helper/data/messageData';
import setMessage from '../../helper/data/messageData';

const addMessage = () => {
  const messageInput = $('#message-input').val();
  const setMessage.messageData(messageInput);
};
$('#body').on('keypress','#message-input', addMessage);
