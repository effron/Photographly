var PhotoShowController = function($element){
  this.$element = $element;
  // this.render();
  this.bindElement();
}

PhotoShowController.prototype.render = function(){
  this.$element.toggleClass("big")
}

PhotoShowController.prototype.bindElement = function(){
  var that = this
  this.$element.off("click");
  this.$element.on("click", function(event){
    console.log("I was clicked in the photo show controller")
    new UserIndexController($(this));
  })
}