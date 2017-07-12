const alpha = "([0-7])";

const beta = "([*](\/"+alpha+")?)";

const gamma = "(((-"+alpha+")?)((\/"+alpha+")?))";

module.exports = "(("+alpha+"#"+alpha+")|("+alpha+"?(L))|(("+beta+"|("+alpha+""+gamma+"))(([,]("+beta+"|("+alpha+""+gamma+")))*)))";
