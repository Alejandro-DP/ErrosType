const listvalore = document.getElementById('tabla');
function Number(){
    var numero2 = null;
    var numero1 = null;
    numero1 = document.getElementsByName("valor1")[0].value;
    numero2 = document.getElementsByName("valor2")[0].value;
    const td = document.createElement('td');
   

    let ErrorA = (numero1 - numero2).toFixed(3);
    let ErrorR = (ErrorA / numero1).toFixed(6);
    let ErrorP = (ErrorR * 100 ).toFixed(4);


    
    var list = new Array (ErrorA,ErrorR,ErrorP);
    
   for (var i = 0; i < list.length; i++){ 
    const td = document.createElement('td');
        td.innerHTML = list[i];
        listvalore.appendChild(td);  
   }
};
