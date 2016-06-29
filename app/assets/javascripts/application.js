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
var webrtc;
$(document).ready(function(){
  $(document).on('click', '#requestButton', function(event) {
    App.room.join($("#current_user").val());
    webrtc = new SimpleWebRTC({
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true
    });
    webrtc.on('readyToCall', function () {
      console.log('acidroom' + $("#current_user").val());
      webrtc.joinRoom('acidroom' + $("#current_user").val());
    });
  });

  $(document).on('click', '#startButton', function(event) {
    var $that = $(this);
    webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      autoRequestMedia: true
    });
    webrtc.on('readyToCall', function () {
      console.log('acidroom' + $that.data("user-id"));
      webrtc.joinRoom('acidroom' + $that.data("user-id"));
    });
  })

  $(document).on('click', '#stopButton', function(event) {
    webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      autoRequestMedia: true
    });
  })

  $(".pokemon-img").on('click', function(){
    console.log($(this).attr("src"));
    App.room.sendImg($(this).attr("src"));
  });

});
