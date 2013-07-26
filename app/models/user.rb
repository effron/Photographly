class User < ActiveRecord::Base
  attr_accessible :name, :password, :password_confirmation, :session_token
  has_secure_password

  has_many :photos
  has_many :taggings
  has_many :tagged_photos, through: :taggings, source: :photo
  has_many :friendings
  has_many :friends, through: :friendings, source: :friend

  validates :name, presence: true
  validates :name, uniqueness: true
end
