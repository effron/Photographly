var TagShowController = function($element){
  this.$element = $element;
  Tag.baseUrl = "photos/" + $element.data("id") + "/taggings/";
  Tag.fetch(function(){
    //WRITE THIS LATER
  })

}

