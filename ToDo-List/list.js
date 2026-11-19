//selecting the ids from the htmlfile
const topicInput=document.getElementById("topicInput")
const btn=document.getElementById("btn")
const topicList=document.getElementById("topicList")
const emptyMessage=document.getElementById("emptyMessage")
//updating the display msg i.e no task added and succssfull added
function updateEmptyMessage(){
    if(topicList.children.length===0){
        emptyMessage.style.display="block"
    }
    else{
        emptyMessage.style.display="none"
    }
}
//adding topics to the list
function addTopic(){
    const topicText=topicInput.value.trim()
    if(topicText===""){
        alert("Please enter a topic")
        return
    }
    
    const li=document.createElement("li")
    const topicName=document.createElement("span")
    topicName.textContent=topicText
//click a topic to complete
    topicName.addEventListener("click", function(){
        topicName.classList.toggle("completed")
    })
    //creating  the delete button
const deleteButton=document.createElement("button")
deleteButton.textContent="Delete"
deleteButton.classList.add("deleteButton")
    //
    deleteButton.addEventListener("click", function(){
        li.remove()
        updateEmptyMessage()
    })
//creating the button done
 const doneButton=document.createElement("button")
    doneButton.textContent="Done"
    doneButton.classList.add("doneButton")

    doneButton.addEventListener("click", function(){
        topicName.classList.toggle("completed")
    })

const buttons=document.createElement("div")
buttons.classList.add("buttons")
buttons.appendChild(doneButton)
buttons.appendChild(deleteButton)

    li.appendChild(topicName)
    li.appendChild(buttons)
    topicList.appendChild(li)

   
    //clear the input and update
    topicInput.value=""
    updateEmptyMessage()
}
btn.addEventListener("click", addTopic)
updateEmptyMessage()
