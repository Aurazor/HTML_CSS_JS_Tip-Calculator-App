
let tip_boxes = document.getElementsByClassName('tip-box');
let tip_box_input = document.getElementById('input-percent');
let txtBill = document.getElementById('bill');
let txtNumPeople = document.getElementById('numPeople');
let txtAmountPerPeople = document.getElementById('tip-amount-perPerson');
let txtTotalPerPeople = document.getElementById('tip-amount-total');


let tip_percentage;
let tip_box_selected = false;

tip_box_input.addEventListener("click",function(){
    resetTipBox();
    tip_box_input.classList.add("tip-box-input-active");
    tip_percentage = tip_box_input.value;
    console.log(tip_percentage);
    tip_box_selected = true;
    calcTipAmount();
});

for (let i = 0; i < tip_boxes.length; i++) {
  let tip_box = tip_boxes[i];
  tip_box.addEventListener("click", function () {
    resetTipBox();
    tip_box.classList.add("tip-box-active");
    tip_percentage = tip_box.innerHTML.replace("%","");
    console.log(tip_percentage);
    tip_box_selected = false;
    calcTipAmount();
  });
}

function resetTipBox() {
  tip_box_input.classList.remove("tip-box-input-active");
  for (let i = 0; i < tip_boxes.length; i++) {
    tip_boxes[i].classList.remove("tip-box-active");
  }
}

function calcTipAmount(){
    let bill = parseFloat(txtBill.value);

    let tip;
    if(tip_box_selected){
        tip = parseInt(tip_box_input.value);
    }else{
        tip = parseInt(tip_percentage);
    }

    let numPeople = parseInt(txtNumPeople.value);
    let totalPerPerson = (bill * (100 + tip)/100)/numPeople;
    let billPerPerson = (bill*tip/100)/numPeople;

   

    
    txtAmountPerPeople.innerHTML ="$" + billPerPerson.toFixed(2);
    txtTotalPerPeople.innerHTML ="$" +  totalPerPerson.toFixed(2);
}