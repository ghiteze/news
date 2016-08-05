class Admin::DashboardController < ApplicationController
  before_action :authenticate_admin, :check_if_admin_logged_in
  layout 'admin'
  
  def index
  end
end
