let people_names = require("../country/state/city/index");
let first_names = require("../utilities/utils/index");

function getPeopleInCity(people_names) {
  return first_names(people_names);
}

module.exports = getPeopleInCity;
