# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  protect_from_forgery with: :null_session # To allow API requests without CSRF token

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { user: user, notice: 'Logged in successfully.' }
    else
      render json: { error: 'Invalid email or password.' }, status: :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { notice: 'Logged out successfully.' }
  end
end
