class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, unless: -> { request.format.json? }

  helper_method :current_landlord, :current_user

  private

  def current_landlord
    @current_landlord ||= Landlord.find_by(id: session[:landlord_id])
  end
  

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def require_login
    unless current_landlord || current_user
      render json: { error: 'You must be logged in to access this page' }, status: :unauthorized
    end
  end
end
