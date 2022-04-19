        function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //validate the value of principal, no less or equal zero
    if (principal.value==""||principal.value<=0){
        alert("Enter a positive number");
        principal.value="";
        principal.focus();
        
    
    }
    else{
        document.getElementById("result").innerHTML="If you deposit \<b\>"+principal.value+"\<\/b\>,\<br\> at an interest rate of \<b\>"+rate+"%\<\/b\>.\<br\>You will receive an amount of \<b\>"+interest+ "\<\/b\>, \<br\> in the year \<b\>"+year+"\<\/b\>.";
    }
}

    function updateRate() 
{ 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText =rateval+"%";
}

