class Journal < ApplicationRecord
  validates :title, presence: true, length: { minimum: 6, maximum: 40 }
  validates :mood, presence: true
  validates :journal_entry, presence: true
  validates :relax_entry, presence: true
  validates :grateful_entry, presence: true
  validates :grateful_entry_private, presence: true
  belongs_to :user
end
