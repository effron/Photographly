var Photo = function(attrs){
  if (attrs){
    this.user_id = attrs["user_id"];
    this.file_path = attrs["file_path"];
    this.id = attrs["id"];
  }
  this.baseUrl = "/photos/"
}

Photo.baseUrl = "/photos/"
Photo.all = [];

Photo.fetch = function(callback){
  var url = this.baseUrl;
  Photo.all = [];
  $.get(url, function(response){
    _.each(response, function(photoJson){
      Photo.all.push(new Photo(photoJson))
    });
    callback()
  });
}

Photo.find = function(id){
  return _.find(Photo.all, function(photo){
    return photo.id == id;
  });
}

Photo.prototype.updateAttributes = function(attrs){
  this.user_id = attrs["user_id"];
  this.file_path = attrs["file_path"];
  this.id = attrs["id"];
}

Photo.prototype.fetch = function(id){
  var url = this.baseUrl + id;
  var that = this;
  $.get(url, function(response){
    that.updateAttributes(response);
  }, "json");
};

Photo.prototype.destroy = function(callback){
  var url = this.baseUrl + this.id;
  var that = this;
  $.ajax({
    url: url,
    method: "DELETE",
    success: function(response){
      that.id = undefined;
      console.log("photo deleted. meow");
    }
  });
};

Photo.prototype.save = function(callback){

  var that = this;
  var photoForm = this.serialize()
  if (this.id){
    $.ajax({
      url: this.baseUrl + that.id,
      method: "PUT",
      data: photoForm,
      success: function(response) {
        that.updateAttributes(response);
      }
    })
  }
  else{
    $.ajax({
      url: this.baseUrl,
      method: "POST",
      data: photoForm,
      success: function(response) {
        that.updateAttributes(response);
      }
    })
  }
}

Photo.prototype.serialize = function() {
  return $.param({file_path: this.file_path})
}


