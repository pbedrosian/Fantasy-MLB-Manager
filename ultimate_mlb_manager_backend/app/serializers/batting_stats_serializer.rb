class BattingStatsSerializer < ActiveModel::Serializer
  attributes :avg, :hits, :runs, :homeruns, :runs_batted_in, :on_base_pct, :slugging_pct
  belongs_to :player
end
