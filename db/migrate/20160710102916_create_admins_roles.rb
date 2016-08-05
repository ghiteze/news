class CreateAdminsRoles < ActiveRecord::Migration
  def change
    create_table :admins_roles do |t|
      t.integer :admin_id
      t.integer :role_id

      t.timestamps null: false
    end
  end
end
