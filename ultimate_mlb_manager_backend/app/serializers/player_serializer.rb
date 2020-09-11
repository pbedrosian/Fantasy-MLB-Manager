class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :primary_position, :number, :bats, :throws, :image_url
  has_many :batting_stats
  has_many :pitching_stats
  has_many :linups
end
