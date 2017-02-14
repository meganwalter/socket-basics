var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());

var timestampMoment = moment.utc(Date.now());

console.log(timestampMoment.local().format('hh:mm a')); //11:06 am



// now.subtract(1, 'year');
//
// console.log(now.format());
//
// console.log(now.format('MMM Do YYYY, h:mma')); // 6:45 pm
//
// //add month and day, Oct 5th 2017, 6:45pm
