class GratitudeSpaceSerializer < ActiveModel::Serializer
  attributes :grateful_space, :i_last_name, :id

  def grateful_space
    if self.object.grateful_entry_private == false
      return self.object.grateful_entry
    end
  end

  def id
    return self.object.id
  end

  def i_last_name
    return(
      self.object.user.first_name.first(1) + '.' + self.object.user.last_name
    )
  end
end
