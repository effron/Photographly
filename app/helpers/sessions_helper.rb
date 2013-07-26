module SessionsHelper
  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    token = SecureRandom.urlsafe_base64
    user.update_attributes(session_token: token)
    session[:session_token] = token
  end

  def logout
    current_user.update_attributes(session_token: nil)
    session[:session_token] = nil
  end


end
