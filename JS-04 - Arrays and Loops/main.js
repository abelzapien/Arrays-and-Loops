
console.log("----------------Ejercicio #1---------------------")
console.log("****************Parte #1*********************")
let nombresFila = ["Sofía", "David", "Juan"];
console.log(nombresFila);

console.log("****************Parte #2*********************")
nombresFila.push("Sara", "Augustin");
console.log(nombresFila);
nombresFila.shift();
console.log(nombresFila);

console.log("****************Parte #3*********************")
nombresFila.splice(1, 0, "Renata")
console.log(nombresFila);
nombresFila.push("Elena");
console.log(nombresFila);

console.log("----------------Ejercicio #2---------------------")
/*let a = "";
for(num=[0];num < 5; num++){
    console.log(a += " *")
}*/

let a;
let max=6;
for(num=0;num <= max; num++){
    a = "";
    for(numa=0;numa < num; numa++){
    a += " *";
    }
    console.log(a);
}

console.log("----------------Ejercicio #3---------------------")
console.log("****************Parte #1*********************")
let xValue = 5;
while (xValue >= 0) {
    console.log(xValue);
    xValue -= .5;  
}

//Número impar = 2 · n − 1
console.log("****************Parte #2*********************")
xValue = 1;
while (xValue <= 50) {
    console.log(2*xValue-1);
    xValue ++;  
}

console.log("****************Parte #3*********************")
xValue = 10;
num = 1;
while (num <= xValue) {
    console.log([num]);
    num ++;  
}

console.log("****************Parte #4*********************")
xValue = 5;
num = 0;
let numer = 0;
while (0 < xValue) {
    console.log(numer += xValue);
    num ++;  
    xValue --;
    
}