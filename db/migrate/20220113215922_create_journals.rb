class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.string :title
      t.integer :mood
      t.text :journal_entry
      t.string :relax_entry
      t.text :grateful_entry
      t.boolean :grateful_entry_private
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
