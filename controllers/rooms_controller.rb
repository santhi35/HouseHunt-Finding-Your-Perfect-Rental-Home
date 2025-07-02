class RoomsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_property
  before_action :set_room, only: [:show, :edit, :update, :destroy]

  

  def index
    @rooms = @property.rooms
    render json: @rooms
  end

  def create
    @room = @property.rooms.build(room_params)
    if @room.save
      render json: @room, status: :created
    else
      render json: { errors: @room.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @room = Room.find(params[:id])
    render json: @room
  end
  

  def edit
    # You can choose to implement this based on your needs
  end

  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: { errors: @room.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @room.destroy
    head :no_content
  end

  def pay_deposit
    # Find the room based on the room ID
    @room = Room.find(params[:id])

    # Implement your logic for handling the deposit payment
    # This is where you might want to interact with a payment gateway or update the room status

    render json: { message: 'Deposit payment successful' }
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Room not found' }, status: :not_found
  rescue StandardError => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  private

  def set_property
    @property = Property.find(params[:property_id])
  end

  def set_room
    @room = @property.rooms.find(params[:id])
  end

  def room_params
    params.permit(:room_type, :price, :tenant_name, :occupied, :image)
  end
end
