class CategoriesController < ApplicationController

  def show
    @category = Category.find_by(slug: params[:category])
    @articles = @category.articles.order(created_at: :desc)
    @hot_news = Article.limit(5).order(created_at: :desc)
  end

end
