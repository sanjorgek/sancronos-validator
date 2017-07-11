const sixtyEx = require("./regexs/sixty");
const hoursEx = require("./regexs/hour");
const dayMonthEx = require("./regexs/dayM");
const monthEx = require("./regexs/month");
const dayWeekEx = require("./regexs/dayW");
const yearEx = require("./regexs/year");

const isoDateRE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+[Z]?)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\d)/;

module.exports = {
  clasicTabRE: new RegExp("^"+sixtyEx+" "+hoursEx+" "+dayMonthEx+" "+monthEx+" "+dayWeekEx),
  extendedTabRE: new RegExp("^"+sixtyEx+" "+sixtyEx+" "+hoursEx+" "+dayMonthEx+" "+monthEx+" "+dayWeekEx+" "+yearEx),
  isoDateRE
};
