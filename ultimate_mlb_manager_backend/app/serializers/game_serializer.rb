class GameSerializer < ActiveModel::Serializer
  attributes :id, :team_against, :home_game, :date
  has_many :lineup
end
