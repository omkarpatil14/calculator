
let display=document.getElementById("display")

let fristNumber="";
let secondNumber="";
let operator="";
let result="";

let numButton = document.querySelectorAll(".numButton");
for( let i=0;i<numButton.length;i++){
    numButton[i].addEventListener('click',() => {
        console.log(numButton[i].innerHTML);
        if(operator=="")
        {
            fristNumber += numButton[i].innerHTML;
            console.log(fristNumber);
            console.log(numButton[i]);

            updateDisplay(fristNumber);
        }else{
            secondNumber +=numButton[i].innerHTML;
            console.log(secondNumber)
            console.log(numButton[i])
            updateDisplay(secondNumber);
        }
    })
}

let opButton =document.getElementsByClassName("opButton")
for(let i=0;i<opButton.length;i++){
    opButton[i].addEventListener("click", function(){
        operator=opButton[i].textContent;
        console.log("clicked")
    })
}

let eqButton= document.getElementsByClassName("eqButton")[0];
eqButton.addEventListener("click",function(){
    result= operate(operator,parseFloat(fristNumber),parseFloat(secondNumber));
    updateDisplay(result);
})
let clearButton =document.querySelector(".clearButton");
    clearButton.addEventListener("click",()=>{
    fristNumber="";
    secondNumber="";
    operator="";
    result="";
    updateDisplay("");
})

function operate(operator,a,b){
    let num1;
    switch(operator)
   { case "+":
        return a+b;
    
        case"-":
        return a-b;

        case" *":
        return a*b;

        case "/":
            b==0 ? ( num1 = undefined):(num1 = a/b) 
            console.log(num1);
            return num1 ;   

        default:
            return null;
    }
    
}


function updateDisplay(value){

    display.innerHTML= value;

}

