money = 0;
mpc = 1;
mps = 0;
function setmoney() {
  money += mpc;
}

function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("mpc", mpc);
  localStorage.setItem("mps", mps);
}

function load() {
  money = parseInt(localStorage.getItem("money"));
  mpc = parseInt(localStorage.getItem("mpc"));
  mps = parseInt(localStorage.getItem("mps"));
  console.log(money);
}

function reset() {
  confirmReset = confirm("Are you sure?");
  if (confirmReset === true) {
    money = 0;
    mpc = 1;
    mps = 0;
  }
}

function tickReload() {
  money += 0.05 * mps;
  document.getElementById("moneyINPUT").value =
    "You have: " + money.toFixed(1) + " lines of code.";
  document.getElementById("moneyButton").textContent = 'Code '+mpl+' lines of code'
}

window.setInterval(tickReload, 50);
