const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNum = 2 ** disksNumber - 1;
  let secPerHour = 3600;
  let time = Math.floor(turnsNum / turnsSpeed * secPerHour);

  let obj = {
    'turns': turnsNum,
    'seconds': time
  }
  return obj;
};
