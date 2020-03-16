import messageData from '../../helper/data/messageData';
import utils from '../../helper/utils';

const messageBuilder = () => {
  let domString = '';
  const messageArray = messageData.getMessages();

  messageArray.slice().reverse().forEach((message) => {
    domString += `<div id="${message.id}" class="alert alert-${message.color} alert-dismissible fade show" role="alert">`;
    domString += `  <strong>${message.name}</strong> <p>${message.message}</p>`;
    domString += '  <button type="button" class="close delete-btn" data-dismiss="alert" aria-label="Close">';
    domString += '    <span aria-hidden="true">&times;</span>';
    domString += '  </button>';
    domString += `  <small class="align-middle">${message.timestamp}</small>`;
    domString += `  <button class="btn"><i class="fas fa-thumbs-up like-btn"> ${message.likes.length}</i></button></button>`;
    domString += `  <button class="btn"><i class="fas fa-thumbs-down dislike-btn"> ${message.dislikes.length}</i></button></button>`;
    domString += '</div>';
  });

  utils.printToDom('message-container', domString);
};

export default { messageBuilder };
