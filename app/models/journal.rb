class Journal < ApplicationRecord
  validates :title, presence: true, length: { minimum: 6, maximum: 40 }

  validates :journal_entry, presence: true

  validates :grateful_entry, presence: true

  belongs_to :user
end
