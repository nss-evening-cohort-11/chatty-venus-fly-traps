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
    domString += `  <button class="btn like-btn text-${message.color}">👍 <small>${message.likes.length}</small></button>`;
    domString += `  <button class="btn dislike-btn text-${message.color}">👎 <small>${message.dislikes.length}</small></button>`;
    domString += '</div>';
  });


  utils.printToDom('message-container', domString);
};

export default { messageBuilder };
