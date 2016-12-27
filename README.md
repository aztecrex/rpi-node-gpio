# GPIO Using Node JS

Some experiments with Node JS and GPIO on the Pi 3.

## Test Circuit

LED in series with 220 ohm resistor (https://aztecrex.github.io/rpi-verify-gpio/) .

## Configure Pi With Latest Node JS

```bash
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install nodejs
```

The node installation will not have permission to perform GPIO. You will have to `sudo` to perform GPIO operations from
your programs.

## Run it

```bash
npm install # first time, only
sudo node index.js
```
