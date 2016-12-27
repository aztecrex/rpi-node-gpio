gpio = require("rpi-gpio");

pin = 40;
gpio.setup(pin, (err,res) => {
  if (err) {
    console.log("cannot setup gpio: ", err);
    gpio.destroy();
  } else {
    gpio.write(pin, true, (err, res) => {
      if (err) {
        console.log("cannot write true to gpio: ", err);
        gpio.destroy();
      } else {
        setTimeout(() => {
          gpio.write(pin, false, (err, res) => {
            if (err) {
              console.log("cannot write false to gpio:", err);
            }
            gpio.destroy();
          });
        }
        ,500);
      }
    });
  }
});
