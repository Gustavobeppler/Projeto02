document.getElementById('financiamento-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const valor = parseFloat(document.getElementById('valor').value);
  const taxa = parseFloat(document.getElementById('taxa').value) / 100;
  const periodo = parseInt(document.getElementById('periodo').value);

  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(valor) || isNaN(taxa) || isNaN(periodo) || valor <= 0 || taxa <= 0 || periodo <= 0) {
    resultadoDiv.textContent = 'Por favor, insira valores válidos.';
    resultadoDiv.style.color = 'red';
    return;
  }

  const prestacao = calcularPrestacaoPrice(valor, taxa, periodo);
  resultadoDiv.textContent = `Valor da Prestação: R$ ${prestacao.toFixed(2)}`;
  resultadoDiv.style.color = 'green';
});

function calcularPrestacaoPrice(valor, taxa, periodo) {
  const fator = Math.pow(1 + taxa, periodo);
  return valor * (taxa * fator) / (fator - 1);
}
