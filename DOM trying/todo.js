/*console.log(document.querySelectorAll("p"))
const paragraphs=document.querySelectorAll("p")

console.log(paragraphs[0].textContent)
console.log(paragraphs)
const heading=document.getElementById("heading")
heading.textContent="welcome to Dom again"
heading.style.color="brown"
heading.style.fontSize="50px"
heading.style.backgroundColor="pink"
heading.style.textAlign="center"
console.log(heading.textContent)
heading.classList.toggle("highlight")
console.log(heading.classList.contains("highlight"))
*/
const container=document.getElementById("container")
//textcontent writes the text content directly into the html
//container.textContent="<h2>hello students!</h2><p>welcome to this class</p>"
//displays as the html rules
container.innerHTML="<h2>hello!</h2><p>welcome to this class</p>"
//elements
const paragraph=document.createElement("p")
paragraph.textContent="Created using javascript!"
container.appendChild(paragraph)

const first=document.createElement("p")
first.textContent="the first paragraph"
container.appendChild(first)

const wambui=document.createElement("p")
wambui.textContent="trying out this appendChild thing"
container.appendChild(wambui)

//adding items on the list using const
const studentList=document.getElementById("studentList")
const li=document.createElement("li")
li.textContent="Mary Ann"
studentList.appendChild(li)

const li2=document.createElement("li")
li2.textContent="grace"
studentList.appendChild(li2)

//adding items on the list using let
let li3=document.createElement("li")
li3.textContent="Anna"
studentList.appendChild(li3)

li3=document.createElement("li")
li3.textContent="Purity"
studentList.appendChild(li3)


li3=document.createElement("li")
li3.textContent="Stacy"
studentList.appendChild(li3)

//arrays-this  adds the items on the list studentlist n the html at a go
const names=["Alan","Alex","Antony","Aaron"]
names.forEach(function(name){
    const li=document.createElement("li")
    li.textContent=name
    studentList.appendChild(li)
})

//index naming
const students=document.querySelectorAll("li")
students.forEach(function(student, index){
    console.log(index, student.textContent)
})
//removing items*i need to circle back here*
const firstStudent=document.querySelector("li")
//firstStudent.remove()
students[1].remove()
students[1].remove()
students[1].remove()

//trying again the names array new formula
const cnames=["collins","cole","cyrus"]
const studentlist=document.getElementById("studentList")

for(const name of cnames){
    const li=document.createElement("li")
li.textContent=name
studentList.appendChild(li)
}
const message=document.getElementById("msg")
message.remove()

/**const removeBtn=document.getElementById("removeBtn")
removeBtn.onclick=function(){
    const firstStudent=document.querySelector("li")
    firstStudent.remove()
}
    */

removeBtn.onclick= function(){
    const firstStudent=document.querySelector("li")
    if (firstStudent !==null){
        firstStudent.remove()
    }
}