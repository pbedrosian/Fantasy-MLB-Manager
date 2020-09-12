class StatSerializer < ActiveModel::Serializer
  attributes :avg, :hits, :runs, :homeruns, :rbi, :on_base_pct, :slugging_pct, :wins, :losses, :era, :strike_outs, :saves, :whip
  belongs_to :player
end
