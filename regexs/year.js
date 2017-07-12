const omega = "((\/([1-9](([0-9]{1,3})?)))?)";
const alpha = "(([1][9]([0-9]{2}))|([23]([0-9]{3})))";
const beta = "([*]"+omega+")";
const gamma = "("+alpha+"(((-"+alpha+")?)"+omega+"))";

module.exports = "(("+beta+"|"+gamma+")(([,]("+beta+"|"+gamma+"))*))";
