var diario = "teste0;teste1;";
var vetDiario = diario.split(";");
var i = 0;
while (i < vetDiario.length) {
	document.querySelector("input[class='"+i+"']").value = vetDiario[i];
	i++;
}

