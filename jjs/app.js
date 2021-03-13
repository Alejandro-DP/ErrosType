function Number(){
    var numero2 = null;
    var numero1 = null;
    numero1 = document.getElementsByName("valor1")[0].value;
    numero2 = document.getElementsByName("valor2")[0].value;
    
    let ErrorA = (numero1 - numero2).toFixed(3);
    let ErrorR = (ErrorA / numero1).toFixed(6);
    let ErrorP = (ErrorR * 100 ).toFixed(4);
    
    const val1 = ErrorA;
    const val2 = ErrorR;
    const val3 = ErrorP;
    
    alert("Error Aproximado : "+ ErrorA + "\n"+ "Error Relativo: "+ ErrorR + "\n" + "Error RP: " + ErrorP +"%");

};
