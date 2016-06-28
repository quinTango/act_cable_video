class Ticket < ApplicationRecord
  CREATED = "created"
  WAITING = "waiting"
  ONLINE = "online"
  USED = "used"
  STATUS = [CREATED, WAITING, ONLINE, USED]
end
