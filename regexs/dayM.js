const alpha = "((3[01])|([12]?[0-9]))";

const beta = "([*]((\/"+alpha+")?))";

const gamma = "("+alpha+"((-"+alpha+"((\/"+alpha+")?))?))";

module.exports = "((("+alpha+"|(L)?)[W])|(L)|(("+gamma+"|"+beta+")(([,]("+gamma+"|"+beta+"))*)))";
