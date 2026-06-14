function add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;   

    let total = Number(num1) + Number(num2);
    document.getElementById("result").innerText = "Answer: " + total;
}

function sub(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;   

    let total = Number(num1) - Number(num2);
    document.getElementById("result").innerText = "Answer: " + total;
}

function mul(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;   

    let total = Number(num1) * Number(num2);
    document.getElementById("result").innerText = "Answer: " + total;
}

function div(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;   

    if(Number(num2) === 0){
        document.getElementById("result").innerText = "Cannot divide by zero";
        return;
    }

    let total = Number(num1) / Number(num2);
    document.getElementById("result").innerText = "Answer: " + total;
}
