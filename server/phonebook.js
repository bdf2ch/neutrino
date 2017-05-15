
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
  },

  editDivision: function (parameters) {
    return {
      text: 'select edit_phonebook_division($1, $2, $3)',
      values: [parameters['id'], parameters['parentId'], parameters['title']],
      func: 'edit_phonebook_division'
    }
  },

  getAllAts: function () {
    return {
      text: 'select get_ats()',
      values: [],
      func: 'get_ats'
    }
  }

};

module.exports = phonebook;
