import messageData from '../../helper/data/messageData';
import users from '../users/users';
import messagesDisplay from '../messagesDisplay/messagesDisplay';

const likeEvent = (e) => {
  const newLike = users.selectId();
  const messageArray = messageData.getMessages();
  const messageId = e.target.closest('div').id;
  const messagePosition = messageArray.findIndex((p) => p.id === messageId);
  if (messageArray[messagePosition].likes.includes(newLike) || newLike === messageArray[messagePosition].userId || messageArray[messagePosition].dislikes.includes(newLike)) {
    return;
  }
  messageData.setLikes(messagePosition, newLike);
  messagesDisplay.messageBuilder();
};

const dislikeEvent = (e) => {
  const newDislike = users.selectId();
  const messageArray = messageData.getMessages();
  const messageId = e.target.closest('div').id;
  const messagePosition = messageArray.findIndex((p) => p.id === messageId);
  if (messageArray[messagePosition].dislikes.includes(newDislike) || newDislike === messageArray[messagePosition].userId || messageArray[messagePosition].likes.includes(newDislike)) {
    return;
  }
  messageData.setDislikes(messagePosition, newDislike);
  messagesDisplay.messageBuilder();
};

export default { likeEvent, dislikeEvent };
