function numeroMayor(num1, num2, num3, num4) {
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num4 > mayor) {
        mayor = num4;
    }
    return mayor;
  }

const n1 = numeroMayor(6, 21, 13, 14);
console.log("El número mayor es:", n1);

function numeroMenor(num1, num2, num3) {
    let menor = num1;
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }
    return menor;
  }

const n2 = numeroMenor(6, 21, 13);
console.log("El número menor es:", n2);

function esParOImpar(numero) {
    if (numero % 2 == 0) {
      return numero + " es un número par";
    }
    else {
      return numero + " es un número impar";
    }
  }

console.log(esParOImpar(10));
console.log(esParOImpar(7));
console.log(esParOImpar(14));


