import countryNames from './countryNames' 

//Checking if a country is already used against the usedCountries array from the global store
//invoked on fetchCorrectCountry
export const checkCountry = (country, usedCountries) => {
  if (usedCountries.includes(country)) {
    return true
  } else {
    return false
  }
}

//this function is building the object for the current question that will ultimately be sent to the global store. 
export const buildQuestion = (correctCountry, countryFacts) => {
  let questionOptions = getRandomOptions(correctCountry.name)

  if (questionOptions.includes(correctCountry.name)) {
    questionOptions = getRandomOptions(correctCountry.name)
  }

  checkOptions(correctCountry.name, questionOptions)
  const multipleChoices = [...questionOptions, correctCountry.name]
  const flagOptions = shuffleMultipleChoice(multipleChoices)
  //Adding the multiple coice array to the correctCountry object
  let country = {...correctCountry, multipleChoice: flagOptions, facts: countryFacts[0]}

  return country
}

//This function grabs three random countries
export const getRandomOptions = (correctCountry) => {
  //update as number of countries in database increases
  
  const optionA = countryNames[Math.floor(Math.random() * 193)]
  const optionB = countryNames[Math.floor(Math.random() * 193)]
  const optionC = countryNames[Math.floor(Math.random() * 193)]
  
  if (optionA === optionB || optionA === optionC || optionB === optionC || optionA === correctCountry || optionB === correctCountry || optionC === correctCountry){
    return getRandomOptions(correctCountry)
  } else {
    const countryOptionsPrelim = [optionA, optionB, optionC]
    return countryOptionsPrelim
  }
}

//This function checks if any of the 'wrong' options are the corrct answer
export const checkOptions = (countryName, questionOptions) => {
  
  if (questionOptions.includes(countryName)){
    getRandomOptions(countryName)
  } else {
    return
  }
}

//I don't understand this code, but it works. What's going on with the assignment of m? What is m?
export const shuffleMultipleChoice = (array) => {
  let m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}