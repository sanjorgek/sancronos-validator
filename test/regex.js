const should = require("should");
const sixtyEx = require("../regexs/sixty");
const hoursEx = require("../regexs/hour");
const dayMonthEx = require("../regexs/dayM");
const monthEx = require("../regexs/month");
const dayWeekEx = require("../regexs/dayW");
const yearEx = require("../regexs/year");

describe("RegEx tests", function() {
  describe("minutes and seconds", function() {
    let testRE = new RegExp("^"+sixtyEx);
    it("asterisc", function() {
      "*".match(testRE)[0].should.equal("*");
    });
    it("asterisc steps", function() {
      "*/3".match(testRE)[0].should.equal("*/3");
    });
    it("asterisc steps 2", function() {
      "*/70".match(testRE)[0].should.equal("*/7");
    });
    it("range", function() {
      "1-60".match(testRE)[0].should.equal("1-6");
    });
    it("range 2", function() {
      "1-59".match(testRE)[0].should.equal("1-59");
    });
    it("range steps", function() {
      "1-60/3".match(testRE)[0].should.equal("1-6");
    });
    it("range steps 2", function() {
      "1-59/3".match(testRE)[0].should.equal("1-59/3");
    });
    it("range steps 2", function() {
      "1-59/300".match(testRE)[0].should.equal("1-59/30");
    });
    it("list", function() {
      "1,3,4,56,78,9".match(testRE)[0].should.equal("1,3,4,56,7");
    });
    it("list 2", function() {
      "1,3,4,56,58,9".match(testRE)[0].should.equal("1,3,4,56,58,9");
    });
    it("mixed", function() {
      "*/3,3-9,30-49/3,58,59".match(testRE)[0].should.equal("*/3,3-9,30-49/3,58,59");
    });
    it("mixed 2", function() {
      "*/3,3-9,30-49/3,580,59".match(testRE)[0].should.equal("*/3,3-9,30-49/3,58");
    });
  });

  describe("hours", function() {
    let testRE = new RegExp("^"+hoursEx);
    it("asterisc", function() {
      "*".match(testRE)[0].should.equal("*");
    });
    it("asterisc steps", function() {
      "*/3".match(testRE)[0].should.equal("*/3");
    });
    it("asterisc steps 2", function() {
      "*/70".match(testRE)[0].should.equal("*/7");
    });
    it("range", function() {
      "1-60".match(testRE)[0].should.equal("1-6");
    });
    it("range 2", function() {
      "1-59".match(testRE)[0].should.equal("1-5");
    });
    it("range steps", function() {
      "1-60/3".match(testRE)[0].should.equal("1-6");
    });
    it("range steps 2", function() {
      "1-19/3".match(testRE)[0].should.equal("1-19/3");
    });
    it("range steps 2", function() {
      "1-19/300".match(testRE)[0].should.equal("1-19/3");
    });
    it("list", function() {
      "1,3,4,56,78,9".match(testRE)[0].should.equal("1,3,4,5");
    });
    it("list 2", function() {
      "1,3,4,16,18,19".match(testRE)[0].should.equal("1,3,4,16,18,19");
    });
    it("mixed", function() {
      "*/3,3-9,10-19/3,20,23".match(testRE)[0].should.equal("*/3,3-9,10-19/3,20,23");
    });
    it("mixed 2", function() {
      "*/3,3-9,30-49/3,580,59".match(testRE)[0].should.equal("*/3,3-9,3");
    });
  });

  describe("month", function() {
    let testRE = new RegExp("^"+monthEx);
    it("asterisc", function() {
      "*".match(testRE)[0].should.equal("*");
    });
    it("asterisc steps", function() {
      "*/3".match(testRE)[0].should.equal("*/3");
    });
    it("asterisc steps 2", function() {
      "*/70".match(testRE)[0].should.equal("*/7");
    });
    it("range", function() {
      "1-60".match(testRE)[0].should.equal("1-6");
    });
    it("range 2", function() {
      "1-59".match(testRE)[0].should.equal("1-5");
    });
    it("range steps", function() {
      "1-60/3".match(testRE)[0].should.equal("1-6");
    });
    it("range steps 2", function() {
      "1-12/3".match(testRE)[0].should.equal("1-12/3");
    });
    it("range steps 2", function() {
      "1-12/300".match(testRE)[0].should.equal("1-12/3");
    });
    it("list", function() {
      "1,3,4,56,78,9".match(testRE)[0].should.equal("1,3,4,5");
    });
    it("list 2", function() {
      "1,3,4,16,18,19".match(testRE)[0].should.equal("1,3,4,1");
    });
    it("mixed", function() {
      "*/3,3-9/4,1-12/3,20,23".match(testRE)[0].should.equal("*/3,3-9/4,1-12/3,2");
    });
    it("mixed 2", function() {
      "*/3,3-9,30-49/3,580,59".match(testRE)[0].should.equal("*/3,3-9,3");
    });
  });

  describe("month day", function() {
    let testRE = new RegExp("^"+dayMonthEx);
    it("asterisc", function() {
      "*".match(testRE)[0].should.equal("*");
    });
    it("asterisc steps", function() {
      "*/3".match(testRE)[0].should.equal("*/3");
    });
    it("asterisc steps 2", function() {
      "*/70".match(testRE)[0].should.equal("*/7");
    });
    it("range", function() {
      "1-60".match(testRE)[0].should.equal("1-6");
    });
    it("range 2", function() {
      "1-59".match(testRE)[0].should.equal("1-5");
    });
    it("range 2", function() {
      "1-12".match(testRE)[0].should.equal("1-12");
    });
    it("range steps", function() {
      "1-60/3".match(testRE)[0].should.equal("1-6");
    });
    it("range steps 2", function() {
      "1-59/3".match(testRE)[0].should.equal("1-5");
    });
    it("range steps 3", function() {
      "1-59/3".match(testRE)[0].should.equal("1-5");
    });
    it("range steps 4", function() {
      "1-59/300".match(testRE)[0].should.equal("1-5");
    });
    it("range steps 5", function() {
      "1-12/3".match(testRE)[0].should.equal("1-12/3");
    });
    it("list", function() {
      "1,3,4,56,78,9".match(testRE)[0].should.equal("1,3,4,5");
    });
    it("list 2", function() {
      "1,3,4,56,58,9".match(testRE)[0].should.equal("1,3,4,5");
    });
    it("list 3", function() {
      "1,3,4,5,10,11".match(testRE)[0].should.equal("1,3,4,5,10,11");
    });
    it("mixed", function() {
      "*/3,3-9,30-49/3,58,59".match(testRE)[0].should.equal("*/3,3-9,30-4");
    });
    it("mixed 2", function() {
      "*/3,3-9,30-49/3,580,59".match(testRE)[0].should.equal("*/3,3-9,30-4");
    });
    it("mixed 2", function() {
      "*/3,3-9,20-31/3,18,19".match(testRE)[0].should.equal("*/3,3-9,20-31/3,18,19");
    });
    it("week day", function() {
      "W".match(testRE)[0].should.equal("W");
    });
    it("last week day", function() {
      "LW".match(testRE)[0].should.equal("LW");
    });
    it("last day", function() {
      "L".match(testRE)[0].should.equal("L");
    });
    it("fifth day", function() {
      "5L".match(testRE)[0].should.equal("5");
    });
  });

  describe("week day", function() {
    let testRE = new RegExp("^"+dayWeekEx);
    it("asterisc", function() {
      "*".match(testRE)[0].should.equal("*");
    });
    it("asterisc steps", function() {
      "*/3".match(testRE)[0].should.equal("*/3");
    });
    it("asterisc steps 2", function() {
      "*/70".match(testRE)[0].should.equal("*/7");
    });
    it("range", function() {
      "1-60".match(testRE)[0].should.equal("1-6");
    });
    it("range 2", function() {
      "1-59".match(testRE)[0].should.equal("1-5");
    });
    it("range 2", function() {
      "1-24".match(testRE)[0].should.equal("1-2");
    });
    it("range steps", function() {
      "1-60/3".match(testRE)[0].should.equal("1-6");
    });
    it("range steps 2", function() {
      "1-59/3".match(testRE)[0].should.equal("1-5");
    });
    it("range steps 3", function() {
      "1-59/3".match(testRE)[0].should.equal("1-5");
    });
    it("range steps 4", function() {
      "1-59/300".match(testRE)[0].should.equal("1-5");
    });
    it("range steps 5", function() {
      "1-6/3".match(testRE)[0].should.equal("1-6/3");
    });
    it("list", function() {
      "1,3,4,56,78,9".match(testRE)[0].should.equal("1,3,4,5");
    });
    it("list 2", function() {
      "1,3,4,56,58,9".match(testRE)[0].should.equal("1,3,4,5");
    });
    it("list 3", function() {
      "1,3,4,5,10,11".match(testRE)[0].should.equal("1,3,4,5,1");
    });
    it("list 3", function() {
      "1,3,4,5,6".match(testRE)[0].should.equal("1,3,4,5,6");
    });
    it("mixed", function() {
      "*/3,3-9,30-49/3,58,59".match(testRE)[0].should.equal("*/3,3");
    });
    it("mixed 2", function() {
      "*/3,3-9,30-49/3,580,59".match(testRE)[0].should.equal("*/3,3");
    });
    it("mixed 3", function() {
      "*/3,3-7,1-4/3,18,19".match(testRE)[0].should.equal("*/3,3-7,1-4/3,1");
    });
    it("week day", function() {
      should.not.exist("W".match(testRE));
    });
    it("last week day", function() {
      "LW".match(testRE)[0].should.equal("L");
    });
    it("last day", function() {
      "L".match(testRE)[0].should.equal("L");
    });
    it("last fifth day", function() {
      "5L".match(testRE)[0].should.equal("5L");
    });
    it("fifth day", function() {
      "50L".match(testRE)[0].should.equal("5");
    });
  });

  describe("year", function() {
    let testRE = new RegExp("^"+yearEx);
    it("asterisc", function() {
      "*".match(testRE)[0].should.equal("*");
    });
    it("asterisc steps", function() {
      "*/3".match(testRE)[0].should.equal("*/3");
    });
    it("asterisc steps 2", function() {
      "*/70".match(testRE)[0].should.equal("*/70");
    });
    it("asterisc steps 2", function() {
      "*/799999".match(testRE)[0].should.equal("*/7999");
    });
    it("range", function() {
      should.not.exist("1-60".match(testRE));
    });
    it("range 2", function() {
      should.not.exist("1-59".match(testRE));
    });
    it("range 3", function() {
      "2017-3000/300".match(testRE)[0].should.equal("2017-3000/300");
    });
    it("range 4", function() {
      "2017-3000/300000".match(testRE)[0].should.equal("2017-3000/3000");
    });
    it("range steps", function() {
      should.not.exist("1-60/3".match(testRE));
    });
    it("range steps 2", function() {
      should.not.exist("1-12/3".match(testRE));
    });
    it("range steps 2", function() {
      should.not.exist("1-12/300".match(testRE));
    });
    it("range steps 3", function() {
      "2134-2224/300".match(testRE)[0].should.equal("2134-2224/300");
    });
    it("range steps 4", function() {
      "2134-2224/3000000".match(testRE)[0].should.equal("2134-2224/3000");
    });
    it("list", function() {
      should.not.exist("1,3,4,56,78,9".match(testRE));
    });
    it("list 2", function() {
      should.not.exist("1,3,4,16,18,19".match(testRE));
    });
    it("list 3", function() {
      "2304,3001,3411,3160,3180,3190,4".match(testRE)[0].should.equal("2304,3001,3411,3160,3180,3190");
    });
    it("list 4", function() {
      "2304,3001,3411,3160,3180,3190".match(testRE)[0].should.equal("2304,3001,3411,3160,3180,3190");
    });
    it("mixed", function() {
      "*/3,3000-3800/4,2017-2123/3,2045,2333".match(testRE)[0].should.equal("*/3,3000-3800/4,2017-2123/3,2045,2333");
    });
    it("mixed 2", function() {
      "*/3,3-9,30-49/3,580,59".match(testRE)[0].should.equal("*/3");
    });
  });
});
