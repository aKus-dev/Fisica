const form = document.querySelector('.form');
const resultText = document.querySelector('#result-text');

form.addEventListener('submit', e => {
    e.preventDefault();

    const { circuit, type } = data;

    if (circuit === '1') {
        firstCircuit(type);
    }

})

function firstCircuit(type) {
    if (type === 'voltaje') {
        const resistencia = document.querySelector('#R').value;
        const intensidad = document.querySelector('#I').value;
        const voltaje = resistencia * intensidad;

        showResultText(voltaje.toFixed(2));
    } else if(type === 'resistencia') {
        const voltaje = document.querySelector('#V').value;
        const intensidad = document.querySelector('#I').value;
        const resistencia = voltaje / intensidad;

        showResultText(resistencia.toFixed(2));
    } else if(type === 'intensidad') {
        const voltaje = document.querySelector('#V').value;
        const resistencia = document.querySelector('#R').value;
        const intensidad = voltaje / resistencia;
        
        showResultText(intensidad.toFixed(2));
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
    Resultado al calcular <span class="yellow">${type}</span> 
    ha sido de: <span class="yellow">${resultado}</span> <span class="unity">${unity}</span>
    `;
}