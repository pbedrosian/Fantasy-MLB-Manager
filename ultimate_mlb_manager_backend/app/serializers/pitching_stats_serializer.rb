class PitchingStatsSerializer < ActiveModel::Serializer
  attributes :only [:era, :wins, :losses, :strike_outs, saves, :whip]
  belongs_to :player
end
