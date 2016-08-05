class WelcomeController < ApplicationController
  def index
    @slides = Slide.where(is_active: true)
    @articles = @hot_news = Article.limit(5).order(created_at: :desc).includes(:category, :images)
    @galleries = Gallery.order(created_at: :desc).limit(6)
  end
end
