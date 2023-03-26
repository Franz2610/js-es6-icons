/**
 * Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
 */



/**
 * Ragionamento in italiano
 * Le milestone ci chiedono di visualizzare in una pag un box per ogni icona data dall'array con una proprietà color corrispondente aggiundengo una select.
 * Iniziamo a creare un index html con un header ed un main 
 * nel nostro script prenderemo l'array di ogg con un fa- (prefisso) 
 * per creare una i nb prefx family prefx name 
 * esistono 3 type, quindi 3 select 
 * Clelia ha costruito il suo template con uan funzione drawPage
 * const row = e prende la row dall'html con la querySelector
 * lascia la stringa vuota con la const html e row.innerhtml
 * usa un forEach con una arrow function 
 * e crea il template 
 * div class col 12 col-sm-6 col-md-4 col-lg-3 affinche se si restringe la pag le card si adattano quindi responsivo
 * div class card-body d-flex flex-column j-c-c a-i-c fs-3 py-4 style color ${value.color}
 * i prefx family prefx name  ovviamente con ${} così da prendercelo nel nostro array
 * funzioni usate da lei createOption(value, select)
 * filterIcons ed icon
 * iniziare creando una funzione per creare le icone
 * per creare una pg usare una cost per inserirle nel nostro html
 * creaiamo un ciclo for Each costruendo il nostro template
 * sulla base di quello scritto precedentemente creiamo il nostro div con le card per ciclarlo e creare tutte le nostre card
 * per filtrare la nostra select creiamo la funzione dove il presupposto iniziale è che il type dell'array è restituito da una scelta della select
 * oppure restituisce il tutto 'All'
 * ps è una sorta di esercizio fatto la mattina dell'orologio(ricordarselo)
 * creiamo una funzione per selezionare la scelta dell'icon grazie alla fuzione precedentemente creata
 * per ora abbiamo finito la richiesta il problema sostanziale giunge ora 
 * i bonus
 * cambiare i colori con colori randomici non ho capito quando devono cambiare 
 * perchè se dovessero cambiare rispetto all'array dato  potremmo prendere l'esempio fatto in classe della palla dove per esagerare abbiamo creato 3 funzioni. Vedere bene lunedi correzione bonus
 * per quanto riguarda il crare una select dinamica di sicuro si devono prendere i type dell'array 
 */

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blueviolet'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blueviolet'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blueviolet'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blueviolet'
    }
];

function drawPage (filteredIcons) {
    const row = document.querySelector('.row');
    row.innerHTML ='';
    let html = '';
    //creiamo il ciclo per creare le nostre card
    filteredIcons.forEach( (value )=> {
        //creiamo la costante del nostro template
        const template = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <div class="card-body d-flex flex-column justify-content-center align-items-center fs-3 py-4" style="color:${value.color}">
                    <i class="${value.prefix}${value.family} ${value.prefix}${value.name}"></i>
                    <span class="text-black">${value.name}</span>
                </div>
            </div>
        </div>
        `
        // restituiamo il valore alla variabile
        html += template;
    });

    // creaiamo le card nel nostro html
    row.innerHTML += html;
};

//creiamo la funzione per filtrare le nostre card
function filterIcons(selectValue) {
   const filteredIcons = icons.filter((value) =>{
    if (value.type === selectValue || selectValue === 'all'){
        return true;
    } else {
        return false;
    }
   });
    filteredIcons.forEach((value) => {
        drawPage(filteredIcons)
        console.log(value)
    });
};


//creiamo la selezione inerente alla select 
function selectChoose () {
    filterIcons(this.value)
}

const select = document.getElementById('select')
select.addEventListener('change', selectChoose)
filterIcons(select.value)