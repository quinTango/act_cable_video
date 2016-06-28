# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
  end

  def join(data)
    user = User.find_by_id(data["id"])
    return if !user || user.role == "admin"
    user.ticket = Ticket.create(status: Ticket::CREATED) unless user.ticket
    TestDriveRequestJob.perform_later(user)
  end
end
