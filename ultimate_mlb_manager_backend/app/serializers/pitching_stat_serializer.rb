class PitchingStatSerializer < ActiveModel::Serializer
  attributes :era, :wins, :losses, :strike_outs, :saves, :whip
  belongs_to :player
end
