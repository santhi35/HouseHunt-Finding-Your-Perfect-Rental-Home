class Message < ApplicationRecord
  belongs_to :user
  belongs_to :landlord
  belongs_to :property
end
