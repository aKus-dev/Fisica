const btnsCalculate = document.querySelectorAll('button');

// Contenedores
const selectContainer = document.querySelector('#select-container');
const circuitContainer = document.querySelector('#circuit-container');
const formContainer = document.querySelector('#form-container');
const resultContainer = document.querySelector('#result-container');

const datosSolicitados = document.querySelector('#datos-solicitados');

// Botones
const [voltaje, resistencia, intensidad, circuito1, circuito2, circuito3, circuito4, calculate] = btnsCalculate;

// Formularios
const c1 = document.querySelector('#form-c1');

// Datos de que circuito y que valor calcular
const data = {
    type: '',
    circuit: ''
}

// Que calcular
voltaje.addEventListener('click', getType);
resistencia.addEventListener('click', getType);
intensidad.addEventListener('click', getType);

// Que circuito
circuito1.addEventListener('click', getCircuit);
circuito2.addEventListener('click', getCircuit);
circuito3.addEventListener('click', getCircuit);
circuito4.addEventListener('click', getCircuit);

// Botones de calculo


// Guarda el tipo de valor a calcular
function getType(e) {
    data.type = e.target.dataset.type;
    hideSelect();
    showCircuit();
}

// Esconde el contenedor de seleccionar valor a calcular
function hideSelect() {
    // Agrego la animacion de faded
    selectContainer.classList.add('container-faded');

    setInterval(() => {
        selectContainer.classList.add('display-none');
    }, 700)

}

// Muestra el contenedor de los circuitos a elegir
function showCircuit() {
    setTimeout(() => {
        // Agrego la animacion de faded
        circuitContainer.classList.remove('display-none');

        setInterval(() => {
            datosSolicitados.innerHTML = `Seleccione los datos solicitados para calcular <span class="yellow">${data.type}</span>`
            circuitContainer.classList.remove('container-faded-reverse');
        }, 100)
    }, 700)

}

// Guarda el numero del circuito a calcular
function getCircuit(e) {
    data.circuit = e.target.dataset.circuit;
    hideCircuit()
    showForm();

}

function hideCircuit() {
    // Agrego la animacion de faded
    circuitContainer.classList.add('container-faded');

    setInterval(() => {
        circuitContainer.classList.add('display-none');
    }, 700)

}

function showForm() {

    const { circuit, type } = data;
    const imgResult = document.querySelector('#img-result');

    // Pongo la imagen en base a que circuito eligió
    switch (circuit) {
        case '1':
            imgResult.src = './images/circuito.svg';
            break;
        case '2':
            imgResult.src = './images/circuito2.svg';
            break;
        case '3':
            imgResult.src = './images/circuito3.svg';
            break;
        case '4':
            imgResult.src = './images/circuito4.svg';
            break;
    }

    createInputs(circuit, type);

    setTimeout(() => {
        // Agrego la animacion de faded
        formContainer.classList.remove('display-none');

        setInterval(() => {
            formContainer.classList.remove('container-faded-reverse');
        }, 100)
    }, 700)

}

