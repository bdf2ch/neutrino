
var phonebook = {

  getAllDivisions: function () {
    return {
      text: 'select get_phonebook_divisions()',
      func: 'get_phonebook_divisions'
    }
  },

  addDivision: function (parameters) {
    return {
      text: 'select add_phonebook_division($1, $2)',
      values: [parameters['parentId'], parameters['title']],
      func: 'add_phonebook_division'
    }
  }

};

module.exports = phonebook;
