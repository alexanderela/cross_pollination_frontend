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
export const buildQuestion = (correctCountry) => {
  const questionOptions = getRandomOptions()

  checkOptions(correctCountry, questionOptions)
  const multipleChoices = [...questionOptions, correctCountry.name]
  const flagOptions = shuffleMultipleChoice(multipleChoices)
  //Adding the multiple coice array to the correctCountry object

  //QUESTION FROM ALEX E.  Should we perform the following line of code as is, or should we instead spread the new property into the object?  I seem to remember Will telling us not to assign new properties in this way, but I may be mistaken.
  correctCountry.multipleChoice = flagOptions
  return correctCountry
}

//This function grabs three random countries
export const getRandomOptions = () => {
  //update as number of countries in database increases
  const optionA = countryNames[Math.floor(Math.random() * 149)]
  const optionB = countryNames[Math.floor(Math.random() * 149)]
  const optionC = countryNames[Math.floor(Math.random() * 149)]

  if (optionA === optionB || optionA === optionC || optionB === optionC ){
    getRandomOptions()
  } else {
    const countryOptionsPrelim = [optionA, optionB, optionC]
    return countryOptionsPrelim
  }
}

//This function checks if any of the 'wrong' options are the corrct answer
export const checkOptions = (countryName, questionOptions) => {
  if(questionOptions.includes(countryName)){
    console.log('in')
    getRandomOptions()
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