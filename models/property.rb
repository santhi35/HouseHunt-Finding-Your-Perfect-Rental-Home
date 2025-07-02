# app/models/property.rb
class Property < ApplicationRecord
  belongs_to :landlord
  has_many :rooms, dependent: :destroy
  
  # other associations and validations...

  validates :location, presence: true
  validates :environment, presence: true
  validates :security, presence: true
end
