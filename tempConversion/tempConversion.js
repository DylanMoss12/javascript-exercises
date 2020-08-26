const ftoc = function(num) {
  let result = ((num - 32) * (5 / 9));
  return (Math.round(result * 10) / 10);
}

const ctof = function(num) {
  let result = ((num * (9 / 5)) + 32);
  return (Math.round(result * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
}
