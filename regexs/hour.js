const alpha = "((2[0-3])|([1]?[0-9]))";

const beta = "([*]((\/"+alpha+")?))";

const gamma = "("+alpha+"((-"+alpha+"((\/"+alpha+")?))?))";

module.exports = "(("+beta+"|"+gamma+")(([,]("+beta+"|"+gamma+"))*))";
