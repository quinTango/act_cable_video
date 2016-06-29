App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
  },
  disconnected: function() {
  },
  received: function(data) {
    if(data["img"]) {
      $('#theImg').attr("src", data["img"]);
    }
    else {
      $('ul').append(data['user'])
      console.log("received");
    }
  },
  accept: function() {
    console.log("aquí vienen");
  },
  join: function(data) {
    return this.perform('join', {
      id: data
    });
  },
  sendImg: function(data) {
    return this.perform('sendImg', {
      img: data
    });
  },
});
