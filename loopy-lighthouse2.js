var loopyLighthouse = function (range, multiples, words) {
  for (var i = 15; i <= 90; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log("BattyBeacon");
    } else if (i % 2 === 0) {
      console.log("Batty");
    } else if (i % 5 === 0) {
      console.log("Beacon");
    } else {
      console.log(i);
    }
  }
}
loopyLighthouse([15,90], [2, 5], ["Batty", "Beacon"]);