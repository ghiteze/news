class Admin < ActiveRecord::Base
  has_many :admins_roles
  has_many :roles, through: :admins_roles

  has_many :logs
  has_many :articles, through: :logs

  attr_accessor :password
  before_save :encrypted_password
  after_save :clear_password

  validates_confirmation_of :password, on: :update
  validates :username, :password, presence: true

  def self.authenticate(username, password)
    user = find_by_username(username)
    user && user.match_password(password) ? user : nil
  end

  def match_password(password)
    self.hash_password == BCrypt::Engine.hash_secret(password, salt_password)
  end

  def encrypted_password
    if password.present?
      self.salt_password = BCrypt::Engine.generate_salt
      self.hash_password = BCrypt::Engine.hash_secret(password, salt_password)
    end
  end

  def clear_password
    self.password = nil
  end

  def role?(role)
    !!self.roles.find_by_name(role.to_s.camelize)
  end

  def is_admin?
    !!self.role?("Admin")
  end


end
