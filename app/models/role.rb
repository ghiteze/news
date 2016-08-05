class Role < ActiveRecord::Base
  has_many :admins_roles
  has_many :admins, through: :admins_roles
end
