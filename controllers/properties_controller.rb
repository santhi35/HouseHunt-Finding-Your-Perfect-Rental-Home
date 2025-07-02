class PropertiesController < ApplicationController
  skip_before_action :verify_authenticity_token


  before_action :set_property, only: [:show, :edit, :update, :destroy]
   before_action :authorize_landlord, except: [:index, :show, :create]
   


  def index
    @properties = Property.all
    render json: @properties
  end

  def show
    @property = Property.find(params[:id])
    render json: {
      property: @property,
      landlord: @property.landlord
    }
  end
  
  def rooms
    @property = Property.find(params[:property_id])
    @rooms = @property.rooms
    render json: @rooms
  end


  def create
    puts "Current Landlord ID: #{current_landlord&.id}"
  puts "Session Landlord ID: #{session[:landlord_id]}"

    @property = current_landlord.properties.new(property_params.merge(landlord_id: current_landlord.id))

    
    if @property.save
      render json: @property, status: :created
    else
      render json: { errors: @property.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  
  def edit
    render json: @property
  end

  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: { errors: @property.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @property.destroy
    head :no_content
  end

  private

  def set_property
    @property = Property.find(params[:id])
  end

  def authorize_landlord
    landlord_id_from_headers = request.headers['Landlord-Id']
    puts "Landlord ID from headers: #{landlord_id_from_headers}"
    puts "Current Landlord ID: #{current_landlord&.id}"
  
    # Ensure that headers contain Landlord-Id
    if landlord_id_from_headers.blank?
      render json: { error: 'Landlord-Id not provided in headers.' }, status: :unauthorized
      return
    end
  
    # Try to find the current landlord
    current_landlord = Landlord.find_by(id: session[:landlord_id])
  
    # Ensure that a current landlord is logged in
    if current_landlord.nil?
      render json: { error: 'You must be logged in to access this page' }, status: :unauthorized
      return
    end
  
    # Check if the IDs match
    unless landlord_id_from_headers.to_i == current_landlord.id
      render json: { error: 'Unauthorized access to property.' }, status: :unauthorized
      return
    end
  
    # Continue with the rest of the code
  end
  
  
  

  def property_params
    params.permit(:location, :environment, :security, :name, :images  ,:landlord_id)
  end
end
