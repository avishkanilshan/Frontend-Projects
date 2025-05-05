const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")

const weightInput = document.getElementById("weightInput")
const heightInput = document.getElementById("heightInput")
const resultBmiScore = document.getElementById("resultBmiScore")
const resultBmiCategory = document.getElementById("resultBmiCategory")
const bmiIndicator = document.getElementById("bmiIndicator")


calculateButton.addEventListener('click', ()=>{
  calculateBmiScore()
})

resetButton.addEventListener('click', ()=>{
  reset()
})
//function for calculate and show bmi score
function calculateBmiScore() {
  const weight = parseFloat(weightInput.value)
  const height = parseFloat(heightInput.value) / 100

  if(weight>0 && height > 0){
    const bmiScore = (weight / (height * height)).toFixed(1)
    resultBmiScore.textContent = bmiScore
    showResultBmiCategory(bmiScore)
    showBmiIndicator(bmiScore)
  }else{
    alert("Please enter valid weight and height")
  }
}

function showResultBmiCategory(bmiScore){
  console.log(bmiScore)
}

function showResultBmiCategory(bmiScore){
  if(bmiScore < 18.5){
    resultBmiScore.style.color = '#0000FF'
    resultBmiCategory.textContent = 'Underweight'
  }else if(bmiScore >= 18.5 && bmiScore <= 24.9 ){
    resultBmiScore.style.color = '#008000'
    resultBmiCategory.textContent = 'Normal'
  }else if(bmiScore >= 25 && bmiScore <= 29.9 ){
    resultBmiScore.style.color = '#FFA500'
    resultBmiCategory.textContent = 'Overweight'
  }else{
    resultBmiScore.style.color = '#FF0000'
    resultBmiCategory.textContent = 'Obsedian'
  }
}

function showBmiIndicator(bmiScore){
  let firstScoreRange, lastScoreRange
  let firstPresentRange, lastPresentRange

  if(bmiScore < 18.5){
    firstScoreRange = 0
    lastScoreRange = 18.49

    firstPresentRange = 0 
    lastPresentRange = 25
  }else if(bmiScore >= 18.5 && bmiScore <= 24.9 ){
    firstScoreRange = 18.5
    lastScoreRange = 24.9

    firstPresentRange = 25 
    lastPresentRange = 50
  }else if(bmiScore >= 25 && bmiScore <= 29.9 ){
    firstScoreRange = 25
    lastScoreRange = 39.9

    firstPresentRange = 50 
    lastPresentRange = 75
  }else{
    firstScoreRange = 30
    lastScoreRange = 40

    firstPresentRange = 75 
    lastPresentRange = 100
  }

  const slope = (lastPresentRange - firstPresentRange ) / (lastScoreRange - firstScoreRange)
  const intercept = firstPresentRange - slope * firstScoreRange
  const precentage = Math.min(slope * bmiScore + intercept, 100)
  console.log(precentage)

  bmiIndicator.style.left = precentage + '%'
}

function reset(){
  weightInput.value = ''
  heightInput.value = ''
  resultBmiScore.textContent = '0'
  resultBmiScore.style.color = 'black'
  resultBmiCategory.textContent = 'N/A'
  bmiIndicator.style.left = '0%'
}