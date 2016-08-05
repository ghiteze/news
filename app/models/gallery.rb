class Gallery < ActiveRecord::Base

  has_attached_file :attachment,
    styles: { thumb: "300x300>", medium: "700x700>", large: "900x900" },
    path: ":rails_root/public/galleries/:id/:style/:filename",
    url: "/galleries/:id/:style/:filename",
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :attachment, content_type: /\Aimage\/.*\Z/

end
