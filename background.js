function script2() {
  // limpar
}
function script1(conteudo) {
  // importar
  var vetDiario = conteudo.split("<quebra>");
  var qtde = vetDiario.length;
  var i = 0;
  while (i < qtde) {
    linha = vetDiario[i].split(";");
    if (linha.length != 1) {
    	etapa = linha[0];
	    data = linha[1];
    	atividade = linha[2];
	 	document.querySelector("input[class='"+i+"']").value = vetDiario[i];
	}
    i++;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // importar
  document.querySelector("#btn1").addEventListener("click", function () {
    var conteudo = document.querySelector("#conteudo").value.trim().replace(/[\r\n]+/gm, "<quebra>").trim();
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script1,
        args: [conteudo],
      });
    })()});
    
    // limpar
    document.querySelector("#btn2").addEventListener("click", function () {
      // var totalDeAulas = prompt("Quantas linhas da tabela deseja apagar?");
      (async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: script2/*,
          args: [totalDeAulas]*/
        });
      })()});	

    });   
