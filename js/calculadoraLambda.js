const convertir =(idCampo)=>{
    console.log('converitr'+idCampo)
    return parseInt(document.getElementById(idCampo).value)
}

const sumar = (num1, num2)=> {
    return num1+num2;
}

const sumarNums=()=>{
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('IdlabelResultado').innerHTML='Resultado'+sumar(numero1,numero2);
}

const restar = (num1, num2)=> num1-num2;

const restarNums=()=>{
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('IdlabelResultado').innerHTML='Resultado'+restar(numero1,numero2);
}

const multiplicar = (num1, num2)=> {
    return num1*num2;
}

const multiplicarNums=()=>{
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('IdlabelResultado').innerHTML='Resultado'+multiplicar(numero1,numero2);
}

const dividir = (num1, num2)=> {
    return num1/num2;
}

const dividirNums=()=>{
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('IdlabelResultado').innerHTML='Resultado'+dividir(numero1,numero2);
}


const eliminarElemento=()=>{
    document.getElementById('elemento').innerHTML=" ";
    console.log(document.getElementById('idEliminar'))
    console.log('Test');
}

const insertarElemento=()=>{
    document.getElementById('elemento').innerHTML='<strong>Alerta</strong>';
}

const conceptosJs=()=>{
    //---- Declaracion de variables------
    //var -> no es comunmente utilizada
    //let -> 
    //const -> variable para almacenar constantes

    var variable1 = 'Andres';
    var variable2 = 1;
    let variable3 = 'Sebastian'
    let variable4 = 2;
    const variable5 = 'Benavides'
    const variable6 = 3;

    console.log(variable1);


    //--- Declaracion de arreglos ---
    const diasSemana = ['Lunes', 'Martes', 'Miércoles'];
    console.log(diasSemana);
    console.log(diasSemana[2]);
    diasSemana.push('Jueves');
    diasSemana.push('Viernes');
    
    const diasFinSeman = ['Sabado', 'Domingo']
    const diasCompleto =diasSemana.concat(diasFinSeman);
    console.log(diasCompleto)

    for(const dia of diasCompleto){
        console.log(dia);
    }

    //--- Declaracion de Objetos ---

    const persona = {
        nombre: "Andres",
        apellido: "Benavides",
        edad: 24,
        ciudad: "Quito",
    }

    console.log(persona);


    const persona2 = {
        nombre: "Sebastian",
        apellido: "Chango",
        edad: 30,
        ciudad: "Guayakill",
        vehiculo:{
            marca: "Toyota",
            modelo:"Raptor",
            anio: 2020
        }
    }

    console.log(persona2);

    const varNombre = ['Pepe','Juan'];
    varNombre[0]=['Mario'];
    console.log(varNombre);


    //--- Desestructuracion de Arreglos ---
    const dias2 = ['Lunes', 'Martes','Miercoles', 'Jueves', 'Viernes'];
    const [dia1, dia2,dia3,dia4] = dias2;
    console.log(dia2);
    console.log(dia4);    

    const [d1, d2,d3,d4, d5] = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes'];
    console.log(d1),
    console.log(d5);

    const persona3 = {
        nombre: "Sebastian",
        apellido: "Chango",
        edad: 30,
        ciudad: "Guayakill",
        
    }
    const {nombre,ciudad}= persona3;
    console.log(nombre);
    console.log(ciudad);


    const persona4 = {
        nombre: "Sebastian",
        apellido: "Chango",
        edad: 30,
        ciudad: "Guayakill",
        vehiculo:{
            marca: "Toyota",
            modelo:"Raptor",
            anio: 2020
        }
    }
    const {vehiculo}=persona4;
    console.log(persona4.nombre);
    console.log(persona4.vehiculo.marca);

}