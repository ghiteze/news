class Tag < ActiveRecord::Base
  has_many :articles_tags
  has_many :articles, through: :articles_tags

  def self.find_or_create (tag)
    find_by_name(tag) || create(name: tag)
  end

end
