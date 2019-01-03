import countryNames from './countryNames'

export const checkCountry = (country, usedCountries) => {
  if (usedCountries.includes(country)) {
    return true
  } else {
    return false
  }
}

export const buildQuestion = (correctCountry, countryFacts) => {
  let questionOptions = getRandomOptions(correctCountry.name)

  if (questionOptions.includes(correctCountry.name)) {
    questionOptions = getRandomOptions(correctCountry.name)
  }

  checkOptions(correctCountry.name, questionOptions)
  const multipleChoices = [...questionOptions, correctCountry.name]
  const flagOptions = shuffleMultipleChoice(multipleChoices)
<<<<<<< HEAD
  let country = {...correctCountry, multipleChoice: flagOptions, facts: countryFacts[0]}
=======

  let country = {
    ...correctCountry,
    multipleChoice: flagOptions,
    facts: countryFacts[0],
  }
>>>>>>> Install and run Prettier on all files

  return country
}

<<<<<<< HEAD
export const getRandomOptions = (correctCountry) => {
=======

export const getRandomOptions = correctCountry => {
>>>>>>> Install and run Prettier on all files
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
  if (questionOptions.includes(countryName)){
    getRandomOptions(countryName)
  } else {
    return
  }
}

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
