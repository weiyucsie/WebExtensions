document.addEventListener('keyup', function(evt) {
    var KeyMappings = {
      'MediaPlayPause': 'button.ytp-play-button',
      'MediaTrackPrevious': 'a.ytp-prev-button',
      'MediaTrackNext': 'a.ytp-next-button'
    };
    var target = KeyMappings[evt.key];
    if (target) {
      var mapBtn = document.querySelector(target);
      if (mapBtn) {
        mapBtn.click();
      }
    }
  }, false);