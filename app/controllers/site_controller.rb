class SiteController < ApplicationController
  def welcome
    redirect_to(test_drive_path) if session[:user_id]
  end

  def login
    user = params[:name] == "quino" ? User.first : User.create(name: params[:name], role: "viewer")
    session[:user_id] = user.id
    redirect_to(test_drive_path)
  end

  def test_drive
    @user = User.find(session[:user_id])
  end

  def admin
    @active_users = User.joins(:ticket).where(tickets: { status: Ticket::WAITING })
  end
end
