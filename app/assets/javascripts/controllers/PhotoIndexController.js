var PhotoIndexController = function($element){
  that = this;
  this.$element = $element
  Photo.fetch(function(){
    that.render()
    that.bindElement();
  });
}

PhotoIndexController.prototype.render = function() {
  var templateFunction = JST['templates/photoIndex'];
  var renderedTemplate = templateFunction({photos: Photo.all});

  this.$element.append(renderedTemplate)

}

PhotoIndexController.prototype.bindElement = function() {
  this.$element.find(".photo-index").on("mouseenter", 'li', function(event){
    $(this).toggleClass("big")
    new PhotoShowController($(this));
  })
  this.$element.find(".photo-index").on("mouseleave", 'li', function(event){
    $(this).toggleClass("big")
  })
}