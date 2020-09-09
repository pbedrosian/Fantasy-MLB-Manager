# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_09_161006) do

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "primary_position"
    t.integer "number"
    t.string "current_team"
    t.string "handness_bats"
    t.string "handness_throws"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stats", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "batting_avg"
    t.integer "runs"
    t.integer "hits"
    t.integer "homeruns"
    t.integer "runs_batted_in"
    t.integer "on_base_pct"
    t.integer "slugging_pct"
    t.integer "wins"
    t.integer "losses"
    t.integer "earn_run_average"
    t.integer "strike_outs"
    t.integer "saves"
    t.integer "whip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_stats_on_player_id"
  end

  add_foreign_key "stats", "players"
end
