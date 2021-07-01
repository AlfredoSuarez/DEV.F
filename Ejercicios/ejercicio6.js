var num1 = prompt("Por favor, elija tres números");
var num2 = prompt("Por favor, elija el segundo número");
var num3 = prompt("Por favor, elija el tercer número");

if (num1 == num2 && num2==num3){
    console.log("los numeros son iguales");
}else if(num1>num2 && num1>num3){
    console.log(num1);
} else if(num2>num3 && num2>num1){
    console.log(num2);
} else if(num3>num1 && num3>num2) {
    console.log(num3);
}else{
    console.log("Por fvaor elija un número");
}
