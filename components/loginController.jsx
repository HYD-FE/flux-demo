 var React = require('react')
 var loginStore = require('../stores/loginStore')
 var LoginActions = require('../actions/loginActions')

 var loginController = React.createClass({
   getInitialState: function () {
     var obj = loginStore.getDetails()
     console.log(obj)
     return {
       name: obj.name,
       password: obj.password,
       message: obj.message
     }
   },
   updateName: function (e) {
     let state = this.state
     state.name = e.target.value
     this.setState(state)
     this.validateInfo()
   },
   updatePassword: function (e) {
     let state = this.state
     state.password = e.target.value
     this.setState(state)
     this.validateInfo()
   },
   validateInfo: function () {
     LoginActions.validateInfo({
       name: this.state.name,
       password: this.state.password,
       handlerType: 'change'
     })
   },
   updateMsg () {
     this.state.message = loginStore.getMessage()
     this.setState(this.state)
   },
   componentDidMount: function () {
     loginStore.addEventListner({
       type: 'change', // 触发的事件名定义
       callback: this.updateMsg
     })
   },
   render: function () {
     console.log(this)
     return (
       <article className='login-root'>
         <div>用户名：<input type='text' onChange={this.updateName} value={this.state.name} /></div>
         <div>密码：<input type='text' onChange={this.updatePassword} value={this.state.password} /></div>
         <div style={{color: 'red'}}>{this.state.message}</div>
         <div>
           <div>真实的用户名是:dinglei5959</div>
           <div>密码:zuxi123</div>
         </div>
       </article>
     )
   }
 })

 module.exports = loginController
