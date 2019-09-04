const pizzas: number = 5;

/*----------------------------------------------------------*/
// define a function that determine if a discount must be apply
//based on the number of pizza
/*----------------------------------------------------------*/

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas)){
  console.log(`You're entitled to a discount!`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}
