//perfect
function generateTable() {
  let num = document.getElementById("number").value;
  let result = document.getElementById("result");
  let message = document.getElementById("message");

  result.innerHTML = "";
  result.style.color = "";
  message.innerHTML = "";

  if (num === "") {
    result.innerHTML = "Please enter a number";
    result.style.color = "red";
    return;
  }

  result.innerHTML = `<div class="spinner"></div><p>Generating...</p>`;

  setTimeout(function () {
    result.innerHTML = "";          // remove the spinner

    for (let i = 1; i <= 12; i++) {
      setTimeout(function () {
        result.innerHTML += `<div class="row">${num} x ${i} = ${num * i}</div>`;

        if (i === 12) {             // last row just appeared
          message.innerHTML = "All done";
          message.style.color = "green";
        }
      }, i * 300);
    }
  }, 2000);
}