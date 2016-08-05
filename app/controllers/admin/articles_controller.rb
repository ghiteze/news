class Admin::ArticlesController < ApplicationController
  before_action :authenticate_admin
  layout 'admin'

  def index
    @articles = Article.paging(params[:page])
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      @article.images.create(attachment: params[:images])
      @article.article_log('create', current_admin)
      redirect_to admin_articles_path
    else
      render 'new'
    end
  end

  def edit
    @article = Article.find(params[:id])
    @tags = @article.all_tags
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      @article.images.first.update(attachment: params[:images]) if params[:images]
      @article.article_log('update', current_admin)
      redirect_to admin_articles_path
    else
      render 'edit'
    end
  end

  def destroy
    @article = Article.find(params[:id])
    if @article.destroy
      @article.article_log('delete', current_admin)
      redirect_to admin_articles_path
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :slug, :summary, :content, :category_id, :_tags)
  end
end