function createInputs(circuit, type) {

    const inputContainer = document.querySelector('.form__input-container');

    if (circuit === '1' && type === 'voltaje') {
        const input1 = document.createElement('input');
        input1.classList.add('form__input');
        input1.placeholder = 'Valor de la intensidad';
        input1.type = 'number'
        input1.id = 'I';
        input1.step = 'any';
        input1.required = true;

        const input2 = document.createElement('input');
        input2.classList.add('form__input');
        input2.placeholder = 'Valor de la resistencia';
        input2.type = 'number'
        input2.id = 'R';
        input2.step = 'any';
        input2.required = true;

        inputContainer.appendChild(input1);
        inputContainer.appendChild(input2);

    } else if (circuit === '1' && type === 'resistencia') {
        const input1 = document.createElement('input');
        input1.classList.add('form__input');
        input1.placeholder = 'Valor del voltaje';
        input1.type = 'number'
        input1.id = 'V';
        input1.step = 'any';
        input1.required = true;
    
        const input2 = document.createElement('input');
        input2.classList.add('form__input');
        input2.placeholder = 'Valor de la intensidad';
        input2.type = 'number'
        input2.id = 'I';
        input2.step = 'any';
        input2.required = true;

        inputContainer.appendChild(input1);
        inputContainer.appendChild(input2);

    } else if (circuit === '1' && type === 'intensidad') {
        const input1 = document.createElement('input');
        input1.classList.add('form__input');
        input1.placeholder = 'Valor del voltaje';
        input1.type = 'number'
        input1.id = 'V';
        input1.step = 'any';
        input1.required = true;

        const input2 = document.createElement('input');
        input2.classList.add('form__input');
        input2.placeholder = 'Valor de la resistencia';
        input2.type = 'number'
        input2.id = 'R';
        input2.step = 'any';
        input2.required = true;

        inputContainer.appendChild(input1);
        inputContainer.appendChild(input2);

    } else if (circuit === '2' && type === 'voltaje') {

        const input1 = document.createElement('input');
        input1.classList.add('form__input');
        input1.placeholder = 'Valor de R1';
        input1.type = 'number'
        input1.id = 'R1';
        input1.step = 'any';
        input1.required = true;

        const input2 = document.createElement('input');
        input2.classList.add('form__input');
        input2.placeholder = 'Intensidad en R1';
        input2.type = 'number'
        input2.id = 'I1';
        input2.step = 'any';
        input2.required = true;


        const input3 = document.createElement('input');
        input3.classList.add('form__input');
        input3.placeholder = 'Valor de R2';
        input3.type = 'number'
        input3.id = 'R2';
        input3.step = 'any';
        input3.required = true;

        const input4 = document.createElement('input');
        input4.classList.add('form__input');
        input4.placeholder = 'Intensidad en R2';
        input4.type = 'number'
        input4.id = 'I2';
        input4.step = 'any';
        input4.required = true;


        inputContainer.appendChild(input1);
        inputContainer.appendChild(input2);
        inputContainer.appendChild(input3);
        inputContainer.appendChild(input4);
    } else if (circuit === '2' && type === 'resistencia') {

        const input1 = document.createElement('input');
        input1.classList.add('form__input');
        input1.placeholder = 'Voltaje en R1';
        input1.type = 'number'
        input1.id = 'V1';
        input1.step = 'any';
        input1.required = true;

        const input2 = document.createElement('input');
        input2.classList.add('form__input');
        input2.placeholder = 'Intensidad en R1';
        input2.type = 'number'
        input2.id = 'I1';
        input2.step = 'any';
        input2.required = true;


        const input3 = document.createElement('input');
        input3.classList.add('form__input');
        input3.placeholder = 'Voltaje en R2';
        input3.type = 'number'
        input3.id = 'V2';
        input3.step = 'any';
        input3.required = true;

        const input4 = document.createElement('input');
        input4.classList.add('form__input');
        input4.placeholder = 'Intensidad en R2';
        input4.type = 'number'
        input4.id = 'I2';
        input4.step = 'any';
        input4.required = true;


        inputContainer.appendChild(input1);
        inputContainer.appendChild(input2);
        inputContainer.appendChild(input3);
        inputContainer.appendChild(input4);
    } else if (circuit === '2' && type === 'intensidad') {

        const input1 = document.createElement('input');
        input1.classList.add('form__input');
        input1.placeholder = 'Valor de R1';
        input1.type = 'number'
        input1.id = 'R1';
        input1.step = 'any';
        input1.required = true;

        const input2 = document.createElement('input');
        input2.classList.add('form__input');
        input2.placeholder = 'Voltaje en R1';
        input2.type = 'number'
        input2.id = 'V1';
        input2.step = 'any';
        input2.required = true;


        const input3 = document.createElement('input');
        input3.classList.add('form__input');
        input3.placeholder = 'Valor de R2';
        input3.type = 'number'
        input3.id = 'R2';
        input3.step = 'any';
        input3.required = true;

        const input4 = document.createElement('input');
        input4.classList.add('form__input');
        input4.placeholder = 'Voltaje en R2';
        input4.type = 'number'
        input4.id = 'V2';
        input4.step = 'any';
        input4.required = true;


        inputContainer.appendChild(input1);
        inputContainer.appendChild(input2);
        inputContainer.appendChild(input3);
        inputContainer.appendChild(input4);
    }
}
