class CreateApps < ActiveRecord::Migration
  def change
    create_table :apps do |t|
    	t.string :region_name
    	t.string :region_population_size
    	t.text :region_borders
    	t.string :top_industry_1
    	t.string :top_industry_2
    	t.string :top_industry_3
    	t.text :region_challenges_ide
    	t.string :champion_name
    	t.string :champion_organization
    	t.string :champion_email
    	t.string :champion_phone
    	t.string :champion_address
    	t.text :champion_current_role
    	t.text :why_reap
    	t.text :sponsor_entity
    	t.text :team_in_place
    	t.string :govt_name
    	t.string :govt_organization
    	t.string :govt_role
    	t.string :govt_email
    	t.string :govt_other
    	t.string :entrepreneur_name
    	t.string :entrepreneur_organization
    	t.string :entrepreneur_role
    	t.string :entrepreneur_email
    	t.string :entrepreneur_other
    	t.string :corp_name
    	t.string :corp_organization
    	t.string :corp_role
    	t.string :corp_email
    	t.string :corp_other
    	t.string :risk_name
    	t.string :risk_organization
    	t.string :risk_role
    	t.string :risk_email
    	t.string :risk_other
    	t.string :university_name
    	t.string :university_organization
    	t.string :university_role
    	t.string :university_email
    	t.string :university_other
      	t.timestamps
    end
  end
end
