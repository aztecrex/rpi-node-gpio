# GPIO Using Node JS

Some experiments with Node JS and GPIO on the Pi 3.

## Test Circuit

LED in series with 220 ohm resistor (https://aztecrex.github.io/rpi-verify-gpio/) .

## Configure Pi With Latest Node JS

```bash
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install nodejs
```

## Run it

The program does not have permission to perform GPIO as a non-root user due to a
race condition in
[rpi-gpio](https://github.com/aztecrex/rpi-gpio.js). This is
[addressed in a PR](https://github.com/JamesBarwell/rpi-gpio.js/pull/49).

Meanwhile, you will have to `sudo` to perform GPIO operations from your programs.



```bash
npm install # first time, only
sudo node index.js
```
