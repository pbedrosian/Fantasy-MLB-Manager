class BattingStatsSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :player
end
