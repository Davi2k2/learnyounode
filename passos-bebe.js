let  resultado = 0

for (let i = 0; i < process.argv.length; i++) {
    
    if (i >= 2) {
        resultado = resultado + Number(process.argv[i])
        
    }
}
console.log(resultado)