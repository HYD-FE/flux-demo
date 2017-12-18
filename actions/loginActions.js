var AppDispatcher = require('../dispatcher/AppDispatcher')

var loginActions = {
  validateInfo: function (info) {
    AppDispatcher.dispatch({
      actionType: 'VALIDATE_INFO',
      text: info
    })
  }
}

module.exports = loginActions
