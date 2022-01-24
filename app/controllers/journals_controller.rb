class JournalsController < ApplicationController
  def index
    journals = Journal.all.order(created_at: :desc)
    render json: journals
  end

  def create
    journal = Journal.create(journal_params)
    if journal.valid?
      render json: journal, status: :created
    else
      render json: { error: journal.errors.full_messages }
    end
  end
  def show
    journal = Journal.find_by(id: params[:id])
    render json: journal
  end

  def update
    journal = Journal.find_by(id: params[:id])
    journal.update(journal_params)
    render json: journal, message: 'This journal has been updated '
  end

  def destroy
    journal = Journal.find_by(id: params[:id])
    journal.destroy
  end

  def gratitude_space
    journals = Journal.all.order(created_at: :desc)
    render json: journals, each_serializer: GratitudeSpaceSerializer
  end

  private

  def journal_params
    params.permit(
      :title,
      :mood,
      :journal_entry,
      :relax_entry,
      :grateful_entry,
      :grateful_entry_private,
      :user_id,
    )
  end
end
