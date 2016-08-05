class Category < ActiveRecord::Base
  has_many :articles, dependent: :destroy

  validates :name, :slug, presence: true
  before_save :set_default_parent

  def set_default_parent
    self.parent = 0 if self.parent.nil?
  end

  def parent_name
    self.parent == 0 ? "None" : Category.find(parent).name
  end

end
