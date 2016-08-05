class Admin::RegistrationsController < ApplicationController
  before_action :authenticate_admin
  layout 'admin'
  
  def index
  end

  def create
    @user = Admin.new(admin_params)
    if @user.save
      @user.roles << Role.find(params[:roles])
      redirect_to admin_users_path, :notice => "Success"
    else
      redirect_to admin_users_path
    end
  end

  def edit
  end
  
  def update
    # if params[:image]
      # avatar = current_admin.images
      # if avatar.present?
        # avatar.first.update(attachment: params[:image])
      # else
        # avatar.create(attachment: params[:image])
      # end
    # end
    redirect_to admin_settings_path
  end

  private
  def admin_params
    params.require(:admin).permit(:username, :password)
  end

end
