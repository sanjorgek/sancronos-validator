const alpha = "((1([0-2]?))|([2-9]))";
const beta = "([*]((\/"+alpha+")?))";
const gamma = "("+alpha+"(((-"+alpha+")?)((\/"+alpha+")?)))";

module.exports = "(("+beta+"|"+gamma+")((([,]("+beta+"|"+gamma+")))*))";
