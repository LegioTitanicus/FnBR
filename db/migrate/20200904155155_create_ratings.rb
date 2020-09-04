class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :submission_id, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end
  end
end
