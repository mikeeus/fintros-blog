class Story < ApplicationRecord
  self.inheritance_column = nil
  has_one_attached :image
  # enum type: [ :job, :story, :comment, :poll, :pollopt ]
end
