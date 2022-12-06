var nome, n1, n2
nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt("Qual sua idade?"))

    alert("Bem vindo "+nome+"! Você tem "+n1+" anos.")

if (n1<18){
    alert("Você é menor de idade")
}

else{
    n2=parseFloat(prompt(nome+" Qual seu CPF? "))
    alert(nome+" CPF: "+n2)
}
 