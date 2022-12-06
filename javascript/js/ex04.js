var nome, n1, n2, soma
nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
n2=parseFloat(prompt(nome+" digite outro valor: "))
subtracao=n1-n2
multiplicacao=n1*n2
divisao=n1/n2
if (n2==0){
    alert("A divisão não pode ser efetuada")
}
else{
    alert(nome+" a divisão é "+divisao)
}

alert(nome+" a subtração é "+subtracao)
alert(nome+" a multiplicação é "+multiplicacao)