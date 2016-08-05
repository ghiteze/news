class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.integer :admin_id
      t.text :content

      t.timestamps null: false
    end
  end
end
