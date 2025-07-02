class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.references :user, null: false, foreign_key: true
      t.references :landlord, null: false, foreign_key: true
      t.text :content
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
