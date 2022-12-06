var nome, n1, par, impar
nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
if (n1%2==0){
    alert(nome+"O número é par")
}
else{
    alert(nome+" o número é ímpar")
}