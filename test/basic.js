const should = require("should");
const Promise = require("bluebird");
const sancronos = require("../index");

const invalidTest = (badtab) => {
  return sancronos.isValid(badtab)
  .then(function(crontab) {
    throw new Error("Accept invalid crontab");
  })
  .catch(function(err) {
    return (err.message=="Accept invalid crontab")?
      Promise.reject():
      Promise.resolve();
  });
};

describe("Basic tests", function() {
  it("must be something", function() {
    should.exist(sancronos);
    sancronos.should.have.property("isValid");
    return sancronos.isValid.should.be.Function();
  });

  describe("Valid", function() {
    describe("clasic patter: ", function() {
      it("once a minutes", function() {
        return sancronos.isValid("* * * * *");
      });
      it("range of minutes", function() {
        return sancronos.isValid("1-59 * * * *");
      });
      it("list of minutes", function() {
        return sancronos.isValid("1,4,5 * * * *");
      });
      it("steps minutes", function() {
        return sancronos.isValid("*/7 * * * *");
      });
      it("range steps minutes", function() {
        return sancronos.isValid("1-59/3 * * * *");
      });
      it("mixed minutes", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 * * * *");
      });
      it("once a hours", function() {
        return sancronos.isValid("0 * * * *");
      });
      it("range of hours", function() {
        return sancronos.isValid("0 1-19 * * *");
      });
      it("list of hours", function() {
        return sancronos.isValid("0 1,4,5 * * *");
      });
      it("steps hours", function() {
        return sancronos.isValid("0 */7 * * *");
      });
      it("range steps hours", function() {
        return sancronos.isValid("0 1-19/3 * * *");
      });
      it("mixed hours", function() {
        return sancronos.isValid("0 1,2-5,6-23/7 * * *");
      });
      it("mixed hours and minutes", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 * * *");
      });
      it("eleven hours", function() {
        return sancronos.isValid("* 11 * * *");
      });
      it("once a day", function() {
        return sancronos.isValid("0 0 * * *");
      });
      it("range of days", function() {
        return sancronos.isValid("0 0 1-19 * *");
      });
      it("list of days", function() {
        return sancronos.isValid("0 0 1,4,5 * *");
      });
      it("steps days", function() {
        return sancronos.isValid("0 0 */7 * *");
      });
      it("range steps days 1", function() {
        return sancronos.isValid("0 0 1-19/3 * *");
      });
      it("range steps days 2", function() {
        return sancronos.isValid("0 0 */3 * *");
      });
      it("mixed days", function() {
        return sancronos.isValid("0 0 1,2-5,6-23/7 * *");
      });
      it("last day of month", function() {
        return sancronos.isValid("* * L * *");
      });
      it("last weekday of month", function() {
        return sancronos.isValid("* * LW * *");
      });
      it("5th week day of month", function() {
        return sancronos.isValid("* * 15W * *");
      });
      it("mixed days, hours and minutes", function() {
        return sancronos.isValid("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * *");
      });
      it("day fifteen", function() {
        return sancronos.isValid("* * 15 * *");
      });
      it("once a month", function() {
        return sancronos.isValid("0 0 0 * *");
      });
      it("range of days", function() {
        return sancronos.isValid("0 0 0 1-12 *");
      });
      it("list of months", function() {
        return sancronos.isValid("0 0 0 1,4,5 *");
      });
      it("steps months", function() {
        return sancronos.isValid("0 0 0 */7 *");
      });
      it("range steps months 1", function() {
        return sancronos.isValid("0 0 0 1-12/3 *");
      });
      it("range steps months 2", function() {
        return sancronos.isValid("0 0 0 */3 *");
      });
      it("mixed months", function() {
        return sancronos.isValid("0 0 0 1,2-5,6-12/7 *");
      });
      it("mixed months, days, hours and minutes", function() {
        return sancronos.isValid(
          "1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-12/7 *");
      });
      it("may", function() {
        return sancronos.isValid("* * * 5 *");
      });
      it("range of weekdays", function() {
        return sancronos.isValid("0 0 * * 1-5");
      });
      it("list of weekdays", function() {
        return sancronos.isValid("0 0 * * 1,3,5");
      });
      it("steps weekdays", function() {
        return sancronos.isValid("0 0 * * */2");
      });
      it("range steps weekdays 1", function() {
        return sancronos.isValid("0 0 * * 1-6/2");
      });
      it("range steps weekdays 2", function() {
        return sancronos.isValid("0 0 * * */3");
      });
      it("mixed weekdays", function() {
        return sancronos.isValid("0 0 * * 1,2-4/2,5,6");
      });
      it("last day of week", function() {
        return sancronos.isValid("* * * * L");
      });
      it("last 5th day of the month", function() {
        return sancronos.isValid("* * * * 5L");
      });
      it("mixed weekdays, monthdays, hours and minutes", function() {
        return sancronos.isValid("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6");
      });
      it("the third Friday of the month", function() {
        return sancronos.isValid("* * * * 5#3");
      });
      it("sunday", function() {
        return sancronos.isValid("* * * * 0");
      });
    });

    describe("extended patter:", function() {
      it("once a seconds", function() {
        return sancronos.isValid("* * * * * * *");
      });
      it("range of seconds", function() {
        return sancronos.isValid("1-59 * * * * * *");
      });
      it("list of seconds", function() {
        return sancronos.isValid("1,4,5 * * * * * *");
      });
      it("steps seconds", function() {
        return sancronos.isValid("*/7 * * * * * *");
      });
      it("range steps seconds 1", function() {
        return sancronos.isValid("*/3 * * * * * *");
      });
      it("range steps seconds 2", function() {
        return sancronos.isValid("1-59/3 * * * * * *");
      });
      it("mixed seconds", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 * * * * * *");
      });
      it("once a minutes", function() {
        return sancronos.isValid("0 * * * * * *");
      });
      it("range of minutes", function() {
        return sancronos.isValid("0 1-59 * * * * *");
      });
      it("list of minutes", function() {
        return sancronos.isValid("0 1,4,5 * * * * *");
      });
      it("steps minutes", function() {
        return sancronos.isValid("0 */7 * * * * *");
      });
      it("range steps minutes 1", function() {
        return sancronos.isValid("0 */3 * * * * *");
      });
      it("range steps minutes 2", function() {
        return sancronos.isValid("0 1-59/3 * * * * *");
      });
      it("mixed minutes", function() {
        return sancronos.isValid("0 1,2-5,6-23/7,4 * * * * *");
      });
      it("mixed minutes and seconds", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7,4 * * * * *");
      });
      it("once a hours", function() {
        return sancronos.isValid("0 0 * * * * *");
      });
      it("range of hours", function() {
        return sancronos.isValid("0 0 1-19 * * * *");
      });
      it("list of hours", function() {
        return sancronos.isValid("0 0 1,4,5 * * * *");
      });
      it("steps hours", function() {
        return sancronos.isValid("0 0 */7 * * * *");
      });
      it("range steps hours 1", function() {
        return sancronos.isValid("0 0 1-19/3 * * * *");
      });
      it("range steps hours 2", function() {
        return sancronos.isValid("0 0 */3 * * * *");
      });
      it("mixed hours", function() {
        return sancronos.isValid("0 0 1,2-5,6-23/7 * * * *");
      });
      it("mixed hours, minutes and seconds", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7,4 1,2-5,6-23/7 * * * *");
      });
      it("eleven hours", function() {
        return sancronos.isValid("0 * 11 * * * *");
      });
      it("once a day", function() {
        return sancronos.isValid("0 0 0 * * * *");
      });
      it("range of days", function() {
        return sancronos.isValid("0 0 0 1-19 * * *");
      });
      it("list of days", function() {
        return sancronos.isValid("0 0 0 1,4,5 * * *");
      });
      it("steps days", function() {
        return sancronos.isValid("0 0 0 */7 * * *");
      });
      it("range steps days 1", function() {
        return sancronos.isValid("0 0 0 1-19/3 * * *");
      });
      it("range steps days 2", function() {
        return sancronos.isValid("0 0 */3 * *");
      });
      it("mixed days", function() {
        return sancronos.isValid("0 0 0 1,2-5,6-23/7 * * *");
      });
      it("last day of month", function() {
        return sancronos.isValid("0 * * L * * *");
      });
      it("last weekday of month", function() {
        return sancronos.isValid("0 * * LW * * *");
      });
      it("5th week day of month", function() {
        return sancronos.isValid("0 * * 15W * * *");
      });
      it("mixed days, hours, minutes and seconds", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * * *");
      });
      it("day fifteen", function() {
        return sancronos.isValid("0 * * 15 * * *");
      });
      it("once a month", function() {
        return sancronos.isValid("0 0 0 0 * * *");
      });
      it("range of days", function() {
        return sancronos.isValid("0 0 0 0 1-12 * *");
      });
      it("list of months", function() {
        return sancronos.isValid("0 0 0 0 1,4,5 * *");
      });
      it("steps months", function() {
        return sancronos.isValid("0 0 0 0 */7 * *");
      });
      it("range steps months 1", function() {
        return sancronos.isValid("0 0 0 0 1-12/3 * *");
      });
      it("range steps months 2", function() {
        return sancronos.isValid("0 0 0 0 */3 * *");
      });
      it("mixed months", function() {
        return sancronos.isValid("0 0 0 0 1,2-5,6-12/7 * *");
      });
      it("mixed months, days, hours, minutes and seconds", function() {
        return sancronos.isValid(
          "1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-12/7 * *");
      });
      it("may", function() {
        return sancronos.isValid("0 * * * 5 * *");
      });
      it("range of weekdays", function() {
        return sancronos.isValid("0 0 0 * * 1-5 *");
      });
      it("list of weekdays", function() {
        return sancronos.isValid("0 0 0 * * 1,3,5 *");
      });
      it("steps weekdays", function() {
        return sancronos.isValid("0 0 0 * * */2 *");
      });
      it("range steps weekdays 1", function() {
        return sancronos.isValid("0 0 0 * * 1-6/2 *");
      });
      it("range steps weekdays 2", function() {
        return sancronos.isValid("0 0 0 * * */3 *");
      });
      it("mixed weekdays", function() {
        return sancronos.isValid("0 0 0 * * 1,2-4/2,5,6 *");
      });
      it("last day of week", function() {
        return sancronos.isValid("0 * * * * L *");
      });
      it("last 5th day of the month", function() {
        return sancronos.isValid("0 * * * * 5L *");
      });
      it("mixed weekdays, monthdays, hours, minutes and seconds", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6 *");
      });
      it("the third Friday of the month", function() {
        return sancronos.isValid("0 * * * * 5#3 *");
      });
      it("sunday", function() {
        return sancronos.isValid("0 * * * * 0 *");
      });
      it("once a year", function() {
        return sancronos.isValid("0 0 0 1 1 * *");
      });
      it("range of years", function() {
        return sancronos.isValid("* * * * * * 1989-2099");
      });
      it("list of years", function() {
        return sancronos.isValid("* * * * * * *");
      });
      it("steps years", function() {
        return sancronos.isValid("* * * * * * */7");
      });
      it("range steps years 2", function() {
        return sancronos.isValid("* * * * * * 2018-3000/7");
      });
      it("mixed years", function() {
        return sancronos.isValid("* * * * * * 2021,2045-2500,2666-2773/7,3004");
      });
      it("mixed years, weekdays, monthdays, hours, minutes and seconds", function() {
        return sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6 2021,2045-2500,2666-2773/7,3004");
      });
    });

    it("date object", function() {
      return sancronos.isValid(new Date());
    });

    describe("date string", function() {
      it("iso format", function() {
        return sancronos.isValid("2017-07-06T07:24:59.205");
      });
      it("iso format without miliseconds", function() {
        return sancronos.isValid("2017-07-06T07:24:59");
      });
      it("iso format without seconds", function() {
        return sancronos.isValid("2017-07-06T07:24");
      });
      it("iso format whitout minutes and hours", function() {
        return sancronos.isValid("2017-07-06");
      });
    });
  });

  describe("Invalid:", function() {
    it("null pattern", function() {
      return invalidTest(null);
    });

    describe("not even close:", function() {
      it("empty string", function() {
        return invalidTest("");
      });
      it("mere words", function() {
        return invalidTest("mere words");
      });
      it("short tab: * * * *", function() {
        return invalidTest("* * * *");
      });
      it("large tab: * * * * * * * *", function() {
        return invalidTest("* * * * * * * *");
      });
      it("middle tab: * * * * * *", function() {
        return invalidTest("* * * * * *");
      });
    });

    describe("bad clasic pattern;", function() {
      it("more than sixty seconds", function() {
        return invalidTest("340 * * * *");
      });
      it("more than sixty seconds at range of minutes", function() {
        return invalidTest("1-109 * * * *");
      });
      it("more than sixty seconds at list of minutes", function() {
        return invalidTest("1,400,5 * * * *");
      });
      it("more than sixty seconds at steps minutes", function() {
        return invalidTest("*/70 * * * *");
      });
      it("range steps minutes", function() {
        return invalidTest("1-59/300 * * * *");
      });
      it("mixed minutes", function() {
        return invalidTest("156,200-5,6-2300/7,4 * * * *");
      });
      it("once a x hours", function() {
        return invalidTest("0 x * * *");
      });
      it("more than 24 hours", function() {
        return invalidTest("0 344 * * *");
      });
      it("more than 24 at range of hours", function() {
        return invalidTest("0 1-190 * * *");
      });
      it("more than 24 at list of hours", function() {
        return invalidTest("0 1,234,5 * * *");
      });
      it("more than 24 at steps hours", function() {
        return invalidTest("0 */61 * * *");
      });
      it("more than 24 at range steps hours", function() {
        return invalidTest("0 1-190/3 * * *");
      });
      it("more than 24 at mixed hours", function() {
        return invalidTest("0 1,200-500,6-23/7 * * *");
      });
      it("more than 24 at mixed hours and minutes", function() {
        return invalidTest("1,2-5,6-23/7,4 1,2-5,6-230/7 * * *");
      });
      it("twenty five hours", function() {
        return invalidTest("* 25 * * *");
      });
      it("once a x day", function() {
        return invalidTest("0 0 x * *");
      });
      it("more than 31 days", function() {
        return invalidTest("0 0 50 * *");
      });
      it("more than 31 at range of days", function() {
        return invalidTest("0 0 1-190 * *");
      });
      it("more than 31 at list of days", function() {
        return invalidTest("0 0 1,40,50 * *");
      });
      it("more than 31 at steps days", function() {
        return invalidTest("0 0 */70 * *");
      });
      it("more than 31 at range steps days 1", function() {
        return invalidTest("0 0 1-19/333 * *");
      });
      it("more than 31 at range steps days 2", function() {
        return invalidTest("0 0 1-344/3 * *");
      });
      it("more than 31 at mixed days", function() {
        return invalidTest("0 0 1,2-50,60-230/7 * *");
      });
      it("more than 31 at last day of month", function() {
        return invalidTest("* * 3L * *");
      });
      it("more than 31 at last weekday of month", function() {
        return invalidTest("* * 2LW * *");
      });
      it("more than 31 at week day of month", function() {
        return invalidTest("* * 34W * *");
      });
      it("more than 31 at mixed days, hours and minutes", function() {
        return invalidTest("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-230/7 * *");
      });
      it("once a x month", function() {
        return invalidTest("0 0 0 x *");
      });
      it("once a thirteen month", function() {
        return invalidTest("0 0 0 13 *");
      });
      it("more than 12 at range of days", function() {
        return invalidTest("0 0 0 1-120 *");
      });
      it("list of months", function() {
        return invalidTest("0 0 0 1,40,5 *");
      });
      it("steps months", function() {
        return invalidTest("0 0 0 */70 *");
      });
      it("range steps months 1", function() {
        return invalidTest("0 0 0 1-13/3 *");
      });
      it("range steps months 2", function() {
        return invalidTest("0 0 0 */300 *");
      });
      it("mixed months", function() {
        return invalidTest("0 0 0 1,x-5,6-12/7 *");
      });
      it("mixed months, days, hours and minutes", function() {
        return invalidTest(
          "1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-12/7 x");
      });
      it("mixed months, days, hours and minutes 2", function() {
        return invalidTest(
          "1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-1x/7 x");
      });
      it("may", function() {
        return invalidTest("* * * Mayo *");
      });
      it("range of weekdays", function() {
        return invalidTest("0 0 * * x-5");
      });
      it("list of weekdays", function() {
        return invalidTest("0 0 * * 1,3x,5");
      });
      it("steps weekdays", function() {
        return invalidTest("0 0 * * 1234/2");
      });
      it("range steps weekdays 1", function() {
        return invalidTest("0 0 * * 1-6/x");
      });
      it("range steps weekdays 2", function() {
        return invalidTest("0 0 * * x/3");
      });
      it("mixed weekdays", function() {
        return invalidTest("0 0 * * 1,2-94/2,5,6");
      });
      it("last day of week", function() {
        return invalidTest("* * * * L34");
      });
      it("last 5th day of the month", function() {
        return invalidTest("* * * * 50L");
      });
      it("mixed weekdays, monthdays, hours and minutes", function() {
        return invalidTest("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 x 1,2-4/2,5,6");
      });
      it("mixed weekdays, monthdays, hours and minutes 2", function() {
        return invalidTest("1,200-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6");
      });
      it("mixed weekdays, monthdays, hours and minutes 3", function() {
        return invalidTest("1,2-5,6-23/7 1,2-500,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6");
      });
      it("mixed weekdays, monthdays, hours and minutes 4", function() {
        return invalidTest("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-985,6-23/7 */5687 1,2-4/2,5789,6");
      });
      it("the third Friday of the month", function() {
        return invalidTest("* * * * 5#30");
      });
      it("the third Friday of the month 2", function() {
        return invalidTest("* * * * 50#30");
      });
      it("nineth day", function() {
        return invalidTest("* * * * 9");
      });
    });

    describe("bad extended pattern", function() {

    });
  });
});
