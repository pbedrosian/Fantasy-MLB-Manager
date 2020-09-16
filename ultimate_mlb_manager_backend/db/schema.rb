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

ActiveRecord::Schema.define(version: 2020_09_12_015803) do

  create_table "games", force: :cascade do |t|
    t.string "team_against"
    t.boolean "home_game"
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lineups", force: :cascade do |t|
    t.integer "game_id"
    t.integer "first_player_id"
    t.integer "second_player_id"
    t.integer "third_player_id"
    t.integer "fourth_player_id"
    t.integer "fifth_player_id"
    t.integer "sixth_player_id"
    t.integer "seventh_player_id"
    t.integer "eighth_player_id"
    t.integer "ninth_player_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "primary_position"
    t.integer "number"
    t.string "current_team"
    t.string "bats"
    t.string "throws"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stats", force: :cascade do |t|
    t.integer "player_id", null: false
    t.float "avg", default: 0.0
    t.integer "runs", default: 0
    t.integer "hits", default: 0
    t.integer "homeruns", default: 0
    t.integer "rbi", default: 0
    t.float "on_base_pct", default: 0.0
    t.float "slugging_pct", default: 0.0
    t.integer "wins", default: 0
    t.integer "losses", default: 0
    t.float "era", default: 0.0
    t.integer "strike_outs", default: 0
    t.integer "saves", default: 0
    t.float "whip", default: 0.0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_stats_on_player_id"
  end

  add_foreign_key "stats", "players"
end
