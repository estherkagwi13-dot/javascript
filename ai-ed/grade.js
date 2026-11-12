function calculateGrade(){
    //gets the name and trim cuts off space from end and start of text
   let studentName=document.getElementById("studentName").value.trim() 
   let marksInput=document.getElementById("marks").value
   //converts into a number
   let marks= Number(marksInput)
let result=document.getElementById("result")
//makes the hidden results visible
result.style.display="block"
//validating input //this are guards they ensure the value in the input are right
if(studentName===""){ //check if name is empty
    result.className="error" //
    result.textContent="Please enter the student's name." //the msg to display
    return; //stop here
    }
if(marksInput ===""){
    result.className="error"
    result.textContent="Please enter student's marks"
    return
}
if (marks<0 || marks >100){
    result.className="error"
    result.textContent="Marks should be in a range of 0 to 100"
    return
}
//grading
let grade;
let remarks;
if(marks>=80){
    grade="A"
    remarks="Excelent Performance"
}
else if(marks>= 70){
    grade="B"
    remarks="Very Good Performance"
}
else if(marks>=60){
    grade="C"
    remarks="Good Performance"
}
else if(marks>=50){
    grade="D"
    remarks="Fair Performance"
}
else{
    grade="E"
    remarks="Kindly Improve"
}
//pass or failed
let status;
if(marks>=50){
    status="Passed"
    result.className="success"
}
else{
    status="Failed"
    result.className="failure"
}
console.log(`
    Name: ${studentName}
    Marks: ${marksInput}
    Grade: ${grade}
    Status: ${status}
    Remarks: ${remarks}`)
    //display results in html remember
    result.innerHTML=`
    <h3>Student Results<h3>
    <p><strong>Name</strong> ${studentName}<p>
    <p><strong>Marks</strong> ${marks}<p>
    <p><strong>Grade</strong> ${grade}<p>
    <p><strong>Remarks</strong> ${remarks}<p>
    <p><strong>Status</strong> ${status}<p> 
`
}
