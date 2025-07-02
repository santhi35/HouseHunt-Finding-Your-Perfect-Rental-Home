class CreateLandlords < ActiveRecord::Migration[7.0]
  def change
    create_table :landlords do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.text :bio
      t.string :phone_number
      t.string :image

      t.timestamps
    end
  end
end
