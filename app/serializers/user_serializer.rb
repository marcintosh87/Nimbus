class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :first_name, :last_name
  has_many :journals
end
