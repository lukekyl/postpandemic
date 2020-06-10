class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :message
      t.string :image
      t.integer :vote
      t.datetime :date

      t.timestamps
    end
  end
end
