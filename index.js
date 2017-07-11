const Promise = require("bluebird");
const isoDateRE = require("./regex").isoDateRE;
const clasicRE = require("./regex").clasicTabRE;
const extendRE = require("./regex").extendedTabRE;
const debug = require("debug")("sancronos");

const validateClasic = (crontab) => {
  return new Promise(function(resolve, reject) {
    let clasicExec = clasicRE.exec(crontab);
    if(clasicExec && clasicExec[0]===crontab) resolve(crontab);
    else reject(new Error("Bad clasic tab"));
  });
};

const validateExtends = (crontab) => {
  return new Promise(function(resolve, reject) {
    let extendExec = extendRE.exec(crontab);
    if(extendExec && extendExec[0]===crontab) return resolve(crontab);
    else return reject(new Error("Bad extended tab"));
  });
};

const isValidPatter = (crontab) => {
  let tabs = crontab.split(" ");
  let tabsSize = tabs.length;
  if(tabsSize===5) return validateClasic(crontab);
  else if(tabsSize===7) return validateExtends(crontab);
  return Promise.reject(new Error("Invalid format"));
};

const isValidString = (crontab) => {
  if(!isoDateRE.test(crontab)) return isValidPatter(crontab);
  return Promise.resolve(crontab);
};

const isValidDate = (crontab) => {
  if(crontab.toISOString) return isValidString(crontab.toISOString());
  return Promise.reject(new Error("Invalid object"));
};

module.exports = {
  isValid (crontab) {
    if(!crontab) return Promise.reject(new Error("Empty tab"));
    else if(typeof crontab === "string") return isValidString(crontab);
    else if(typeof crontab === "object") return isValidDate(crontab);
    return Promise.reject(new Error("Bad format"));
  }
};
