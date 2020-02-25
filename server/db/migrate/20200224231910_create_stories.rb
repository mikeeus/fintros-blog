class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :text
      t.string :type
      t.string :by
      t.datetime :time
      t.string :parent
      t.string :poll
      t.integer :kids, array: true
      t.string :url
      t.integer :score
      t.integer :parts, array: true
      t.boolean :dead
      t.boolean :deleted
      t.timestamps
    end
  end
end
