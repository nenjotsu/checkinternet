const isOnline = require('is-online');
const every30mins = 1800000;
const isWin = process.platform === 'win32';
const every3s = 3000;

setInterval(function() {
  isOnline().then(online => {
    console.log(online);
    if (!online) {
      if (isWin) {
        const wintools = require('wintools');
        const gpuInfo = require('gpu-info');

        gpuInfo().then(function(data) {
          console.log('GPUS:', data);
        });
        wintools.shutdown.restart();
      }
    }
  });
}, every3s);
