document.getElementById("calcular").addEventListener("click", function () {
    // Obtener los valores de los campos de entrada
    var capital = parseFloat(document.getElementById("capital").value) || 0;
    var interes = parseFloat(document.getElementById("interes").value) || 0;
    var plazo = parseInt(document.getElementById("plazo").value) || 0;

    // Calcular la tasa de interés mensual
    var tasaMensual = interes / 100 / 12;

    // Calcular la cuota mensual
    var cuotaMensual = (capital * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));

    // Calcular el total de interés pagado
    var totalInteres = cuotaMensual * plazo - capital;

    // Actualizar el contenido del div de alerta con los resultados
    document.getElementById("resultadosAlert").innerHTML =
        '<div class="alert alert-info" role="alert">' +
        'Cuota Mensual Estimada: DOP ' + cuotaMensual.toFixed(2) +
        '<br>Total de Interés Pagado: DOP ' + totalInteres.toFixed(2) +
        '</div>';
});
