const listvalore = document.getElementById('data');
function Number(){
    var numero2 = null;
    var numero1 = null;
    numero1 = document.getElementsByName("valor1")[0].value;
    numero2 = document.getElementsByName("valor2")[0].value;
    const td = document.createElement('td');
   

    let ErrorA = (numero1 - numero2).toFixed(3);
    let ErrorR = (ErrorA / numero1).toFixed(6);
    let ErrorP = (ErrorR * 100 ).toFixed(4);
    
    const val1 = ErrorA;
    const val2 = ErrorR;
    const val3 = ErrorP;
     
    let listvalores = [ErrorA,ErrorR,ErrorP];

    /*alert("Error Aproximado : "+ ErrorA + "\n"+ "Error Relativo: "+ ErrorR + "\n" + "Error RP: " + ErrorP +"%");*/
    td.innerHTML = listvalores;
    
    listvalore.appendChild(td);
    agregarLS(listvalores);
    document.addEventListener('DOMContentLoaded',cargarLS);
    
    console.log(listvalore);

};
function agregarLS(valor){
    let valores;
  /// añadir 
  valores = ArayStorge();
      valores.push(valor);
      //con
      localStorage.setItem('listvalores', JSON.stringify(valores));
      
  }
  function ArayStorge(){
    let valores;

    //revisar u valor en local
    if (localStorage.getItem('listvalore') === null){

        valores = []
        
    }else{
        tweets = JSON.parse(localStorage.getItem('listvalores'));
    }
    return valores;

}
function cargarLS(){
    let valores;
    valores = ArayStorge();
    
   /* valores.forEach(function(valor) {
         const li = document.createElement('td');
         li.innerText = valor;
         listvalore.appendChild(li);
    //agrega a la lista 
   
  
    });*/
    for(i=0; i<=valores;i++){
       const td = document.createElement('td');
       listvalore.appendChild(td);
    }
}
$(document).ready(function() {
    $('#tabla').DataTable();
} );