/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
*/

const START_BUTTON_EL = document.getElementById('start')
const FIELD_GAME_EL = document.querySelector('.col-12.text-center')
const TIMER_EL = document.getElementById('timer')
const RANDOM_NUMBER = []

START_BUTTON_EL.addEventListener('click', function(){

    while(RANDOM_NUMBER.length < 5) {
        const generator_of_number = Math.floor(Math.random() * 100)
        if(!RANDOM_NUMBER.includes(generator_of_number)) {
            RANDOM_NUMBER.push(generator_of_number)
            const div_number_el = document.createElement('div')
            div_number_el.classList.add('col', 'text-center')
            div_number_el.innerHTML = `${generator_of_number}`
            FIELD_GAME_EL.insertAdjacentElement('afterend', div_number_el)
        }
    }

    setTimeout(myFunction, 30000)

    function myFunction() {

        TIMER_EL.innerHTML= 'TEMPO SCADUTO!!'
    }
    
    
})