
  let totalTip = document.getElementById('calculate'); 
  let totalAmount = document.getElementById('total'); 
  let perPerson = document.getElementById('perperson');
  let button = document.getElementById('btn');
  
  function calculateTip(){
      let billString = document.getElementById("billInput").value;
     let  tipString= document.getElementById("tipInput").value;
     let  perPersonString = document.getElementById("pplInput").value;
   
      let bill = parseFloat(billString);
      let tipPersent = parseFloat(tipString);
      let person = parseFloat(perPersonString);
      console.log(billString,  bill);
  
      let output  = (((bill * tipPersent)/100)/person);
      totalTip.innerHTML = output;
      let output2 = output + bill;
      totalAmount.innerHTML = output2;
      let output3 = output2 / perPersonString;
      perPerson.innerHTML = output3;
  }
  
  button.onclick=calculateTip;
  