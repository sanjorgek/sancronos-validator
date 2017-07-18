const Bluebird = require("bluebird");
const isoDateRE = require("./regex").isoDateRE;
const clasicRE = require("./regex").clasicTabRE;
const sixtabRE = require("./regex").extendedTab_2_RE;
const extendRE = require("./regex").extendedTabRE;
const debug = require("debug")("sancronos");

function exec(validation, maybeCallback, init){
  let callback,
    sync;
  if(maybeCallback && typeof(maybeCallback) === "function"){
    callback = maybeCallback;
    sync = false;
  }
  else {
    callback = null;
    sync = !!maybeCallback;
  }
  if(!init){
    callback = null;
  }
  if(sync){
    let reject = (err) => {throw err;},
      resolve = (value) => {return value;};
      return validation(resolve, reject);
  }else{
    return (new Bluebird(validation)).asCallback(callback);
  }
}

const validateClasic = (crontab, callback) => {
  return exec(function(resolve, reject) {
    let clasicExec = clasicRE.exec(crontab);
    return (clasicExec && clasicExec[0]===crontab)?
      resolve(crontab):
      reject(new Error("Bad clasic tab"));
  }, callback);
};

const validateExtends = (crontab, callback) => {
  return exec(function(resolve, reject) {
    let extendExec = extendRE.exec(crontab);
    return (extendExec && extendExec[0]===crontab)?
      resolve(crontab):
      reject(new Error("Bad extended tab"));
  }, callback);
};

const validateSix = (crontab, callback) => {
  return exec(function(resolve, reject) {
    let extendExec = sixtabRE.exec(crontab);
    return (extendExec && extendExec[0]===crontab)?
      resolve(crontab):
      reject(new Error("Bad six-extended tab"));
  }, callback);
};

const isValidPatter = (crontab, callback) => {
  let tabs = crontab.split(" ");
  let tabsSize = tabs.length;
  if(tabsSize===5){
    return validateClasic(crontab, callback);
  } else if(tabsSize===6){
    return validateSix(crontab, callback);
  } else if(tabsSize===7){
    return validateExtends(crontab, callback);
  }
  throw new Error("Invalid format");
};

const isValidString = (crontab, callback) => {
  return exec((resolve, reject) => {
    return (!isoDateRE.test(crontab))?
      resolve(isValidPatter(crontab, callback)):
      resolve(crontab);
  }, callback, true);
};

const isValidDate = (crontab, callback) => {
  return exec((resolve, reject) => {
    return (crontab.toISOString)?
      resolve(isValidString(crontab.toISOString(), callback)):
      reject(new Error("Invalid object"));
  }, callback);
};

module.exports = {
  isValid (crontab, callback) {
    if(!crontab){
      return exec((resolve, reject) => {
        reject(new Error("Empty tab"));
      }, callback, true);
    }
    else if(typeof crontab === "string"){
      return isValidString(crontab, callback);
    }
    else if(typeof crontab === "object"){
      return isValidDate(crontab, callback);
    }
    else{
      return exec((resolve, reject) => {
        reject(new Error("Bad format"));
      }, callback, true);
    }
  }
};
