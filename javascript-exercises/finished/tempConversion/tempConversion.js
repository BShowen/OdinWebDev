const ftoc = function(fahreneit) {
  let celsius = (fahreneit -32) * (5/9);
  celsius = Number(celsius.toFixed(1));

  return celsius;
}

const ctof = function(celsius) {
  let fahreneit = celsius * (9/5) +32;
  fahreneit = Number(fahreneit.toFixed(1));
  return fahreneit;
}

module.exports = {
  ftoc,
  ctof
}
