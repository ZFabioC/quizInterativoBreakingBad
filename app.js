const form = document.querySelector('.quiz-form')

const correctAnswers = ['A', 'B', 'C', 'C', 'B']

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

    console.log(score)
    
    
})