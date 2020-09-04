class Rating < ApplicationRecord
  validates :rating, presence: true
  
  belongs_to :submission
  belongs_to :user
end