/* ---------------------------------------------
   Escribe una función que imprima todos
     los números naturales de 1 hasta n
---------------------------------------------*/
function rango(n){
    return .range(n);
}
rango(5);
/*---------------------------------------------
  Mostrar los primeros 10 dígitos de la
    serie Fibbonacci
---------------------------------------------*/
// MI PROPUESTA//
 
let y = []; //captura del digito de la secuencia Fibonacci

function fib(){
    let x=0; //el contador de iteraciones//
    while(x<=10){
        x+=1
    }
    y[0]=0;
    y[1]=1;
    y[x]=y[x-2] + y[x-1];
    console.log(y[i]);
}

/* Python
fibo=[0,1]
def fibo:
  where fibo.length(10)
    for i in fibo:
      fibo.append[(i-1)+(i-2)]
print(fibo)
*/
/*--------------------------------------------  
| Hacer una función que convierta de grados   |
|   centígrados a Farenheit                   |
----------------------------------------------*/
/* EN PYTHON ES EL SIGUIENTE CODIGO (CREADO EN CODECADEMY.COM):
    def f_to_c(f_temp):
	c_temp  = (f_temp - 32) * 5/9	
	return c_temp
f100_in_celsius = f_to_c(100)	

def c_to_f (c_temp):
	f_temp = (c_temp * (9/5)) + 32
	return f_temp	
c0_in_fahrenheit = c_to_f(0)

print("100F is " + str(f100_in_celsius) + " in Celsius")
print("0C is " + str(c0_in_fahrenheit) + " in Fahrenheit")*/

function f_to_c(f_temp){
  c_temp = (f_temp - 32) * 5/9;
  return c_temp
}

let f100Celcious = f_to_c(0);

function c_to_f(c_temp){
  f_temp = (c_temp * (9/5)) + 32;
  return f_temp
}

let c0Fahrenheit = c_to_f(0);

console.log('100F is ' + .strg(f100Celcious) + ' in Celsius');
console.log('0C is ' + .strg(c0Fahrenheit) + ' in Fahrenheit');