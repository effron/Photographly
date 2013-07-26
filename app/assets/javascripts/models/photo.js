var Photo = function(attrs){
  if (attrs){
    this.user_id = attrs["user_id"];
    this.file_path = attrs["file_path"];
    this.id = attrs["id"];
  }
}

Photo.prototype.fetch = function(id){
  var url = "/photos/" + id;
  var that = this;
  $.get(url, function(response){
    that.user_id = response["user_id"];
    that.file_path = response["file_path"];
    that.id = response["id"];
  }, "json");
};

Photo.prototype.destroy = function(){
  var url = "/photos/" + this.id;
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

Photo.prototype.save = function(serializedData){

  var that = this;
  if (this.id){
    $.ajax({
      url: "/photos/" + that.id,
      method: "PUT",
      //WRITE THISsuccess: function
    })
  }
  else{

  }
}
//
// photo = new Photo
// photo.fetch(3)
// photo.file_path = //exists
//
// photo.user_id = 5
// //this should do something
// photo.save();

