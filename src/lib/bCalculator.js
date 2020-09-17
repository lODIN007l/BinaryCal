let convertError = false;
let convertPrecision = 0;

function divideIntegers(one, base) {
    var ends = new Array();
    divide(one, base, ends);
    return ends;
}

function divide(one, base, ends) {
    ends[ends.length] = one % base;
    var res = Math.floor(one / base);
    if (res >= base)
        divide(res, base, ends);
    else
        ends[ends.length] = res;
}

/* Contabilizar las comas o puntos  */
function countPattern(str, pattern) {
    var pos = str.indexOf(pattern);
    for (var count = 0; pos != -1; count++)
        pos = str.indexOf(pattern, pos + pattern.length);
    return count;
}

/* funcion de conversion a decimal */
export function convertToDecimal(source, sourcebase) {

    var point = countPattern(source, '.');
    var comma = countPattern(source, ',');

    if ((point > 1 || comma > 1) || (point > 0 && comma > 0)) {
        convertError = true;
        // alert("No se puede convertir")
        return 0;
    }

    /* Hallar lugar punto y coma */
    var pointplace = source.length - 1;

    if (point > 0)
        pointplace = source.indexOf('.');
    else if (comma > 0)
        pointplace = source.indexOf(',');

    var power = pointplace + 1 - source.length;
    /* Hallar lugar punto y coma */

    var dec = 0;

    for (var i = source.length - 1; i >= 0; --i) {

        if (source.charAt(i) == '.' || source.charAt(i) == ',')
            continue;
        /* LIMITAR SOLO NUMEROS */
        var code = source.charCodeAt(i);
        if (code >= 58)
            code -= 55; // HEXADECIMAL 
        else if (code >= 48)
            code -= 48; // NUMEROS

        if (code >= sourcebase) {
            convertError = true;
            // alert("La conversion no se puede realizar en esta base.")
            break;
        }

        dec += code * Math.pow(sourcebase, power++);
    }

    return dec;
}

/*Funcion de conversion a distintas bases  */
export function convertOneToOther(source, sourcebase, targetbase, targetprecision) {

    var decresult = convertToDecimal(source, sourcebase);

    if (convertError)
        return "0";
    else {
        var scale = Math.pow(targetbase, targetprecision);
        var scaleddec = decresult * scale;
        var roundeddec = Math.round(scaleddec);
        convertPrecision = Math.abs(scaleddec - roundeddec) / scale;
        var ends = divideIntegers(roundeddec, targetbase);
        while (ends.length < targetprecision + 1)
            ends[ends.length] = 0;
        var result = "";
        for (var i = ends.length - 1; i >= 0; --i) {
            if (i == targetprecision - 1)
                result += ".";
            if (ends[i] < 10)
                result += String.fromCharCode(ends[i] + 48);
            else
                result += String.fromCharCode(ends[i] + 55);
        }
        return result;
    }
}


let n = 4 // Numnero de digitos // var n = __inp__["n"]===undefined?8:__inp__["n"];


/*Funciones de complemento */
function padZeros(num) {
    var res = num;
    for (var i = 0; i < n - num.length; ++i)
        res = "0" + res;
    return res;
}

export function calcC1C2(input) {
    n = 4
    input = input === undefined ? -12 : input;

    var upper = Math.pow(2, (n - 1)) - 1;
    var lower = -Math.pow(2, (n - 1));  

    while (input > upper || input < lower) {
        n = n * 2;
        var upper = Math.pow(2, (n - 1)) - 1;  // Math.pow(2, n) / 2 - 1;
        var lower = -Math.pow(2, (n - 1));     //-Math.pow(2, n) / 2;
    }

    let rang = "[" + lower + "," + upper + "]"

    if (input > upper || input < lower) {
        console.log("Overflow")
        let binario = "System Error"
        let com1 = "System Error"
        let com2 = "System Error"

        return { binario, com1, com2, rang }
    } else {
        if (input >= 0) {
            input = Math.abs(input);
            let binario = padZeros(input.toString(2))
            let com1 = padZeros(input.toString(2))
            let com2 = padZeros(input.toString(2))
            return { binario, com1, com2, rang }
        } else {
            input = Math.abs(input);
            var inv = (Math.pow(2, n) - 1) - input;
            var com = inv + 1;
            let binario = padZeros(input.toString(2))
            let com1 = padZeros(inv.toString(2))
            let com2 = padZeros(com.toString(2))
            return { binario, com1, com2, rang }
        }
    }
}

export default { convertToDecimal, convertOneToOther, calcC1C2 }