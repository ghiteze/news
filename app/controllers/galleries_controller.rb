class GalleriesController < ApplicationController
  def index
    @galleries = Gallery.order(created_at: :desc)
  end
end
