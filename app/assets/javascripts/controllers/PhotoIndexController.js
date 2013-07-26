var PhotoIndexController = function($element){
  that = this;

  Photo.fetch(function(){
    that.render($element)
  });
}

PhotoIndexController.prototype.render = function($element) {
  var templateFunction = JST['templates/photoIndex'];
  var renderedTemplate = templateFunction({photos: Photo.all});

  $element.append(renderedTemplate)

}
