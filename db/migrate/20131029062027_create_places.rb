class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
    	t.string :name
    	t.string :key_challenge
    	t.string :key_challenge_index
    	t.string :key_challenge_change
    	t.string :reap_index_img_url
    	t.string :reap_index
    	t.string :reap_index_change
    	t.string :money_invested_in_university_startups
    	t.string :money_invested_in_university_startups_change
    	t.string :new_phd_grads
    	t.string :new_phd_grads_change
    	t.string :num_university_spin_offs
    	t.string :num_university_spin_offs_change
    	t.timestamps
    end
  end
end
