import utils from '../../helper/utils';
import userData from '../../helper/data/userData';

const printUsers = () => {
  const allUsers = userData.getUsers();
  let domString = '';
  domString += '<select class="custom-select" id="inputGroupSelect">';
  domString += '<option selected>Select User</option>';
  allUsers.forEach((user) => {
    domString += `<option class="dropdown-item" id="${user.id}" value="${user.name}">${user.name}</option>`;
  });
  domString += '</select>';
  utils.printToDom('users-dropdown', domString);
};

const selectName = () => {
  const selectedUserId = $('#inputGroupSelect :selected').attr('id');
  const users = userData.getUsers();
  const selectedIndex = users.findIndex((x) => x.id === selectedUserId);
  return users[selectedIndex].name;
};

const selectId = () => {
  const selectedUserId = $('#inputGroupSelect :selected').attr('id');
  const users = userData.getUsers();
  const selectedIndex = users.findIndex((x) => x.id === selectedUserId);
  if (selectedUserId) {
    return users[selectedIndex].id;
  }
  return undefined;
};

const selectColor = () => {
  const selectedUserId = $('#inputGroupSelect :selected').attr('id');
  const users = userData.getUsers();
  const selectedIndex = users.findIndex((x) => x.id === selectedUserId);
  return users[selectedIndex].color;
};

export default {
  printUsers, selectName, selectId, selectColor,
};
