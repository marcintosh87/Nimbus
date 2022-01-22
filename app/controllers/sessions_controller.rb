class SessionsController < ApplicationController
  def login # '/login',
    user = User.find_by_email(params[:email])
    if user.authenticate(params[:password])
      session[:user_id] = user.id # logging our user in IMPORTANT!!!
      render json: user, status: :ok
    else
      render json: { error: 'Auth creds not valid' }, status: :unauthorized
    end
  end

  def logout
    session.delete :user_id
  end
end
