var postgres = require('./postgres');


var users = {

  getAllUsers: function () {
    return {
      text: 'SELECT get_users()',
      func: 'get_users'
    };

  },


  getUserById: function (parameters) {
    return {
      text: 'SELECT get_user_by_id($1)',
      values: [parameters['userId']],
      func: 'get_user_by_id'
    }
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
  },

  uploadUserPhoto: function (parameters) {
    return {
      text: 'set_user_photo($1)',
      values: [parameters['userId']],
      func: 'set_user_photo'
    }
  }

};

module.exports = users;
