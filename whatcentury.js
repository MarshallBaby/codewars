function whatCentury(year)
{
  let numYear = parseInt(year, 10);
  let i = 0;
  let counter = 0;
  if (numYear >= 0) {
  while(i < numYear){
  numYear = numYear - 100;
  counter++;
}
}
counter = counter.toString(10);
if (counter == "11" || counter == "12" || counter == "13" ) {counter = counter + "th"}else{
switch(counter[counter.length - 1]){
  case "1": counter = counter + "st";
  break;
  case "2": counter = counter + "nd";
  break;
  case "3": counter = counter + "rd";
  break;
  default: counter = counter + "th";
}
}

  return counter;
}