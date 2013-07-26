class Photo < ActiveRecord::Base
  attr_accessible :file_path, :user_id

  belongs_to :user
  has_many :taggings
  has_many :tagged_users, through: :taggings, source: :user
end
