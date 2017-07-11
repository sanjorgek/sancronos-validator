const Bluebird = require("bluebird");
const isoDateRE = require("./regex").isoDateRE;
const clasicRE = require("./regex").clasicTabRE;
const sixtabRE = require("./regex").extendedTab_2_RE;
const extendRE = require("./regex").extendedTabRE;
const debug = require("debug")("sancronos");

const validateClasic = (crontab) => {
  return new Bluebird(function(resolve, reject) {
    let clasicExec = clasicRE.exec(crontab);
    return (clasicExec && clasicExec[0]===crontab)?
      resolve(crontab):
      reject(new Error("Bad clasic tab"));
  });
};

const validateExtends = (crontab) => {
  return new Bluebird(function(resolve, reject) {
    let extendExec = extendRE.exec(crontab);
    return (extendExec && extendExec[0]===crontab)?
      resolve(crontab):
      reject(new Error("Bad extended tab"));
  });
};

const validateSix = (crontab) => {
  return new Bluebird(function(resolve, reject) {
    let extendExec = sixtabRE.exec(crontab);
    return (extendExec && extendExec[0]===crontab)?
      resolve(crontab):
      reject(new Error("Bad six-extended tab"));
  });
};

const isValidPatter = (crontab) => {
  let tabs = crontab.split(" ");
  let tabsSize = tabs.length;
  if(tabsSize===5){
    return validateClasic(crontab);
  } else if(tabsSize===6){
    return validateSix(crontab);
  } else if(tabsSize===7){
    return validateExtends(crontab);
  }
  return Bluebird.reject(new Error("Invalid format"));
};

const isValidString = (crontab) => {
  return (!isoDateRE.test(crontab))?
    isValidPatter(crontab):
    Bluebird.resolve(crontab);
};

const isValidDate = (crontab) => {
  return (crontab.toISOString)?
    isValidString(crontab.toISOString()):
    Bluebird.reject(new Error("Invalid object"));
};

module.exports = {
  isValid (crontab) {
    if(!crontab){
      return Bluebird.reject(new Error("Empty tab"));
    }
    else if(typeof crontab === "string"){
      return isValidString(crontab);
    }
    else if(typeof crontab === "object"){
      return isValidDate(crontab);
    }
    return Bluebird.reject(new Error("Bad format"));
  }
};
