class Slide < ActiveRecord::Base
  has_many :images, :as => :viewable
  validates :title, :url, presence: true

  def image_src(style)
    images.first.attachment.url(style)
  end
  
end
