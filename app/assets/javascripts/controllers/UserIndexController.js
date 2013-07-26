var UserIndexController = function($element){
  console.log("I am user index controller")
  this.$element = $element
  var that = this
  User.fetch(function(){
    console.log("i was clicked again")
    that.render();
  })
}

UserIndexController.prototype.render = function(){
  console.log("I was rendered")
  var templateFunction = JST['templates/userIndex'];
  var renderedTemplate = templateFunction({users: User.all});
  this.$element.append(renderedTemplate)
}