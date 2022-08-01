function script2() {
  // limpar
  //var vetDiario = conteudo.split("<quebra>");
  //var qtde = vetDiario.length;
	var qtde = 10;
  var i = 0;
  while (i < qtde) {
   // linha = vetDiario[i].split(";");
    //if (linha.length != 1) {
    	//etapa = linha[0];
	    //data = linha[1];
    	//atividade = linha[2];
	 	document.querySelector("input[class='"+i+"']").value = ""; 
	//}
    i++;
  }
}
function script1(conteudo) {
  // importar	
/*
1;21/02/2022;- introdução à disciplina de B.D - Como funcionará a disciplina: avaliações, atendimento, work-flow de trabalho, ava e etc. - Plano de ensino - Conceitos básicos de modelagem conceitual: entidade, relacionamento e atributos (chave, simples, composto, multivalorado);
1;21/02/2022;- introdução à disciplina de B.D - Como funcionará a disciplina: avaliações, atendimento, work-flow de trabalho, ava e etc. - Plano de ensino - Conceitos básicos de modelagem conceitual: entidade, relacionamento e atributos (chave, simples, composto, multivalorado);
1;21/02/2022;- introdução à disciplina de B.D - Como funcionará a disciplina: avaliações, atendimento, work-flow de trabalho, ava e etc. - Plano de ensino - Conceitos básicos de modelagem conceitual: entidade, relacionamento e atributos (chave, simples, composto, multivalorado);
1;21/02/2022;- introdução à disciplina de B.D - Como funcionará a disciplina: avaliações, atendimento, work-flow de trabalho, ava e etc. - Plano de ensino - Conceitos básicos de modelagem conceitual: entidade, relacionamento e atributos (chave, simples, composto, multivalorado);
1;21/02/2022;- introdução à disciplina de B.D - Como funcionará a disciplina: avaliações, atendimento, work-flow de trabalho, ava e etc. - Plano de ensino - Conceitos básicos de modelagem conceitual: entidade, relacionamento e atributos (chave, simples, composto, multivalorado);
1;23/02/2022;- herança - cardinalidade - entidade fraca - exercícios;
1;23/02/2022;- herança - cardinalidade - entidade fraca - exercícios;
1;02/03/2022;- Exercícios 1 e 3 - Lista 1;
1;02/03/2022;- Exercícios 1 e 3 - Lista 1;
*/
  var vetDiario = conteudo.split("<quebra>");
  var qtde = vetDiario.length;
  var i = 0;
  while (i < qtde) {
    linha = vetDiario[i].split(";");
    if (linha.length != 1) {
    	etapa = linha[0];
	    data = linha[1];
    	atividade = linha[2];
	 	document.querySelector("input[class='"+i+"']").value = atividade; 
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
