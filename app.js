const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const finalScore = document.querySelector('.final-score')
const buttonPlayAgain = document.querySelector('.play-again')

const correctAnswers = ['E', 'B', 'C', 'A', 'D']

let score = 0 

const getUsersAnswers = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })
    
    return userAnswers
}

const calculateUserScore = (userAnswers) => {
    userAnswers.map((answer, index) => {
        const isUserAnswersCorrect = answer === correctAnswers[index]
        if(isUserAnswersCorrect) {
            score += 20
        }
    })
}

const animateFinalScore = () => {   
    let counter = 0 
    const timer = setInterval(() => {
        
        if(counter === score){
            clearInterval(timer)
        }

        finalScore.textContent = `${counter++}`   
    
    }, 20);    
}

const showFinalScore = () => {
    scrollTo(0, 0)
    finalScoreContainer.classList.remove('d-none')
}

const reloadPage = () => {
    location.reload()
}

const formOnSubmit = event => {
    event.preventDefault()

    const userAnswers = getUsersAnswers()
    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
}

    

form.addEventListener('submit', formOnSubmit)
buttonPlayAgain.addEventListener('click', reloadPage)