const form = document.querySelector('.quiz-form')
const viewScore = document.querySelector('.result')
const scores = document.querySelector('.score')
const buttonPlayAgain = document.querySelector('.play-again')

const correctAnswers = ['B', 'B', 'C', 'A', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0


    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value
    ]
    
    const checkAnswers = userAnswers.map((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 20
        }
    })

    scrollTo(0, 0)
    viewScore.classList.remove('d-none')
    let toFinalScore = 0 

    const timer = setInterval(() => {

        if(toFinalScore === score){
            clearInterval(timer)
            return
        }
    
        toFinalScore++
        scores.textContent = toFinalScore
        
    }, 50);    
})

buttonPlayAgain.addEventListener('click', () => {
    location.reload()
})