var Tag = function(attrs){
  if (attrs){
    this.user_id = attrs["user_id"];
    this.photo_id = attrs["photo_id"];
    this.id = attrs["id"];
  }
  this.baseUrl = "/photos/"+ this.photo_id + "/taggings/"
}

Tag.all = [];

Tag.fetch = function(){
  var url = this.baseUrl;
  if (url == null){
    alert("NOT IN CONTEXT OF ANY PHOTOS!!!")
  }

  Tag.all = [];
  $.get(url, function(response){
    _.each(response, function(tagJson){
      Tag.all.push(new Tag(tagJson))
    });
  });
}

Tag.find = function(id){
  return _.find(Tag.all, function(tag){
    return tag.id == id;
  });
}

Tag.prototype.updateAttributes = function(attrs){
  this.user_id = attrs["user_id"];
  this.photo_id = attrs["photo_id"];
  this.id = attrs["id"];
}

Tag.prototype.fetch = function(id){
  var url = this.baseUrl + id;
  var that = this;
  $.get(url, function(response){
    that.updateAttributes(response);
  }, "json");
};

Tag.prototype.destroy = function(callback){
  var url = this.baseUrl + this.id;
  var that = this;
  $.ajax({
    url: url,
    method: "DELETE",
    success: function(response){
      that.id = undefined;
      console.log("Tag deleted. meow");
    }
  });
};

Tag.prototype.save = function(callback){

  var that = this;
  var tagForm = this.serialize()
  if (this.id){
    $.ajax({
      url: this.baseUrl + that.id,
      method: "PUT",
      data: tagForm,
      success: function(response) {
        that.updateAttributes(response);
      }
    })
  }
  else{
    $.ajax({
      url: this.baseUrl,
      method: "POST",
      data: tagForm,
      success: function(response) {
        that.updateAttributes(response);
      }
    })
  }
}

Tag.prototype.serialize = function() {
  return $.param({user_id: this.user_id})
}