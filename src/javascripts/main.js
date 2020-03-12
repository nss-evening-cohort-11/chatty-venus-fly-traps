import '../styles/main.scss';
import messagesData from './helper/data/messageData';

const addMessage = () => {
  const messageInput = $('#message-input').val();
  messagesData.setMessages(messageInput);
};
$('#body').on('keypress', '#message-input', addMessage);
