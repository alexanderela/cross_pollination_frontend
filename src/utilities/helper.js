import countryNames from './countryNames'

export const checkCountry = (country, usedCountries) => {
  if (usedCountries.includes(country)) {
    return true
  } else {
    return false
  }
}

<<<<<<< HEAD
=======
//this function is building the object for the current question that will ultimately be sent to the global store.
>>>>>>> Add styling for Account and login placeholders
export const buildQuestion = (correctCountry, countryFacts) => {
  let questionOptions = getRandomOptions(correctCountry.name)

  if (questionOptions.includes(correctCountry.name)) {
    questionOptions = getRandomOptions(correctCountry.name)
  }

  checkOptions(correctCountry.name, questionOptions)
  const multipleChoices = [...questionOptions, correctCountry.name]
  const flagOptions = shuffleMultipleChoice(multipleChoices)
<<<<<<< HEAD
=======
  //Adding the multiple coice array to the correctCountry object
>>>>>>> Add styling for Account and login placeholders
  let country = {
    ...correctCountry,
    multipleChoice: flagOptions,
    facts: countryFacts[0],
  }
<<<<<<< HEAD
  return country
}

export const getRandomOptions = (correctCountry) => {
=======

  return country
}

//This function grabs three random countries
export const getRandomOptions = correctCountry => {
  //update as number of countries in database increases
>>>>>>> Add styling for Account and login placeholders

  const optionA = countryNames[Math.floor(Math.random() * 193)]
  const optionB = countryNames[Math.floor(Math.random() * 193)]
  const optionC = countryNames[Math.floor(Math.random() * 193)]

  if (
    optionA === optionB ||
    optionA === optionC ||
    optionB === optionC ||
    optionA === correctCountry ||
    optionB === correctCountry ||
    optionC === correctCountry
  ) {
    return getRandomOptions(correctCountry)
  } else {
    const countryOptionsPrelim = [optionA, optionB, optionC]
    return countryOptionsPrelim
  }
}

export const checkOptions = (countryName, questionOptions) => {
<<<<<<< HEAD
  if (questionOptions.includes(countryName)){
=======
  if (questionOptions.includes(countryName)) {
>>>>>>> Add styling for Account and login placeholders
    getRandomOptions(countryName)
  } else {
    return
  }
}

<<<<<<< HEAD
=======
//I don't understand this code, but it works. What's going on with the assignment of m? What is m?
>>>>>>> Add styling for Account and login placeholders
export const shuffleMultipleChoice = array => {
  let m = array.length,
    t,
    i

  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}
