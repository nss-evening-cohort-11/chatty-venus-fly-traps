import messageData from '../../helper/data/messageData';
import users from '../users/users';
import messagesDisplay from '../messagesDisplay/messagesDisplay';

const likeEvent = (e) => { // LIKE FUNCTION
  const selectedUserId = users.selectId();
  const messageArray = messageData.getMessages();
  const messageId = e.target.closest('div').id;
  const messagePosition = messageArray.findIndex((p) => p.id === messageId);

  const thisUsersLike = messageArray[messagePosition].dislikes.includes(selectedUserId);
  const thisUsersDislike = messageArray[messagePosition].likes.includes(selectedUserId);
  const thisUsersMessage = selectedUserId === messageArray[messagePosition].userId;

  if (thisUsersLike || thisUsersDislike || thisUsersMessage || selectedUserId === undefined) {
    return;
  }
  messageData.setLikes(messagePosition, selectedUserId);
  messagesDisplay.messageBuilder();
};

const dislikeEvent = (e) => { // DISLIKE FUNCTION
  const selectedUserId = users.selectId();
  const messageArray = messageData.getMessages();
  const messageId = e.target.closest('div').id;
  const messagePosition = messageArray.findIndex((p) => p.id === messageId);

  const thisUsersLike = messageArray[messagePosition].dislikes.includes(selectedUserId);
  const thisUsersDislike = messageArray[messagePosition].likes.includes(selectedUserId);
  const thisUsersMessage = selectedUserId === messageArray[messagePosition].userId;

  if (thisUsersLike || thisUsersDislike || thisUsersMessage || selectedUserId === undefined) {
    return;
  }
  messageData.setDislikes(messagePosition, selectedUserId);
  messagesDisplay.messageBuilder();
};

export default { likeEvent, dislikeEvent };
