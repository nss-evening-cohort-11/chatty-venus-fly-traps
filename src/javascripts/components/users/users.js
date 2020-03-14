import utils from '../../helper/utils';
import userData from '../../helper/data/userData';

const printUsers = () => {
  const allUsers = userData.getUsers();
  let domString = '';
  domString += '<select class="custom-select" id="inputGroupSelect02">';
  domString += '<option selected>Choose...</option>';
  allUsers.forEach((user) => {
    domString += `<option class="dropdown-item" id="${user.id}" value="${user.name}">${user.name}</option>`;
  });
  domString += '</select>';
  utils.printToDom('users-dropdown', domString);
};

const selectName = () => {
  const selectedUserId = $('#inputGroupSelect02 :selected').attr('id');
  const users = userData.getUsers();
  const selectedIndex = users.findIndex((x) => x.id === selectedUserId);
  return users[selectedIndex].name;
};
const selectColor = () => {
  const selectedUserId = $('#inputGroupSelect02 :selected').attr('id');
  const users = userData.getUsers();
  const selectedIndex = users.findIndex((x) => x.id === selectedUserId);
  return users[selectedIndex].color;
};
export default { printUsers, selectName, selectColor };
