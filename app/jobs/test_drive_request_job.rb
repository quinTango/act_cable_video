class TestDriveRequestJob < ApplicationJob
  queue_as :default

  def perform(user)
    ActionCable.server.broadcast("room_channel", user: render_user(user)) if user.ticket.status == Ticket::CREATED
    user.ticket.update_attributes(status: Ticket::WAITING)
  end

  private

  def render_user(user)
    ApplicationController.renderer.render(partial: "site/active_user", locals: { user: user })
  end
end
