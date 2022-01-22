class UsersController < ApplicationController
  def index
    users = User.all.order(:last_name)
    render json: users
  end

  def create
    user = User.create(user_params)

    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages }, status: 422
    end
  end
  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: 'No one is logged in', status: :unauthorized
    end
  end

  def update
    user = User.find_by(id: params[:id])
    if user.valid?
      user.update(user_params)
      render json: user, message: 'This user has been updated ', status: 200
    else
      render json: { error: user.errors.full_messages }
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
  end
  def journals
    user = User.find_by(id: params[:id]).journals.order(:created_at)
    if user
      render json: user, status: 200
    else
      render json: { error: 'This user does not have any entries' }, status: 404
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end
end
