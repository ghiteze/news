class AddAttachmentToGalleries < ActiveRecord::Migration
  def change
    add_attachment :galleries, :attachment
  end
end
