var User = function(attrs){
  if (attrs){
    this.name = attrs["name"];
    this.id = attrs["id"];
  }
  this.baseUrl = "/users/"
}
User.baseUrl = "/users/"

User.all = [];

User.fetch = function(){
  var url = this.baseUrl;
  User.all = [];
  $.get(url, function(response){
    _.each(response, function(userJson){
      User.all.push(new User(userJson))
    });
  });
}

User.find = function(id){
  return _.find(User.all, function(user){
    return user.id == id;
  });
}

User.prototype.updateAttributes = function(attrs){
  this.name = attrs["name"];
  this.id = attrs["id"];
}

User.prototype.fetch = function(id){
  var url = this.baseUrl + id;
  var that = this;
  $.get(url, function(response){
    that.updateAttributes(response);
  }, "json");
};

User.prototype.destroy = function(callback){
  var url = this.baseUrl + this.id;
  var that = this;
  $.ajax({
    url: url,
    method: "DELETE",
    success: function(response){
      that.id = undefined;
      console.log("User deleted. meow");
    }
  });
};

User.prototype.save = function(callback){

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

User.prototype.serialize = function() {
  return $.param({name: this.name})
}