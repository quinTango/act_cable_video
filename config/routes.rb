Rails.application.routes.draw do
  root to: "site#welcome"
  get "/welcome" => "site#welcome"
  post "/login" => "site#login"
  get "/test_drive" => "site#test_drive"
  get "/admin" => "site#admin"

  mount ActionCable.server => "/cable"
end
