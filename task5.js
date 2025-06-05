
 function runPosterDesigner() {

  let eventName = "code academy";
  let date = "November 12, 2025";
  let location = "olympic eastate";


  const border = "***********************";

 
  let line1 = border;
  let line2 = "*" + eventName.padEnd(border.length - 4) + " *";
  let line3 = "* " + date.padEnd(border.length - 4) + " *";
  let line4 = "* " + location.padEnd(border.length - 4) + " *";
  let line5 = border;

  // Show the poster
  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line4);
  console.log(line5);
}

runPosterDesigner();
