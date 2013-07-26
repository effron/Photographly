class User < ActiveRecord::Base
  attr_accessible :name, :password, :password_confirmation, :session_token
  has_secure_password

  validates :name, presence: true
  validates :name, uniqueness: true
end
