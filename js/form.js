const form = document.querySelector('.form');
const resultText = document.querySelector('#result-text');

form.addEventListener('submit', e => {
    e.preventDefault();

    const { circuit, type } = data;

    if (circuit === '1') {
        firstCircuit(type);
    } else if(circuit === '2') {
        secondCircuit(type);
    }

})

function firstCircuit(type) {
    if (type === 'voltaje') {
        const resistencia = document.querySelector('#R').value;
        const intensidad = document.querySelector('#I').value;
        const voltaje = resistencia * intensidad;

        if (resistencia && intensidad) {
            showResultText(voltaje.toFixed(2));
            hideForm();
            showResult();
        }


    } else if (type === 'resistencia') {
        const voltaje = document.querySelector('#V').value;
        const intensidad = document.querySelector('#I').value;
        const resistencia = voltaje / intensidad;

        if (resistencia && intensidad) {
            showResultText(resistencia.toFixed(2));
            hideForm();
            showResult();
        }

    } else if (type === 'intensidad') {
        const voltaje = document.querySelector('#V').value;
        const resistencia = document.querySelector('#R').value;
        const intensidad = voltaje / resistencia;

        if (resistencia && intensidad) {
            showResultText(intensidad.toFixed(2));
            hideForm();
            showResult();
        }

    }
}

function secondCircuit(type) {
    if (type === 'voltaje') {
        const R1 = document.querySelector('#R1').value;
        const I1 = document.querySelector('#I1').value;
        const R2 = document.querySelector('#R2').value;
        const I2 = document.querySelector('#I2').value;

        const VR1 = R1 * I1;
        const VR2 = R2 * I2;
        const voltaje = VR1 + VR2;

        if (R1 && I1 && R2 && I2) {
            showResultText(voltaje.toFixed(2));
            hideForm();
            showResult();
        }


    } else if (type === 'resistencia') {
        const V1 = document.querySelector('#V1').value;
        const I1 = document.querySelector('#I1').value;
        const V2 = document.querySelector('#V2').value;
        const I2 = document.querySelector('#I2').value;

        const R1 = V1 / I1;
        const R2 = V2 / I2;
        const resistencia = R1 + R2;

        if (V1 && I1 && V2 && I2) {
            showResultText(resistencia.toFixed(2));
            hideForm();
            showResult();
        }

    } else if (type === 'intensidad') {

        const R1 = document.querySelector('#R1').value;
        const V1 = document.querySelector('#V1').value;
        const R2 = document.querySelector('#R2').value;
        const V2 = document.querySelector('#V2').value;

        const I1 = V1 / R1;
        const I2 = V2 / R2;
        const intensidad = I1 + I2;

        if (V1 && I1 && V2 && I2) {
            showResultText(intensidad.toFixed(2));
            hideForm();
            showResult();
        }

    }
}

function showResultText(resultado) {

    const { type } = data;

    // Establezco el simbolo de la unidad 
    switch (type) {
        case 'voltaje':
            unity = 'V';
            break;
        case 'resistencia':
            unity = 'Ω';
            break;
        case 'intensidad':
            unity = 'A';
            break;
    }

    resultText.innerHTML = `
    Resultado al calcular <span class="yellow">${type} total</span>
    ha sido de: <span class="yellow">${resultado}</span> <span class="unity">${unity}</span>
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
