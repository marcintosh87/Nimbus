class User < ApplicationRecord
  validates :first_name, :last_name, presence: true
  validates :email,
            presence: true,
            uniqueness: true,
            format: /\w+@\w+\.{1}[a-zA-Z]{2,}/
  validates :password, presence: true, length: { minimum: 6, maximum: 20 }

  has_many :journals
end
