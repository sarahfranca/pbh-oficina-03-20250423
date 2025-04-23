function lerEntrada()
{
    document.getElementById("resp").innerHTML = "";        // Limpa o painel de resposta.
    var idade = document.getElementById("idade").value;    // Lê a idade.
    console.log(idade);

    if ( idade != "" && idade != undefined && idade != null )               // Apresenta a informação no painel de resposta.
    {
        document.getElementById("resp").innerHTML = `Idade informada: ${idade}`;
        votacao(idade);
    }
}

function votacao(idade)
{
    if (idade < 18)
    { document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa é menor de idade</div>"; }
    else
    { document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa é maior de idade</div>"; }
}