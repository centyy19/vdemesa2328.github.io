
function add(){
    tb1= parseInt(form.tb1.value); 
    tb2= parseInt(form.tb2.value); 
    Result = tb1 + tb2;
    form.Result.value = Result;
}

function sub(){
    tb1= parseInt(form.tb1.value); 
    tb2= parseInt(form.tb2.value); 
    Result = tb1 - tb2;
    form.Result.value = Result;
}

function mult(){
    tb1= parseInt(form.tb1.value); 
    tb2= parseInt(form.tb2.value); 
    Result = tb1 * tb2;
    form.Result.value = Result;
}

function div(){
    tb1= parseInt(form.tb1.value); 
    tb2= parseInt(form.tb2.value); 
    Result = tb1 / tb2;
    form.Result.value = Result;
}

function cle(){
    document.getElementById("tb1").value = '';
    document.getElementById("tb2").value = '';
    document.getElementById("Result").value = '';
}
function abt(){
    document.getElementById("About").value = alert("Work of Cheese:Angeles,Kenneth John; De Mesa,Vincent; Dizon,Glenda");
}