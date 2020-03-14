import messageData from '../../helper/data/messageData';
import utils from '../../helper/utils';

const messageBuilder = () => {
  let domString = '';
  const messageArray = messageData.getMessages();

  messageArray.slice().reverse().forEach((message) => {
    domString += `<div class="alert alert-${message.color} alert-dismissible fade show" role="alert">`;
    domString += `  <strong>${message.name}</strong> <p>${message.message}</p>`;
    domString += `  <button id="${message.id}-btn" type="button" class="close" data-dismiss="alert" aria-label="Close">`;
    domString += '    <span aria-hidden="true">&times;</span>';
    domString += '  </button>';
    domString += `  <small>${message.timestamp}</small>`;
    domString += '</div>';
  });

  utils.printToDom('message-container', domString);
};

export default { messageBuilder };
