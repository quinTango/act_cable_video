// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Use a variable in the same scope of both events:
$(document).ready(function(){
  $(document).on('click', '#requestButton', function(event) {
    console.log(" - request");
    App.room.join($("#current_user").val());

    var webrtc;
    webrtc = webrtc || new SimpleWebRTC({
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true
    });
    webrtc.on('readyToCall', function () {
      webrtc.joinRoom('acidroom');
    });
  });

  $(document).on('click', '#startButton', function(event) {
    console.log(" - start");
    //App.room.start($(this).data("user-id"));

    var webrtc;
    webrtc = webrtc || new SimpleWebRTC({
      localVideoEl: 'localVideo',
      autoRequestMedia: true
    });
    webrtc.on('readyToCall', function () {
      webrtc.joinRoom('acidroom');
    });
  })
});
