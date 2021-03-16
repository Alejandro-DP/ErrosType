//autor : Alejadnro
const listvalore = document.getElementById('data');
function Number(){
    var numero2 = null;
    var numero1 = null;
    numero1 = document.getElementsByName("valor1")[0].value;
    numero2 = document.getElementsByName("valor2")[0].value;
    const tr = document.createElement('tr');
   

    let ErrorA = (numero1 - numero2).toFixed(5);
    let ErrorR = (ErrorA / numero1).toFixed(6);
    let ErrorP = (ErrorR * 100 ).toFixed(4);


    
    var list = new Array (ErrorA,ErrorR,ErrorP);
    let tds = "";
    list.map((li) => {
        let td = `<td>${li}</td>`;
        tds = tds + td;
      });
      tr.innerHTML = tds;
      listvalore.appendChild(tr);
};
