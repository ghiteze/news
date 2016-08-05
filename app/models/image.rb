class Image < ActiveRecord::Base
  belongs_to :viewable

  has_attached_file :attachment,
    styles: { thumb: "120x120>", medium: "300x300>", large: "900x900" },
    path: ":rails_root/public/images/:viewable_type/:id/:style/:filename",
    url: "/images/:viewable_type/:id/:style/:filename",
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :attachment, content_type: /\Aimage\/.*\Z/

  Paperclip.interpolates :viewable_type do |attachment, style|
    attachment.instance.viewable_type
  end
  
end
