# db/migrate/xxxxxxxxxxxxxx_create_rooms.rb

class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :room_type
      t.integer :price
      t.string :tenant_name
      t.boolean :occupied, default: false
      t.references :property, null: false, foreign_key: true
      t.string :image

      t.timestamps
    end
  end
end
