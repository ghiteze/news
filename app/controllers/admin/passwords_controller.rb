class Admin::PasswordsController < ApplicationController
  before_action :authenticate_admin
  layout 'admin'

  def update
    @admin = Admin.find_by(username: params[:username])
    if @admin == current_admin && Admin.authenticate(params[:username], params[:admin][:current_password])
      @admin.update(admin_update_password_params)

      redirect_to admin_settings_path
    else
      redirect_to admin_root_path
    end
  end

  private
  def admin_update_password_params
    params.require(:admin).permit(:password)
  end
  
end
