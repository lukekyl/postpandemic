class PostSerializer < ActiveModel::Serializer

  attributes :id, :title, :image, :message, :date, :vote
  
  attribute :date do 
    object.date.strftime("%B %d, %Y")
  end
end