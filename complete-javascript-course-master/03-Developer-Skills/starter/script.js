// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM:
/* 
We work for a company building a smart home thermometer. Our
most recent task is this: "Given an array of temperatures of one day,
calculate the temperature amplitude. Keep in mind that sometimes
there might be a sensor error."
*/

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function amplitude(temperatures) {
  let mini = null;
  let maxi = null;
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] === "error") continue;
    else if (mini === null && maxi === null) {
      mini = temperatures[i];
      maxi = temperatures[i];
    } else {
      if (temperatures[i] > maxi) maxi = temperatures[i];
      if (temperatures[i] < mini) mini = temperatures[i];
    }
  }

  let amp = maxi - mini;
  return amp;
}

console.log(amplitude(temperature));
console.log([1, 2, 3].concat([4, 5, 6]));

const measureKelvin = function () {
  const data = {
    type: "tmeperature",
    unit: "celsius",
    value: prompt("enter the temperature in celsius: "),
  };

  const kelvin = Number(data.value) + 273;
  console.log(kelvin);
  return kelvin;
};

measureKelvin();

// CODING CHALLENGE

/*
given an array of forecasted maximum and minimum tmeperatures,
the thermometer displays a string with these temperatures.

example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days
 ... 23C in 3 days ..."

 Create a function 'PrintForecast' which takes in an array 'arr' 
 and log a string like the above to the console.
*/

function PrintForecast(temps) {
  let str = "...";
  for (let i = 0; i < temps.length; i++) {
    str += ` ${temps[i]} in ${i + 1} ${i === 0 ? "day" : "days"} ...`;
  }
  console.log(str);
}

PrintForecast([17, 21, 23]);
