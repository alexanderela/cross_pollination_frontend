import { setCurrentCountry } from '../actions/countryActions';
import { updateUsedCountries } from '../actions/usedCountryActions';
import { hasErrored } from '../actions/hasErroredAction';
import * as Fetch from '../utilities/Fetch';

export const getCurrentCountry = (randomId, usedCountries) => {
	return async (dispatch) => {
		try {
			const currentCountry = await Fetch.fetchCorrectCountry(randomId, usedCountries
			);
			dispatch(setCurrentCountry(currentCountry))
			dispatch(updateUsedCountries(currentCountry.name))
		} catch (error) {
			dispatch(hasErrored(true));
		}
	}
}