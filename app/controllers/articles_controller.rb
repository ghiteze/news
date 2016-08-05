class ArticlesController < ApplicationController

  def index
    @articles = Article.limit(5).order(created_at: :desc).offset(5 * (params[:page].to_i - 1))
    @articles = @articles.present? ? @articles.as_json(methods: [:cat, :time, :image_src]) : nil
    respond_to do |format|
      format.json { render :json => @articles }
    end
  end

  def show
    @article = Article.find_by(:slug => params[:slug])
    @category = @article.category
    @related_news = Article.limit(10).order(created_at: :desc);
  end

end
