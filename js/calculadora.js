function sumar(num1, num2){
    return num1+num2;
}

function sumarNums (){
    var numero1 = parsearNums("idNum1")
    var numero2 = parsearNums("idNum2")
    document.getElementById('IdlabelResultado').innerHTML = 'Resultado' + sumar(numero1,numero2);
}

//funcion que obtiene el elemento 
function parsearNums (idCampo){
    return parseInt(document.getElementById(idCampo).value);
}

function restar(num1, num2){
    return num1-num2;
}

function restarNums (){
    var numero1 = parsearNums('idNum1');
    var numero2 = parsearNums('idNum2');
    document.getElementById('IdlabelResultado').innerHTML = 'Resultado' + restar(numero1,numero2);
}

function dividir(num1, num2){
    return num1/num2;
}

function dividirNums (){
    var numero1 = parsearNums('idNum1');
    var numero2 = parsearNums('idNum2');
    document.getElementById('IdlabelResultado').innerHTML = 'Resultado' + dividir(numero1,numero2);
}

function multiplicar(num1, num2){
    return num1*num2;
}

function multiplicarNums (){
    var numero1 = parsearNums('idNum1');
    var numero2 = parsearNums('idNum2');
    document.getElementById('IdlabelResultado').innerHTML = 'Resultado' + multiplicar(numero1,numero2);
}
