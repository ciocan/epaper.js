const waveshare4In2Driver = require("bindings")("waveshare4in2.node")

const devices = {
  waveshare4in2: {
    height: 300,
    width: 400,
    driver: waveshare4In2Driver,
  },
  waveshare7in5bc: {
    height: 384,
    width: 640,
    driver: waveshare4In2Driver,
  },
  waveshare7in5: {
    height: 384,
    width: 640,
    driver: waveshare4In2Driver,
  },
}

module.exports = devices
