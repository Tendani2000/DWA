const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.trunc(dividend / divider);
}
)
function checkInputs() {
  if (dividend === "" || divider === ""){
    document.getElementById("data-result").innerText = "Division not performed. Both values are required in inputs. Try again"
  }
  if (dividend < 0 || divider < 0){
    alert('Please enter a positive number');
  }
  if (isNaN(dividend) || isNaN(divider)){
    alert('enter a number')
  }
}


//added Math.trunc to remove the decimals.