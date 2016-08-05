class Admin::SlidesController < ApplicationController
  before_action :authenticate_admin
  layout 'admin'
  
  def index
    @slides = Slide.includes(:images)
  end

  def new
    @slide = Slide.new
  end

  def create
    @slide = Slide.new(slide_params)
    if @slide.save
      @slide.images.create(attachment: params[:image])
      redirect_to admin_slides_path
    else
      render 'new'
    end
  end

  def edit
    @slide = Slide.find(params[:id])
  end

  def update
    @slide = Slide.find(params[:id])
    if @slide.update(slide_params)
      @slide.images.first.update(attachment: params[:image]) if params[:image]
      redirect_to admin_slides_path
    end
  end

  private
  def slide_params
    params.require(:slide).permit(:title, :url, :is_active)
  end
  
end
