class JournalSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :mood,
             :journal_entry,
             :relax_entry,
             :grateful_entry,
             :grateful_entry_private,
             :created_date

  belongs_to :user

  def created_date
    return self.object.created_at.strftime('%m-%d-%Y')
  end
end
