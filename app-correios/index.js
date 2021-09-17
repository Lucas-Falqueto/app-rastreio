const test = document.querySelector('#test');
const inputText = document.querySelector('#cod-ratreio');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {

    fetch(`http://localhost:3002/?rastreamento=${pegaCod(inputText)}`).then((res) => {
        return res.json();
    }).then(mostraDados).catch(e => {
        console.error(e);
    });


})

async function mostraDados(dados) {
    await dados.forEach(element => {
        test.innerHTML += `<br>Evento: ${element.event}<br>`;
        test.innerHTML += `<br>Local: ${element.location} ${element.message === '' ? '' : element.message}<br>`;
        test.innerHTML += `<br>Data: ${element.date}<br>`;
    });

}

function pegaCod(cod) {

    if (typeof cod.value === 'string' && cod.value !== '') {
        const valor = cod.value;
        return valor;
    } else {
        alert('Por Favor insira um código de rastreio');
        return;
    }
}