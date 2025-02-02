const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let newArr = members.filter(member => typeof member === 'string').map(member => member.trim()).map(member => member[0].toUpperCase()).sort().join('');
  return newArr;
};
