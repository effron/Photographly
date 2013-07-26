class Photos < ActiveRecord::Base
  attr_accessible :file_path, :user_id
end
