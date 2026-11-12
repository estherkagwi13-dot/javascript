let studentName= "john"
let studentAge = 20
let studentMarks = 85
const schoolName= "future labs"
let msg= 'doing all with ai'
let isStudent= true
let haspaidfees= false
let surname= null
let amountPaid=

console.log(studentName)
console.log(studentMarks)
console.log(studentAge)
console.log("studentName")
studentAge=50
console.log(studentAge)
console.log(schoolName)
let balance = 5000
balance = balance - 1000
console.log(balance)
console.log(amountPaid)
console.log(surname)
console.log(typeof studentAge)
console.log(typeof isStudent)
console.log(typeof msg)
//objects & arrays
let student={
    grade: "pass",
    course:"Tech",
    recomendation: "proceed to next sem"
} 
console.log(student)
let subjects= ["maths", "eng", "chem", "biology"]
console.log(subjects[3], subjects[0])
console.log(`First: ${subjects[0]}`)
let firstName="mary"
const institution= "The University of Nairobi"
console.log(`hello ${firstName}, welcome to ${institution}`)
let price = 300
let quantity = 7
console.log(`total: ${price * quantity}`)
console.log(`name:${studentName}`)
let num1 = 30
let num2 =40
console.log(`addation: ${num1 + num2}`)
console.log(`subtraction: ${num1-num2}`)
console.log(`multiplacation: ${num1 * num2}`)
console.log(`Division:${num2 / num1}`)
console.log(`module/reminder: ${num1 % num2}`)
console.log(`power: ${num1 ** num2}`)
let num3 = 10
let num4 = 20
num3 += 10
console.log(num3)
num4 -=10
console.log(num4)
let num5 = 5
num5 *=4
console.log(num5)
console.log(5+5*2)
console.log((5+5)*2)
let ages= 30
let hasId = true
console.log(ages >= 18 && hasId)
console.log(ages<=18 || hasId)
console.log(!hasId)

let marks= 70
let attendance = 60
console.log(marks>= 50 && attendance >=75)
console.log(marks>= 50 || attendance >=75)
console.log(!(marks>=50))
//shopping calculater
/**
 * 2 shirts at 800 each
 * 1 pair shoe at 2500
 * 3 pairs of socks at 150 each
 * use variables and 
 */
let shirtQty = 2
let shirtPrice= 800
let shirtTotal= shirtQty* shirtPrice
console.log(`Shirt Amount ${shirtTotal}`)
let shoeQty = 1
let shoePrice = 2500
let shoeTotal= shoePrice * shoeQty
console.log(`Shoe Amount: ${shoeTotal}`)
let sockQty = 5
let sockPrice = 150
let sockTotal= sockPrice* sockQty
console.log(`Sock Amount: ${sockTotal}`)
let shoppingtTotal= sockTotal+shoeTotal+shirtTotal
console.log(`Amount Spent: ${shoppingtTotal}`)
//Personal Expense Calculator
/**
 * monthly Income = 30000
 * rent 8000
 * food = 6000
 * transport = 3000
 * other expenses = 2000
 * Store the income in a variable.
Store each expense in its own variable.
Calculate the total expenses.
Calculate the remaining balance.
Calculate the percentage of income spent.
Display the results in the browser.
Display the results in the console too.
 */
let income= 30000
let rent = 8000
let food = 6000
let transport = 3000
let others = 2000
let total= rent+food+transport+others
console.log(`total expenses: ${total}`)
let bal = income- total
console.log(`Balance: ${bal}`)
let per= total/income *100
console.log(`per1: ${per}%`) 
//display on the browser we will circle back there
// CONDITIONAL STATEMENTS
let age = 40
if (age>=18){
    console.log("an adult")
}
if(age>=50){
    console.log("you are a grown adult")
}
else{
    console.log("you need more years")
}
//else if more conditions with multiple possible aoutcomes.
marks= 60
if(marks<=50){
    console.log("fail")
    }
  else if(marks>=70){
    console.log("A")
  }
  else {
    console.log("average student")
  }
  /**
   * 80-100 A
   * 70-79 B
   * 60-69 C
   * 50-59 D
   * 0-49 Fail
   */
  let JohmMarks = 51
  if(JohmMarks>=80){
    console.log("A")
  }
  else if(JohmMarks>=70){
    console.log("B")
  }
  else if(JohmMarks>=60){
    console.log("C")
  }
  else if(JohmMarks>=50){
    console.log("D")
  }
  else{
    console.log("fail")
  }
  //to avoid marks being assigned multiple garde we can use the combined operations
 let AnnMarks= 100
  if (AnnMarks>=80 && AnnMarks<=100){
    console.log("A")
  }

  let Marymarks= 101
  if(Marymarks<0 || Marymarks > 100){
    console.log("Enter Valid mark")
  }
  else if(Marymarks>=70){
    console.log("B")
  }
  else if(Marymarks>=60){
    console.log("C")
  }
  else if(Marymarks>=50){
    console.log("D")
  }
  else{
    console.log("fail")
  }
  //operations and conditions AND&& OR|| NOT!
  let years= 9
  let hasDl = true
  if(years>=21 && hasDl == true){
    console.log("can drive")
  }
  else{
    console.log("Do Not Drive")
  }
let isloggedIn= false
if(!isloggedIn){
    console.log("please log in")
}
//SWITCH CASE
let choice= 6
switch(choice){
    case 1:
    console.log("opening student reg")
    break;
    case 2:
        console.log("opening student records")
        break;
        case 3:
            console.log("opening exam results")
            break;
            case 4: 
            console.log("new student")
            break;
            default:
                console.log("invalid")
}

let grades = "D"
switch(grades){
  case "A":
    console.log("we got it")
    break;
    case "B":
      console.log("Not yet")
      break;
      case "C":
      console.log("Try Again")
      break;
      default:
        console.log("The end")
}
//STUDENT GRADING SYSTEM
