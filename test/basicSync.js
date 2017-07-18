const should = require("should");
const Promise = require("bluebird");
const sancronos = require("../index");

const invalidTest = (badtab, callback) => {
  try{
    let isValid = sancronos.isValid(badtab, true);
    return callback(new Error("False assertion encountered"));
  }catch(err){
    return callback();
  }
};

describe("Basic sync tests", function(done) {
  describe("Valid", function() {
    describe("clasic patter: ", function(done) {
      it("once a minutes", function(done) {
        sancronos.isValid("* * * * *", true);
        done();
      });
      it("range of minutes", function(done) {
        sancronos.isValid("1-59 * * * *", true);
        done();
      });
      it("list of minutes", function(done) {
        sancronos.isValid("1,4,5 * * * *", true);
        done();
      });
      it("steps minutes", function(done) {
        sancronos.isValid("*/7 * * * *", true);
        done();
      });
      it("range steps minutes", function(done) {
        sancronos.isValid("1-59/3 * * * *", true);
        done();
      });
      it("mixed minutes", function(done) {
        sancronos.isValid("1,2-5,6-23/7,4 * * * *", true);
        done();
      });
      it("once a hours", function(done) {
        sancronos.isValid("0 * * * *", true);
        done();
      });
      it("range of hours", function(done) {
        sancronos.isValid("0 1-19 * * *", true);
        done();
      });
      it("list of hours", function(done) {
        sancronos.isValid("0 1,4,5 * * *", true);
        done();
      });
      it("steps hours", function(done) {
        sancronos.isValid("0 */7 * * *", true);
        done();
      });
      it("range steps hours", function(done) {
        sancronos.isValid("0 1-19/3 * * *", true);
        done();
      });
      it("mixed hours", function(done) {
        sancronos.isValid("0 1,2-5,6-23/7 * * *", true);
        done();
      });
      it("mixed hours and minutes", function(done) {
        sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 * * *", true);
        done();
      });
      it("eleven hours", function(done) {
        sancronos.isValid("* 11 * * *", true);
        done();
      });
      it("once a day", function(done) {
        sancronos.isValid("0 0 * * *", true);
        done();
      });
      it("range of days", function(done) {
        sancronos.isValid("0 0 1-19 * *", true);
        done();
      });
      it("list of days", function(done) {
        sancronos.isValid("0 0 1,4,5 * *", true);
        done();
      });
      it("steps days", function(done) {
        sancronos.isValid("0 0 */7 * *", true);
        done();
      });
      it("range steps days 1", function(done) {
        sancronos.isValid("0 0 1-19/3 * *", true);
        done();
      });
      it("range steps days 2", function(done) {
        sancronos.isValid("0 0 */3 * *", true);
        done();
      });
      it("mixed days", function(done) {
        sancronos.isValid("0 0 1,2-5,6-23/7 * *", true);
        done();
      });
      it("last day of month", function(done) {
        sancronos.isValid("* * L * *", true);
        done();
      });
      it("last weekday of month", function(done) {
        sancronos.isValid("* * LW * *", true);
        done();
      });
      it("5th week day of month", function(done) {
        sancronos.isValid("* * 15W * *", true);
        done();
      });
      it("mixed days, hours and minutes", function(done) {
        sancronos.isValid("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * *", true);
        done();
      });
      it("day fifteen", function(done) {
        sancronos.isValid("* * 15 * *", true);
        done();
      });
      it("once a month", function(done) {
        sancronos.isValid("0 0 0 * *", true);
        done();
      });
      it("range of days", function(done) {
        sancronos.isValid("0 0 0 1-12 *", true);
        done();
      });
      it("list of months", function(done) {
        sancronos.isValid("0 0 0 1,4,5 *", true);
        done();
      });
      it("steps months", function(done) {
        sancronos.isValid("0 0 0 */7 *", true);
        done();
      });
      it("range steps months 1", function(done) {
        sancronos.isValid("0 0 0 1-12/3 *", true);
        done();
      });
      it("range steps months 2", function(done) {
        sancronos.isValid("0 0 0 */3 *", true);
        done();
      });
      it("mixed months", function(done) {
        sancronos.isValid("0 0 0 1,2-5,6-12/7 *", true);
        done();
      });
      it("mixed months, days, hours and minutes", function(done) {
        sancronos.isValid(
          "1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-12/7 *", true);
          done();
        });
        it("may", function(done) {
          sancronos.isValid("* * * 5 *", true);
          done();
        });
        it("range of weekdays", function(done) {
          sancronos.isValid("0 0 * * 1-5", true);
          done();
        });
        it("list of weekdays", function(done) {
          sancronos.isValid("0 0 * * 1,3,5", true);
          done();
        });
        it("steps weekdays", function(done) {
          sancronos.isValid("0 0 * * */2", true);
          done();
        });
        it("range steps weekdays 1", function(done) {
          sancronos.isValid("0 0 * * 1-6/2", true);
          done();
        });
        it("range steps weekdays 2", function(done) {
          sancronos.isValid("0 0 * * */3", true);
          done();
        });
        it("mixed weekdays", function(done) {
          sancronos.isValid("0 0 * * 1,2-4/2,5,6", true);
          done();
        });
        it("last day of week", function(done) {
          sancronos.isValid("* * * * L", true);
          done();
        });
        it("last 5th day of the month", function(done) {
          sancronos.isValid("* * * * 5L", true);
          done();
        });
        it("mixed weekdays, monthdays, hours and minutes", function(done) {
          sancronos.isValid("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6", true);
          done();
        });
        it("the third Friday of the month", function(done) {
          sancronos.isValid("* * * * 5#3", true);
          done();
        });
        it("sunday", function(done) {
          sancronos.isValid("* * * * 0", true);
          done();
        });
      });

      describe("six-tab extended patter:", function() {
        it("once a seconds", function(done) {
          sancronos.isValid("* * * * * *", true);
          done();
        });
        it("once a minute", function(done) {
          sancronos.isValid("* * * * * *", true);
          done();
        });
        it("range of seconds", function(done) {
          sancronos.isValid("1-59 * * * * * *", true);
          done();
        });
        it("range of minutes", function(done) {
          sancronos.isValid("1-59 * * * * *", true);
          done();
        });
        it("mixed days, hours, minutes and seconds", function(done) {
          sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * * *", true);
          done();
        });
        it("mixed months, days, hours, minutes and seconds", function(done) {
          sancronos.isValid(
            "1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-12/7 * *", true);
            done();
          });
          it("last day of week", function(done) {
            sancronos.isValid("0 * * * * L *", true);
            done();
          });
          it("last 5th day of the month", function(done) {
            sancronos.isValid("0 * * * * 5L *", true);
            done();
          });
          it("mixed weekdays, monthdays, hours, minutes and seconds", function(done) {
            sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6", true);
            done();
          });
          it("mixed weekdays, monthdays, hours, minutes and years", function(done) {
            sancronos.isValid("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6 *", true);
            done();
          });
          it("the third Friday of the month", function(done) {
            sancronos.isValid("0 * * * * 5#3", true);
            done();
          });
          it("sunday", function(done) {
            sancronos.isValid("0 * * * * 0", true);
            done();
          });
          it("once a year", function(done) {
            sancronos.isValid("0 1 1 * *", true);
            done();
          });
          it("range of years", function(done) {
            sancronos.isValid("* * * * * 1989-2099", true);
            done();
          });
          it("steps years", function(done) {
            sancronos.isValid("* * * * */7", true);
            done();
          });
          it("range steps years 2", function(done) {
            sancronos.isValid("* * * * * 2018-3000/7", true);
            done();
          });
          it("mixed years", function(done) {
            sancronos.isValid("* * * * * 2021,2045-2500,2666-2773/7,3004", true);
            done();
          });
          it("mixed years, weekdays, monthdays, hours, minutes and seconds", function(done) {
            sancronos.isValid("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6 2021,2045-2500,2666-2773/7,3004", true);
            done();
          });
        });

        describe("extended patter:", function() {
          it("once a seconds", function(done) {
            sancronos.isValid("* * * * * * *", true);
            done();
          });
          it("range of seconds", function(done) {
            sancronos.isValid("1-59 * * * * * *", true);
            done();
          });
          it("list of seconds", function(done) {
            sancronos.isValid("1,4,5 * * * * * *", true);
            done();
          });
          it("steps seconds", function(done) {
            sancronos.isValid("*/7 * * * * * *", true);
            done();
          });
          it("range steps seconds 1", function(done) {
            sancronos.isValid("*/3 * * * * * *", true);
            done();
          });
          it("range steps seconds 2", function(done) {
            sancronos.isValid("1-59/3 * * * * * *", true);
            done();
          });
          it("mixed seconds", function(done) {
            sancronos.isValid("1,2-5,6-23/7,4 * * * * * *", true);
            done();
          });
          it("once a minutes", function(done) {
            sancronos.isValid("0 * * * * * *", true);
            done();
          });
          it("range of minutes", function(done) {
            sancronos.isValid("0 1-59 * * * * *", true);
            done();
          });
          it("list of minutes", function(done) {
            sancronos.isValid("0 1,4,5 * * * * *", true);
            done();
          });
          it("steps minutes", function(done) {
            sancronos.isValid("0 */7 * * * * *", true);
            done();
          });
          it("range steps minutes 1", function(done) {
            sancronos.isValid("0 */3 * * * * *", true);
            done();
          });
          it("range steps minutes 2", function(done) {
            sancronos.isValid("0 1-59/3 * * * * *", true);
            done();
          });
          it("mixed minutes", function(done) {
            sancronos.isValid("0 1,2-5,6-23/7,4 * * * * *", true);
            done();
          });
          it("mixed minutes and seconds", function(done) {
            sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7,4 * * * * *", true);
            done();
          });
          it("once a hours", function(done) {
            sancronos.isValid("0 0 * * * * *", true);
            done();
          });
          it("range of hours", function(done) {
            sancronos.isValid("0 0 1-19 * * * *", true);
            done();
          });
          it("list of hours", function(done) {
            sancronos.isValid("0 0 1,4,5 * * * *", true);
            done();
          });
          it("steps hours", function(done) {
            sancronos.isValid("0 0 */7 * * * *", true);
            done();
          });
          it("range steps hours 1", function(done) {
            sancronos.isValid("0 0 1-19/3 * * * *", true);
            done();
          });
          it("range steps hours 2", function(done) {
            sancronos.isValid("0 0 */3 * * * *", true);
            done();
          });
          it("mixed hours", function(done) {
            sancronos.isValid("0 0 1,2-5,6-23/7 * * * *", true);
            done();
          });
          it("mixed hours, minutes and seconds", function(done) {
            sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7,4 1,2-5,6-23/7 * * * *", true);
            done();
          });
          it("eleven hours", function(done) {
            sancronos.isValid("0 * 11 * * * *", true);
            done();
          });
          it("once a day", function(done) {
            sancronos.isValid("0 0 0 * * * *", true);
            done();
          });
          it("range of days", function(done) {
            sancronos.isValid("0 0 0 1-19 * * *", true);
            done();
          });
          it("list of days", function(done) {
            sancronos.isValid("0 0 0 1,4,5 * * *", true);
            done();
          });
          it("steps days", function(done) {
            sancronos.isValid("0 0 0 */7 * * *", true);
            done();
          });
          it("range steps days 1", function(done) {
            sancronos.isValid("0 0 0 1-19/3 * * *", true);
            done();
          });
          it("range steps days 2", function(done) {
            sancronos.isValid("0 0 */3 * *", true);
            done();
          });
          it("mixed days", function(done) {
            sancronos.isValid("0 0 0 1,2-5,6-23/7 * * *", true);
            done();
          });
          it("last day of month", function(done) {
            sancronos.isValid("0 * * L * * *", true);
            done();
          });
          it("last weekday of month", function(done) {
            sancronos.isValid("0 * * LW * * *", true);
            done();
          });
          it("5th week day of month", function(done) {
            sancronos.isValid("0 * * 15W * * *", true);
            done();
          });
          it("mixed days, hours, minutes and seconds", function(done) {
            sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * * *", true);
            done();
          });
          it("day fifteen", function(done) {
            sancronos.isValid("0 * * 15 * * *", true);
            done();
          });
          it("once a month", function(done) {
            sancronos.isValid("0 0 0 0 * * *", true);
            done();
          });
          it("range of days", function(done) {
            sancronos.isValid("0 0 0 0 1-12 * *", true);
            done();
          });
          it("list of months", function(done) {
            sancronos.isValid("0 0 0 0 1,4,5 * *", true);
            done();
          });
          it("steps months", function(done) {
            sancronos.isValid("0 0 0 0 */7 * *", true);
            done();
          });
          it("range steps months 1", function(done) {
            sancronos.isValid("0 0 0 0 1-12/3 * *", true);
            done();
          });
          it("range steps months 2", function(done) {
            sancronos.isValid("0 0 0 0 */3 * *", true);
            done();
          });
          it("mixed months", function(done) {
            sancronos.isValid("0 0 0 0 1,2-5,6-12/7 * *", true);
            done();
          });
          it("mixed months, days, hours, minutes and seconds", function(done) {
            sancronos.isValid(
              "1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-12/7 * *", true);
              done();
            });
            it("may", function(done) {
              sancronos.isValid("0 * * * 5 * *", true);
              done();
            });
            it("range of weekdays", function(done) {
              sancronos.isValid("0 0 0 * * 1-5 *", true);
              done();
            });
            it("list of weekdays", function(done) {
              sancronos.isValid("0 0 0 * * 1,3,5 *", true);
              done();
            });
            it("steps weekdays", function(done) {
              sancronos.isValid("0 0 0 * * */2 *", true);
              done();
            });
            it("range steps weekdays 1", function(done) {
              sancronos.isValid("0 0 0 * * 1-6/2 *", true);
              done();
            });
            it("range steps weekdays 2", function(done) {
              sancronos.isValid("0 0 0 * * */3 *", true);
              done();
            });
            it("mixed weekdays", function(done) {
              sancronos.isValid("0 0 0 * * 1,2-4/2,5,6 *", true);
              done();
            });
            it("last day of week", function(done) {
              sancronos.isValid("0 * * * * L *", true);
              done();
            });
            it("last 5th day of the month", function(done) {
              sancronos.isValid("0 * * * * 5L *", true);
              done();
            });
            it("mixed weekdays, monthdays, hours, minutes and seconds", function(done) {
              sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6 *", true);
              done();
            });
            it("the third Friday of the month", function(done) {
              sancronos.isValid("0 * * * * 5#3 *", true);
              done();
            });
            it("sunday", function(done) {
              sancronos.isValid("0 * * * * 0 *", true);
              done();
            });
            it("once a year", function(done) {
              sancronos.isValid("0 0 0 1 1 * *", true);
              done();
            });
            it("range of years", function(done) {
              sancronos.isValid("* * * * * * 1989-2099", true);
              done();
            });
            it("list of years", function(done) {
              sancronos.isValid("* * * * * * *", true);
              done();
            });
            it("steps years", function(done) {
              sancronos.isValid("* * * * * * */7", true);
              done();
            });
            it("range steps years 2", function(done) {
              sancronos.isValid("* * * * * * 2018-3000/7", true);
              done();
            });
            it("mixed years", function(done) {
              sancronos.isValid("* * * * * * 2021,2045-2500,2666-2773/7,3004", true);
              done();
            });
            it("mixed years, weekdays, monthdays, hours, minutes and seconds", function(done) {
              sancronos.isValid("1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6 2021,2045-2500,2666-2773/7,3004", true);
              done();
            });
          });

          it("date object", function() {
            sancronos.isValid(new Date());
          });

          describe("date string", function(done) {
            it("iso format", function(done) {
              sancronos.isValid("2017-07-06T07:24:59.205", true);
              done();
            });
            it("iso format without miliseconds", function(done) {
              sancronos.isValid("2017-07-06T07:24:59", true);
              done();
            });
            it("iso format without seconds", function(done) {
              sancronos.isValid("2017-07-06T07:24", true);
              done();
            });
            it("iso format whitout minutes and hours", function(done) {
              sancronos.isValid("2017-07-06", true);
              done();
            });
          });
        });

        describe("Invalid:", function() {
          it("null pattern", function(done) {
            invalidTest(null, done);
          });

          describe("not even close:", function() {
            it("empty string", function(done) {
              invalidTest("", done);
            });
            it("mere words", function(done) {
              invalidTest("mere words", done);
            });
            it("short tab: * * * *", function(done) {
              invalidTest("* * * *", done);
            });
            it("large tab: * * * * * * * *", function(done) {
              invalidTest("* * * * * * * *", done);
            });
          });

          describe("bad clasic pattern;", function() {
            it("more than sixty seconds", function(done) {
              invalidTest("340 * * * *", done);
            });
            it("more than sixty seconds at range of minutes", function(done) {
              invalidTest("1-109 * * * *", done);
            });
            it("more than sixty seconds at list of minutes", function(done) {
              invalidTest("1,400,5 * * * *", done);
            });
            it("more than sixty seconds at steps minutes", function(done) {
              invalidTest("*/70 * * * *", done);
            });
            it("range steps minutes", function(done) {
              invalidTest("1-59/300 * * * *", done);
            });
            it("mixed minutes", function(done) {
              invalidTest("156,200-5,6-2300/7,4 * * * *", done);
            });
            it("once a x hours", function(done) {
              invalidTest("0 x * * *", done);
            });
            it("more than 24 hours", function(done) {
              invalidTest("0 344 * * *", done);
            });
            it("more than 24 at range of hours", function(done) {
              invalidTest("0 1-190 * * *", done);
            });
            it("more than 24 at list of hours", function(done) {
              invalidTest("0 1,234,5 * * *", done);
            });
            it("more than 24 at steps hours", function(done) {
              invalidTest("0 */61 * * *", done);
            });
            it("more than 24 at range steps hours", function(done) {
              invalidTest("0 1-190/3 * * *", done);
            });
            it("more than 24 at mixed hours", function(done) {
              invalidTest("0 1,200-500,6-23/7 * * *", done);
            });
            it("more than 24 at mixed hours and minutes", function(done) {
              invalidTest("1,2-5,6-23/7,4 1,2-5,6-230/7 * * *", done);
            });
            it("twenty five hours", function(done) {
              invalidTest("* 25 * * *", done);
            });
            it("once a x day", function(done) {
              invalidTest("0 0 x * *", done);
            });
            it("more than 31 days", function(done) {
              invalidTest("0 0 50 * *", done);
            });
            it("more than 31 at range of days", function(done) {
              invalidTest("0 0 1-190 * *", done);
            });
            it("more than 31 at list of days", function(done) {
              invalidTest("0 0 1,40,50 * *", done);
            });
            it("more than 31 at steps days", function(done) {
              invalidTest("0 0 */70 * *", done);
            });
            it("more than 31 at range steps days 1", function(done) {
              invalidTest("0 0 1-19/333 * *", done);
            });
            it("more than 31 at range steps days 2", function(done) {
              invalidTest("0 0 1-344/3 * *", done);
            });
            it("more than 31 at mixed days", function(done) {
              invalidTest("0 0 1,2-50,60-230/7 * *", done);
            });
            it("more than 31 at last day of month", function(done) {
              invalidTest("* * 3L * *", done);
            });
            it("more than 31 at last weekday of month", function(done) {
              invalidTest("* * 2LW * *", done);
            });
            it("more than 31 at week day of month", function(done) {
              invalidTest("* * 34W * *", done);
            });
            it("more than 31 at mixed days, hours and minutes", function(done) {
              invalidTest("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-230/7 * *", done);
            });
            it("once a x month", function(done) {
              invalidTest("0 0 0 x *", done);
            });
            it("once a thirteen month", function(done) {
              invalidTest("0 0 0 13 *", done);
            });
            it("more than 12 at range of days", function(done) {
              invalidTest("0 0 0 1-120 *", done);
            });
            it("list of months", function(done) {
              invalidTest("0 0 0 1,40,5 *", done);
            });
            it("steps months", function(done) {
              invalidTest("0 0 0 */70 *", done);
            });
            it("range steps months 1", function(done) {
              invalidTest("0 0 0 1-13/3 *", done);
            });
            it("range steps months 2", function(done) {
              invalidTest("0 0 0 */300 *", done);
            });
            it("mixed months", function(done) {
              invalidTest("0 0 0 1,x-5,6-12/7 *", done);
            });
            it("mixed months, days, hours and minutes", function(done) {
              invalidTest(
                "1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-12/7 x", done);
              });
              it("mixed months, days, hours and minutes 2", function(done) {
                invalidTest(
                  "1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 1,2-5,6-1x/7 x", done);
                });
                it("may", function(done) {
                  invalidTest("* * * Mayo *", done);
                });
                it("range of weekdays", function(done) {
                  invalidTest("0 0 * * x-5", done);
                });
                it("list of weekdays", function(done) {
                  invalidTest("0 0 * * 1,3x,5", done);
                });
                it("steps weekdays", function(done) {
                  invalidTest("0 0 * * 1234/2", done);
                });
                it("range steps weekdays 1", function(done) {
                  invalidTest("0 0 * * 1-6/x", done);
                });
                it("range steps weekdays 2", function(done) {
                  invalidTest("0 0 * * x/3", done);
                });
                it("mixed weekdays", function(done) {
                  invalidTest("0 0 * * 1,2-94/2,5,6", done);
                });
                it("last day of week", function(done) {
                  invalidTest("* * * * L34", done);
                });
                it("last 5th day of the month", function(done) {
                  invalidTest("* * * * 50L", done);
                });
                it("mixed weekdays, monthdays, hours and minutes", function(done) {
                  invalidTest("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 x 1,2-4/2,5,6", done);
                });
                it("mixed weekdays, monthdays, hours and minutes 2", function(done) {
                  invalidTest("1,200-5,6-23/7 1,2-5,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6", done);
                });
                it("mixed weekdays, monthdays, hours and minutes 3", function(done) {
                  invalidTest("1,2-5,6-23/7 1,2-500,6-23/7,4 1,2-5,6-23/7 * 1,2-4/2,5,6", done);
                });
                it("mixed weekdays, monthdays, hours and minutes 4", function(done) {
                  invalidTest("1,2-5,6-23/7 1,2-5,6-23/7,4 1,2-985,6-23/7 */5687 1,2-4/2,5789,6", done);
                });
                it("the third Friday of the month", function(done) {
                  invalidTest("* * * * 5#30", done);
                });
                it("the third Friday of the month 2", function(done) {
                  invalidTest("* * * * 50#30", done);
                });
                it("nineth day", function(done) {
                  invalidTest("* * * * 9", done);
                });
              });

              describe("bad extended pattern", function() {

              });
            });
          });
