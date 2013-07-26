class CreateFriendings < ActiveRecord::Migration
  def change
    create_table :friendings do |t|
      t.integer :user_id
      t.integer :friend_id

      t.timestamps
    end
  end
end
