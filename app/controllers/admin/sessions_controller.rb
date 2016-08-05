class Admin::SessionsController < ApplicationController
  before_action :check_if_user_logged_in, except: :destroy
  layout 'admin-login'
  
  def new
  end

  def create
    admin = Admin.authenticate(params[:username], params[:password])
    if admin
      session[:admin_id] = admin.id
      if current_admin.is_admin?
        redirect_to admin_root_path
      else
        redirect_to admin_articles_path
      end
    else
      render 'new'
    end
  end

  def destroy
    session[:admin_id] = nil
    redirect_to admin_login_path
  end

end
