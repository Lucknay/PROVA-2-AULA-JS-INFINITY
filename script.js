const nome = prompt("Digite o seu nome:")
const altura = prompt("Digite sua altura em centímetros:")
const peso= prompt("Digite o seu peso:")

const imc= peso / (altura * altura) 

if (imc <16){
alert(`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está BAIXO PESO MUITO GRAVE`)

}
else if( imc >= 16 && imc <=16.99) {
    alert(`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está BAIXO PESO GRAVE`)
}
else if(imc >=17 && imc <=18.49 ){
    alert(`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está BAIXO PESO `)
}
else if (  imc >=18.50 && imc <=24.99  ){
    alert(`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está  PESO NORMAL`)
}
else if(imc >=25 && imc <=29.99 ){
    alert(`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está SOBREPESO`)
}
else if(imc >=30 && imc <= 34.99){
    alert(`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está OBESIDADE GRAU I`)
}
else if(imc >=35 &&  imc <=39.99 ){
    alert (`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está OBESIDADE GRAU II `)
}
else if(imc >=40)
    alert(`Olá, ${nome}, seu IMC é ${imc.toFixed(1)} e você está OBESIDADE GRAU III`)








console.log(`Olá ${nome}, seu IMC é ${imc .toFixed(1)}! `)

