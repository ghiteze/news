class AddDeletedToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :deleted, :boolean, :default => false
  end
end
