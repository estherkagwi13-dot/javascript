function calculatemarks(){
    let maths = 80;
    let english = 75;
    let chem = 90;
console.log (`maths: ${maths}  English: ${english} chem:${chem}`)
let total= maths+english+chem
console.log(`total: ${total}`)
let average= total/3
console.log(`average: ${average}`)
document.querySelector("#results").innerHTML=total
}


let maths = 80;
    let english = 75;
    let chem = 90;
    let total= maths+english+chem
    let average= total/3
document.querySelector("#results").innerHTML =`
    <h3>Results</h3>
    <p>Mathematics: ${maths}</p>
    <p>English: ${english}</p>
    <p>Programming: ${chem}</p>
    <hr>
    <h3>Total: ${total}</h3>
    <h3>Average: ${average.toFixed(2)}</h3>
`;

//cicle back to thi when ever and figure it out
/*
function calculatemarks(){
let maths=Number(document.querySelector("#maths").value)
let eng = Number (document.querySelector("#eng").value)
let chem = Number (document.querySelector("#chem").value)
let total=maths+eng+chem
let average= total/3
console log(total)
console.log(average)
document.querySelector("#results").innerHTML=`
Total: ${total}
average: ${average}`
}
*/
//ex 1 
let fullName= "Wambui Kagwi"
let age= 2
let course= "Software Development"
const county= "Nyeri"
let IsStudent= true
console.log(`
    Fullneme: ${fullName}
    Age: ${age}
    Course: ${course}
    County: ${county}`)

//simple calc
let num10 =50
let num11= 20
let addition= num10 + num11
console.log(addition)