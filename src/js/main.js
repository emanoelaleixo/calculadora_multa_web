document.addEventListener("DOMContentLoaded", function() {
    const valorUnitario = document.getElementById("valorUnitario");
    const quantidade = document.getElementById("quantidade");
    const resultado = document.getElementById("resultado");
    const calcular = document.getElementById("calcular");
    const limpar = document.getElementById("limpar");

    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function limparCampos() {
        valorUnitario.value = "";
        quantidade.value = "";
        resultado.textContent = "";
    }

    function calcularResultado() {
        let valor = valorUnitario.value.replace(".", "").replace(",", ".");
        let qtd = parseInt(quantidade.value);

        if (!isNaN(valor) && !isNaN(qtd) && valor !== "" && qtd > 0) {
            let total = parseFloat(valor) * qtd;
            let dezPorCento = total * 0.10;
            resultado.textContent = formatarMoeda(dezPorCento);
        } else {
            resultado.textContent = "R$ 0,00";
        }
    }

    calcular.addEventListener("click", calcularResultado);
    limpar.addEventListener("click", limparCampos);
});