const form = document.querySelector('.form');
const resultText = document.querySelector('#result-text');

form.addEventListener('submit', e => {
    e.preventDefault();

    const { circuit } = data;

    if (circuit === '1') {
        firstCircuit();
    } else if (circuit === '2') {
        secondCircuit();
    } else if (circuit === '3') {
        thirdCircuit();
    } else if (circuit === '4') {
        fourthCircuit();
    }

})

function firstCircuit() {
    const voltaje = parseFloat(document.querySelector('#V').value);
    const resistencia = parseFloat(document.querySelector('#R').value);

    const intensidad = voltaje / resistencia;

    if (voltaje && resistencia) {
        showResultText(intensidad.toFixed(2));
        hideForm();
        showResult();
    }
}

function secondCircuit() {

    const V = parseFloat(document.querySelector('#V').value);
    const R1 = parseFloat(document.querySelector('#R1').value);
    const R2 = parseFloat(document.querySelector('#R2').value);

    const i1 = V / R1;
    const i2 = V / R2;

    // req
    const r1Formula = Math.pow(R1, -1);
    const r2Formula = Math.pow(R2, -1);

    const sum = r1Formula + r2Formula;
    const req = Math.pow(sum, -1)


    if (V && R1 && R2) {
        showResultText2(i1.toFixed(2), i2.toFixed(2), req.toFixed(2));
        hideForm();
        showResult();
    }
}

function thirdCircuit() {

    const V = parseFloat(document.querySelector('#V').value);
    const R1 = parseFloat(document.querySelector('#R1').value);
    const R2 = parseFloat(document.querySelector('#R2').value);
    const R3 = parseFloat(document.querySelector('#R2').value);

    const i1 = V / R1;
    const i2 = V / R2;
    const i3 = V / R3;

    // req
    const r1Formula = Math.pow(R1, -1);
    const r2Formula = Math.pow(R2, -1);
    const r3Formula = Math.pow(R3, -1);

    const sum = r1Formula + r2Formula + r3Formula;
    const req = Math.pow(sum, -1)

    if (V && R1 && R2 && R3) {
        showResultText3(i1.toFixed(2), i2.toFixed(2), i3.toFixed(2), req.toFixed(2));
        hideForm();
        showResult();
    }
}

function fourthCircuit() {

    const V = parseFloat(document.querySelector('#V').value);
    const R1 = parseFloat(document.querySelector('#R1').value);
    const R2 = parseFloat(document.querySelector('#R2').value);
    const R3 = parseFloat(document.querySelector('#R2').value);

    const i1 = V / R1;
    const i2 = V / R2;
    const i3 = V / R3;

    // req
    const R1_R2 = R1 + R2;

    const r1Formula = Math.pow(R1_R2, -1);
    const r3Formula = Math.pow(R3, -1);

    const sum = r1Formula + r3Formula;
    const req = Math.pow(sum, -1)

    if (V && R1 && R2) {
        showResultText3(i1.toFixed(2), i2.toFixed(2), i3.toFixed(2), req.toFixed(2));
        hideForm();
        showResult();
    }
}

function showResultText(resultado) {

    resultText.innerHTML = `
    Resultado al calcular <span class="yellow">intensidad total</span>
    ha sido de: <span class="yellow">${resultado}</span><span class="unity">A</span>
    `;
}

function showResultText2(i1, i2, req = null) {

    resultText.innerHTML = `
    <div>
        <p>Valor <span class="yellow">intensidad 1</span>: ${i1}A</p>
        <p>Valor <span class="yellow">intensidad 2</span>: ${i2}A</p>
        <p>Valor <span class="yellow">resistencia equivalente</span>: ${req}Ω</p>
    </div>
    `;
}

function showResultText3(i1, i2, i3, req = null) {

    resultText.innerHTML = `
    <div>
        <p>Valor <span class="yellow">intensidad 1</span>: ${i1}A</p>
        <p>Valor <span class="yellow">intensidad 2</span>: ${i2}A</p>
        <p>Valor <span class="yellow">intensidad 3</span>: ${i3}A</p>
        <p>Valor <span class="yellow">resistencia equivalente</span>: ${req}Ω</p>
    </div>
    `;
}



function hideForm() {
    // Agrego la animacion de faded
    formContainer.classList.add('container-faded');

    setInterval(() => {
        formContainer.classList.add('display-none');
    }, 700)
}


function showResult() {
    setTimeout(() => {
        // Agrego la animacion de faded
        resultContainer.classList.remove('display-none');

        setInterval(() => {
            resultContainer.classList.remove('container-faded-reverse');
        }, 100)
    }, 700)

}
