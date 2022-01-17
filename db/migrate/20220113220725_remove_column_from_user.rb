class RemoveColumnFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :name
  end
end
