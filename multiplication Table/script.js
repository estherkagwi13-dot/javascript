function generateTable() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result")
    let message = document.getElementById("message")

    result.innerHTML = ""
    message.innerHTML = ""
    result.style.color = ""

    for (i = 0; i <= 5; i++) {
        if (num == "") {
            result.innerHTML = "Please enter a number"
            result.style.color = "red"
            return
        }
        result.innerHTML = `<div class="spinner"></div><p>Generating...</p>`
        setTimeout(function () {
            result.innerHTML = ""
            for (i = 0; i <= 5; i++) {
                result.innerHTML += `<div class="row">${num}*${i}=${num * i}</div>`
            }
            if(i===5){
                
            }
            message.innerHTML = "All done"
            message.style.color = "green"
        }, 2000)

    }
}