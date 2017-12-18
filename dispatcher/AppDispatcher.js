var Dispatcher = require('flux').Dispatcher
var AppDispatcher = new Dispatcher()
var ListStore = require('../stores/ListStore')
var LoginStore = require('../stores/loginStore')

// let info = {
//   name: 'dinglei5959',
//   password: 'zuxi123'
// }

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text)
      ListStore.emitChange()
      break
    case 'VALIDATE_INFO':
      LoginStore.updateMessage(action.text)
      LoginStore.emitHandler(action.text.handlerType)
      break
    default:
      // no op
  }
})

module.exports = AppDispatcher
