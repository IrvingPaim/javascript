let valores = [8, 1, 7, 4, 2, 9]

console.log(valores.indexOf(16))

/*for (let pos = 0; pos < valores.length; pos++) {
    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



