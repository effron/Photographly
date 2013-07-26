var PhotoShowController = function($element){
  this.$element = $element;
  this.render();
}

PhotoShowController.prototype.render = function(){
  this.$element.toggleClass("big")
}