function multiplicar(num1,num2){
    let resultado = num1 * num2
    if ((num1 == 0) || (num2 == 0)){
        return num1 + " * " + num2 + " = " + 0
    } else {
        return num1 + " * " + num2 + " = " + resultado
    }
};

//console.log(multiplicar(5,0));



module.exports = multiplicar