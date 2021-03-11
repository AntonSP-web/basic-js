const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error();
  }
  
  let month = date.getMonth();
  let season;
  switch (month) {
    case 11:
    case 0:
    case 1:
      season = 'winter';
      break;

    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;

    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
   
    default:
      season = 'autumn';
  }
  return season;
};
