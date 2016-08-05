class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :viewable_id
      t.string :viewable_type

      t.timestamps null: false
    end
  end
end
