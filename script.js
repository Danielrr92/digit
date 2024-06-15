let totaleErrori = 0;
let testoDigitato;
let testoCompleto;

async function setText() {
    testoDigitato = "";
    let scroller = document.getElementById('scroller');
    try {
        const response = await fetch('testo.txt');
        if (!response.ok) {
            throw new Error('Errore. File non trovato ' + response.statusText);
        }
        testoCompleto = await response.text();
        testoCompleto = testoCompleto;
    } catch (error) {
        console.error('Errore durante la lettura del file:', error);
    }

    document.getElementById('testo').innerHTML = testoCompleto.substring(0, 30);
    document.getElementById('testoMancante').innerHTML = testoCompleto.substring(30);
    document.addEventListener('keydown', (e) => checkLetteraDigitata(e))
}


setText();





function checkLetteraDigitata(e) {
    let prossimaLettera = testoCompleto.substring(testoDigitato.length, testoDigitato.length + 1);;
    // if (testoDigitato == "") {
    //     prossimaLettera = testoCompleto.substring(0, 1)
    // } else {
    // prossimaLettera = testoCompleto.substring(testoDigitato.length, testoDigitato.length + 1);
    // }

    if (e.key == prossimaLettera) {
        testoDigitato += e.key;
        let nuovoTesto = testoCompleto.substring(testoDigitato.length, testoDigitato.length + 30);
        let nuovoTestoMancante = testoCompleto.substring(testoDigitato.length + 1 + 30);
        document.getElementById('testo').innerHTML = nuovoTesto;
        document.getElementById('testoMancante').innerHTML = nuovoTestoMancante;
        console.log("ho premuto la giusta lettera;")
    } else {
        totaleErrori++;
    }
    if (testoDigitato.length == testoCompleto.length) {
        document.getElementById('errori').innerHTML = 'Hai commesso un totale di: ' + totaleErrori + ' errori.';
    }
}