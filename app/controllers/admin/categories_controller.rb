class Admin::CategoriesController < ApplicationController
  before_action :authenticate_admin
  layout 'admin'

  def index
    @categories = Category.all
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to admin_categories_path
    else
      @categories = Category.all
      render 'index'
    end
  end

  def edit
    @category = Category.find(params[:id])
    respond_to do |format|
      format.json { render :json => @category }
    end
  end

  def update
    @category = Category.find(params[:id])
    @category.update(category_params)
    redirect_to admin_categories_path
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    redirect_to admin_categories_path
  end

  private
  def category_params
    params.require(:category).permit(:name, :slug, :parent)
  end
  
end
