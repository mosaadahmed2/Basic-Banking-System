
function display()
    {
       var getamount=document.getElementById("amount").value;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - getamount;
    if (myAccountBalance<=0)
    {
        alert("Your Account will become Zero balance.Please Maintain minimum balance in your Account");
    }
    
      else if(isNaN(getamount))
      {
       alert("Enter Valid Amount.");
      }
     else if(getamount>17000)      {
      alert("Insufficient Balance.");
      }
     
      else{
      document.getElementById("result").innerHTML="You have done transaction of amount Rs. "+getamount+" to  "+document.getElementById("names").value+" <br> Your Account Balance is Rs. "+myAccountBalance;
       document.getElementById("myAccountBalance").innerText = myAccountBalance;
           var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`${getamount} is sent to recepient with Email-id ${document.getElementById("names").value}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
      }
    
     
    
      
      
     
      return false;
    }
