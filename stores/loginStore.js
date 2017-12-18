var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

module.exports = assign(
  {}, EventEmitter.prototype, {
    name: 'dinglei',
    password: 'zuxi',
    message: '密码和账号都不对',
    info: {
      name: 'dinglei5959',
      password: 'zuxi123'
    },
    getInfo: function () {
      return this.info
    },
    getMessage: function () {
      return this.message
    },
    emitHandler (type) {
      this.emit(type)
    },
    addEventListner (obj) {
      this.on(obj.type, obj.callback)
    },
    updateMessage: function (text) {
      if (text.name === this.info.name && text.password === this.info.password) {
        this.message = '恭喜你答对了！'
      } else if (text.name !== this.info.name && text.password === this.info.password) {
        this.message = '名字不对！'
      } else if (text.name === this.info.name && text.password !== this.info.password) {
        this.message = '密码不对！'
      } else {
        this.message = '密码和账号都不对'
      }
    },
    getDetails: function () {
      return {
        name: this.name,
        password: this.password,
        message: this.message
      }
    }
  })
