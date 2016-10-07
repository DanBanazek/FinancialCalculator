$(document).ready(function () {
    $('#startVal').kendoNumericTextBox({
        format: "c",
        decimals: 3,
        step: 100,
        spinners: false
    });
    $('#intRate').kendoNumericTextBox({
        format: "p0",
        min: 0,
        max: 1,
        step: 0.025
    });
    $('#term').kendoNumericTextBox({
        step: .5
    });
    $('#calcReturn').kendoButton();
});