// exportar
function script3() {
  var qtde = Number.MAX_VALUE;
  var i = 0;
  var conteudo = "";
  while (i < qtde) {
    try {
      conteudo += document.querySelector("input[class='" + i + "']").value + ";<br>";
      i++;
    } catch (error) {
      // alert('quebrou!');
      break;
    }
  }
  newpopupWindow = window.open('', 'pagina', "width=400 height=400");
  newpopupWindow.document.write("");
  newpopupWindow.document.write(conteudo);
}

// limpar
function script2() {
  var qtde = Number.MAX_VALUE;
  var i = 0;
  while (i < qtde) {
    try {
      document.querySelector("input[class='" + i + "']").value = "";
      i++;
    } catch (error) {
      // alert('quebrou!');
      break;
    }
  }
}
// importar
function script1(conteudo) {
  var vetDiario = conteudo.split("<quebra>");
  var qtde = vetDiario.length;
  var i = 0;
  while (i < qtde) {
    try {
      // linha = vetDiario[i].split(";");
      // data = linha[0];
      // atividade = linha[1];
      document.querySelector("input[class='" + i + "']").value = vetDiario[i].replace(";", "");
      i++;
    } catch (error) {
      // alert('quebrou!');
      break;
    }
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
    })()
  });

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
    })()
  });


  // exportar
  document.querySelector("#btn3").addEventListener("click", function () {
    // var totalDeAulas = prompt("Quantas linhas da tabela deseja apagar?");
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script3/*,
          args: [totalDeAulas]*/
      });
    })()
  });

});   
