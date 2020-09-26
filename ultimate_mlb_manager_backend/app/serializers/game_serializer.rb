class GameSerializer < ActiveModel::Serializer
  attributes :id, :team_against, :home_game, :date
  has_one :lineup
end
