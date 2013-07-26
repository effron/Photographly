class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_name(params[:user][:name]).
                          try(:authenticate, params[:user][:password])
    if @user
      login(@user)
      redirect_to @user
    else
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
