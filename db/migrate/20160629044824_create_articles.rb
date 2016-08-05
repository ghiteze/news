class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :slug
      t.string :summary
      t.text :content
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
