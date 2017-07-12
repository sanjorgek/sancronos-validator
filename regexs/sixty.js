const alpha = "([1-5]?[0-9])";
const beta = "([*]((\/"+alpha+")?))";
const gamma = "("+alpha+"(((-"+alpha+")?)((\/"+alpha+")?)))";

module.exports = "("+gamma+"|"+beta+")(([,]("+gamma+"|"+beta+"))*)";
