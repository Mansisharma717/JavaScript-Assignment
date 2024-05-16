let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childTicketsPrice = 100;
let adultTicketsPrice = 150;
let seniorTicketsPrice = 120;

let totalPrice = 
  numberOfChilds * childTicketsPrice +
  numberOfAdults * adultTicketsPrice +
  numberOfSeniors * seniorTicketsPrice;

console.log(`The total ticket price is ${totalPrice}`);