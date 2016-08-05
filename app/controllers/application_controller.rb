class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # skip_before_filter :verify_authenticity_token, only: :create in Ckeditor::PicturesController
  protect_from_forgery with: :exception

  def current_admin
    @current_admin ||= Admin.find(session[:admin_id]) if session[:admin_id]
  end

  def authenticate_admin
    redirect_to admin_login_path if current_admin.nil?
  end

  def check_if_user_logged_in
    redirect_to admin_root_path if current_admin.present?
  end

  def check_if_admin_logged_in
    redirect_to admin_articles_path unless current_admin.is_admin?
  end


  helper_method :current_admin
end

