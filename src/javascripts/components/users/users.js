import utils from '../../helper/utils';
import userData from '../../helper/data/userData';

const printUsers = () => {
  const allUsers = userData.getUsers();
  let domString = '';
  allUsers.forEach((user) => {
    domString += `<a id="${user.id}" class="dropdown-item" href="#">${user.name}</a>`;
  });
  utils.printToDom('users-dropdown', domString);
};

export default { printUsers };
