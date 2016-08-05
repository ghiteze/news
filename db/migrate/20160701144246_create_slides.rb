class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.string :title
      t.string :url
      t.boolean :is_active, :default => false

      t.timestamps null: false
    end
  end
end
