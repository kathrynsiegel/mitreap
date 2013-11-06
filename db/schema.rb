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

ActiveRecord::Schema.define(version: 20131029065248) do

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
