// document.getElementById("loan-form").addEventListener("submit", calculate);
document.getElementById("loan-form").addEventListener("submit", function (e) {
    document.getElementById("result").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout(calculate, 1000);
    e.preventDefault();
});

function calculate(e) {
    // console.log("button  is working ");
    const loan_amt = document.getElementById("loan_amt");
    const loan_inst = document.getElementById("loan_intrest");
    const loan_yr = document.getElementById("loan_year");
    const mnth_pay = document.getElementById("month-pay");
    const tot_amt = document.getElementById("toatl-amt");
    const tot_inst = document.getElementById("toatl-inst");

    //convert string to number using parseFloat()
    const l_amt = parseFloat(loan_amt.value);
    const l_inst = parseFloat(loan_inst.value) / 100 / 12;
    const l_yr = parseFloat(loan_yr.value) * 12;
    //calculation using formulas
    const res = Math.pow(1 + l_inst, l_yr);
    const monthly = (l_amt * res * l_inst) / (res - 1);
    console.log(monthly);
    if (isFinite(monthly)) {
        mnth_pay.value = monthly.toFixed(2);
        tot_amt.value = (monthly * l_yr).toFixed(2);
        tot_inst.value = (monthly * l_yr - l_amt).toFixed(2);
        //to display the result 
        document.getElementById("result").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }
    else {
        showAlert('Fill the Each feild');
    }
    e.preventDefault();
}
//Alert function
function showAlert(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    card.insertBefore(errorDiv, heading);

    //set time to alert msg
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);
}