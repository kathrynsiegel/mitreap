class CreateIndividuals < ActiveRecord::Migration
  def change
    create_table :individuals do |t|
    	t.string :name
    	t.string :title
    	t.text :description
    	t.string :location
    	t.text :bio
    	t.integer :place_id
    	t.timestamps
    end
  end
end
