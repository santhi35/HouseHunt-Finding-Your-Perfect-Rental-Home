# app/models/room.rb
class Room < ApplicationRecord
  belongs_to :property
  

  validates :room_type, presence: true
  validates :price, presence: true

  # Validate presence of tenant_name if the room is occupied
  validates :tenant_name, presence: true, if: :occupied?

  def unoccupied?
    !occupied?
  end
end
