class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

  def current_user # needs to change once authentication is set up
    @current_user ||= User.find_by_id(session[:user_id]) # memoization
  end

  # def authenticate_user
  #   unless current_user
  #     return render json: { error: 'unauthorized' }, status: :unauthorized
  #   end
  # end
end
