const gpio = require("rpi-gpio");
const pin = 40;

const write = (val, cb) => {
  gpio.write(pin, val, err => {
    if (err) {
      console.log("cannot write ", val, " to ", pin);
      cb(err, res);
    } else cb(null, true);
  });
};

const init = cb => {
  gpio.setup(pin, err => {
    if (err) {
      console.log("cannot setup ", pin);
      cb(err);
    } else cb(null, true);
  });
};

const uninit = cb => {
  gpio.destroy(err => {
    if (err) cb(err);
    else cb(null, true);
  });
};

const delay = (duration, cb) => {
  setTimeout(() => {
    cb(null, true)
  }, duration * 1000);
};

const flashes = (quantity, on_duration, off_duration, cb) => {

    const perform = rem => {
      if (rem > 0) {
        write(true, err => {
          if (err) cb(err);
          else delay(on_duration, () => {
            write(false, err => {
              if (err) cb(err);
              else delay(off_duration, () => {
                perform(rem - 1);
              });
            });
          });
        });
      } else {
        cb(null, true);
      }
    }
    perform(quantity);
};

init(err => {
  err || flashes(10, .1, .1, () => {
    uninit(() => console.log("Done."));
  });
});
