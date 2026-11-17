let fruits= ["mangos", "oranges", "apples"]
console.log(fruits[1])
console.log(fruits.length)
console.log(fruits[fruits.length -2])
/**
 * (fruits[fruits.length -2])
    * [fruits.length -2] answer is 
    * fruits.length is 3
    * so 3-2 is 1
    * (fruits[1])
    * so it shoukld show the fruit index in the console
 */
const marks= [11,20,34,40,50,60,70,80]
marks[0]= 10
//reassign an ite using index
//push - add items 
let cart= ["milk", "eggs"]
cart.push("bread", "fish", "beans")
console.log(cart)
//pop --removesitems from the array
cart.pop("beans")
console.log(cart)

let last= cart.pop()
console.log(last)

let berries= ["blue", "black","green", "red","wild"]
console.log(berries)
berries.push("others")
console.log(berries)
console.log(berries.length)
//shift and unshift
berries.unshift("seedless", "raspberries") //add to the start of list
console.log(berries)
berries.shift("seedless")
console.log(berries) //removes from the start of list
let sweet = berries.shift()
console.log(sweet)
console.log(berries)