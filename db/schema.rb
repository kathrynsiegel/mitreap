# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131202185151) do

  create_table "apps", force: true do |t|
    t.string   "region_name"
    t.string   "region_population_size"
    t.text     "region_borders"
    t.string   "top_industry_1"
    t.string   "top_industry_2"
    t.string   "top_industry_3"
    t.text     "region_challenges_ide"
    t.string   "champion_name"
    t.string   "champion_organization"
    t.string   "champion_email"
    t.string   "champion_phone"
    t.string   "champion_address"
    t.text     "champion_current_role"
    t.text     "why_reap"
    t.text     "sponsor_entity"
    t.text     "team_in_place"
    t.string   "govt_name"
    t.string   "govt_organization"
    t.string   "govt_role"
    t.string   "govt_email"
    t.string   "govt_other"
    t.string   "entrepreneur_name"
    t.string   "entrepreneur_organization"
    t.string   "entrepreneur_role"
    t.string   "entrepreneur_email"
    t.string   "entrepreneur_other"
    t.string   "corp_name"
    t.string   "corp_organization"
    t.string   "corp_role"
    t.string   "corp_email"
    t.string   "corp_other"
    t.string   "risk_name"
    t.string   "risk_organization"
    t.string   "risk_role"
    t.string   "risk_email"
    t.string   "risk_other"
    t.string   "university_name"
    t.string   "university_organization"
    t.string   "university_role"
    t.string   "university_email"
    t.string   "university_other"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "individuals", force: true do |t|
    t.string   "name"
    t.string   "title"
    t.text     "description"
    t.string   "location"
    t.text     "bio"
    t.integer  "place_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "places", force: true do |t|
    t.string   "name"
    t.string   "key_challenge"
    t.string   "key_challenge_index"
    t.string   "key_challenge_change"
    t.string   "reap_index_img_url"
    t.string   "reap_index"
    t.string   "reap_index_change"
    t.string   "money_invested_in_university_startups"
    t.string   "money_invested_in_university_startups_change"
    t.string   "new_phd_grads"
    t.string   "new_phd_grads_change"
    t.string   "num_university_spin_offs"
    t.string   "num_university_spin_offs_change"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
