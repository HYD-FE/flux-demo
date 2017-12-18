var React = require('react')
var ReactDOM = require('react-dom')
var MyButtonController = require('./components/MyButtonController')
var LoginController = require('./components/loginController')
console.dir(MyButtonController)
console.dir(LoginController)
ReactDOM.render(
  <LoginController />,
  document.querySelector('#example')
)
