/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
*/

const START_BUTTON_EL = document.getElementById('start')
const SEND_BUTTON_EL = document.getElementById('send')
const FORM_EL = document.getElementById('campo-invio')
const FIELD_GAME_EL = document.querySelector('.col-12.text-center')
const TIMER_EL = document.getElementById('timer')
const RANDOM_NUMBER = []
const USER_NUMBER = []
let PUNTEGGIO = 0


START_BUTTON_EL.addEventListener('click', function(){

    let div_number_el = [];

    while(RANDOM_NUMBER.length < 5) {
        const generator_of_number = Math.floor(Math.random() * 100)
        if(!RANDOM_NUMBER.includes(generator_of_number)) {
            RANDOM_NUMBER.push(generator_of_number)

            const item_div_number =  document.createElement('div')
            item_div_number.classList.add('col', 'text-center')
            item_div_number.innerHTML = `${generator_of_number}`

            div_number_el.push(item_div_number)

            FIELD_GAME_EL.insertAdjacentElement('afterend', item_div_number)
        }
    }

    setTimeout(tempo_scaduto, 3000)

    function tempo_scaduto() {
        for(let i = 0; i < 5; i++) {
            div_number_el[i].innerHTML = ''
        }
        TIMER_EL.innerHTML= 'TEMPO SCADUTO!! <br> ora scrivi un numero alla volta ed invia'

        FORM_EL.classList.remove('d-none')        
    }   
    
})

SEND_BUTTON_EL.addEventListener('click', function (event) {
    event.preventDefault()

    const user_submit = parseInt(document.getElementById('userNumber').value)
    console.log(user_submit);
    if(!USER_NUMBER.includes(user_submit)) {

        USER_NUMBER.push(user_submit)
    }
    FORM_EL.reset()
    

    if(USER_NUMBER.length == 5)  {

        let i = 0
        while( i < 5 ) {

            if(RANDOM_NUMBER.includes(USER_NUMBER[i])) {
                PUNTEGGIO += 1;
            }
            i++
        }
        
        FORM_EL.insertAdjacentHTML('afterend', `ti sei ricordato ${PUNTEGGIO} numeri su 5`)
    
    }
})