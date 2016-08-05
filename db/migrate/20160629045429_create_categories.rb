class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name
      t.string :slug
      t.integer :parent, :default => 0

      t.timestamps null: false
    end
  end
end
