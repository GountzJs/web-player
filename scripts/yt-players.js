const EMBEE_URL = 'https://www.youtube.com/embed/live_stream?channel=UCy7lny2Flbq6FAb7cv8eG0Q&autoplay=1&mute=1&controls=0';
const LOL_URL = 'https://www.youtube.com/embed/live_stream?channel=UCvqRdlKsE5Q8mf8YXbdIJLw&autoplay=1&mute=1&controls=0';

let players = {};

function onYouTubeIframeAPIReady() {
  players['embee'] = new YT.Player('embee-player', {
    height: '200',
    width: '350',
    playerVars: { autoplay: 1, controls: 0, mute: 1 },
    events: {
      onReady: (event) => event.target.getIframe().src = EMBEE_URL
    }
  });

  players['lolesports'] = new YT.Player('lolesports-player', {
    height: '100%',
    width: '100%',
    playerVars: { autoplay: 1, controls: 0, mute: 1 },
    events: {
      onReady: (event) =>  event.target.getIframe().src = LOL_URL
    }
  });
}
