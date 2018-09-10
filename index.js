const isOnline = require('is-online');
const wintools = require('wintools');

const every30mins = 1800000;
// const every3s = 3000;

setInterval(function() {
  isOnline().then(online => {
    console.log(online);
    if (!onLine) {
      wintools.shutdown.restart();
    }
  });
}, every30mins);
