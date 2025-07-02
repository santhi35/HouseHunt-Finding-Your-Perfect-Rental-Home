class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user
  before_action :set_landlord
  before_action :set_property
  before_action :set_message, only: [:show, :edit, :update, :destroy]

  def new
    @message = @user.messages.build
    render json: @message
  end

  def index
    @messages = Message.where(landlord_id: params[:landlord_id])
    render json: @messages
  end

  def create
    @message = @landlord.messages.build(message_params)
    @message.user = current_user
  
    if @message.save
      render json: @message, status: :created
    else
      render json: { errors: @message.errors.full_messages }, status: :unprocessable_entity
    end
  end
  

  def show
    render json: @message
  end

  def edit
    render json: @message
  end

  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: { errors: @message.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @message.destroy
    head :no_content
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_landlord
    @landlord = Landlord.find(params[:landlord_id])
  end

  def set_property
    @property = Property.find(params[:property_id])
  end

  def set_message
    @message = @user.messages.find(params[:id])
  end

  def message_params
    params.require(:message).permit(:content)
  end
end
