class Admin::UsersController < ApplicationController
  before_action :authenticate_admin, :check_if_admin_logged_in, except: :edit
  layout 'admin'
  
  def index
    @users = Admin.includes(:roles)
    @user  = Admin.new
  end

  def create
    @users = Admin.includes(:roles)
    @user  = Admin.new(admin_params)
    if @user.save
      if params[:roles].present?
        @user.roles << Role.find(params[:roles])
      else
        @user.roles << Role.find_by(name: "Writer")
      end
      redirect_to admin_users_path
    else
      render 'index'
    end
  end

  def update
  end

  def edit
  end

  def destroy
    @user = Admin.find(params[:id])
    @user.destroy
    redirect_to admin_users_path
  end

  private
  def admin_params
    params.require(:admin).permit(:username, :password)
  end

end
