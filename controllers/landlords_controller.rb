class LandlordsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_landlord, only: [:show, :edit, :update]
  before_action :require_login, except: [:create, :login, :process_login]


  def show
    render json: {
      user: current_user,
      landlord: current_landlord,
      properties: current_landlord&.properties,
      
    }
  end
  

  def edit
    render json: @landlord
  end

  def update
    if @landlord.update(landlord_params)
      render json: @landlord
    else
      render json: { errors: @landlord.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create
    @landlord = Landlord.new(landlord_params)
    if @landlord.save
      session[:landlord_id] = @landlord.id
      render json: @landlord
    else
      render json: { errors: @landlord.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def process_login
    @landlord = Landlord.find_by(email: params[:email])
    if @landlord && @landlord.authenticate(params[:password])
      session[:landlord_id] = @landlord.id
      render json: @landlord
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end
  
  
  
  
  private

  def set_landlord
    @landlord = current_landlord
  end

  def landlord_params
    params.permit(:username, :email, :bio, :phone_number, :image, :password)
  end
  
  
  

  def require_login
    unless current_landlord
      render json: { error: 'You must be logged in as a landlord to access this page' }, status: :unauthorized
    end
  end
end
