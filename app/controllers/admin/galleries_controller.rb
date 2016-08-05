class Admin::GalleriesController < ApplicationController
  before_action :authenticate_admin
  layout 'admin'
  
  def index
    @gallery = Gallery.new
    @galleries = Gallery.order(created_at: :desc)
  end

  def create
    @images = params[:gallery][:images]
    @images.map { |img| Gallery.create(attachment: img) }
    redirect_to admin_galleries_path
  end

  def destroy
    @image = Gallery.find(params[:id])
    @image.destroy
    respond_to do |format|
      format.json { render text: "Deleted" }
    end
  end
  
end
