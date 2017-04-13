var users = {

  getAllUsers: function () {
    return {
      text: 'SELECT get_users()',
      func: 'get_users'
    };
  },


  getPortionOfUsers: function (parameters) {
    return {
      text: 'SELECT get_users_portion($1, $2)',
      values: [parameters['start'], parameters['limit']],
      func: 'get_users_portion'
    };
  },


  searchUsers: function (parameters) {
    return {
      text: 'SELECT search_users($1)',
      values: [parameters['search']],
      func: 'search_users'
    };
  }

};

module.exports = users;
