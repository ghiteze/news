class Admin::LogsController < ApplicationController
  before_action :authenticate_admin
  layout 'admin'
  
  def index
    if current_admin.is_admin?
      @logs = Log.order(created_at: :desc).includes(:admin)
    else
      @logs = current_admin.logs.order(created_at: :desc)
    end
  end

  def show
    @username = Admin.find_by(username: params[:username])
    @logs = @username.logs.order(created_at: :desc)
  end
end
