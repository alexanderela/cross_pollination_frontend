import { usedCountriesReducer } from '../usedCountriesReducer';

describe('usedCountriesReducer', () => {

	const defaultState = [];

	it('should return default state when no type is given', () => {
		const newState = usedCountriesReducer(undefined, {});
		expect(newState).toEqual(defaultState);
	})
	it('should set used country as new state', () => {
		const mockCountry = 'Hungary';

		const mockAction = {
			type: 'UPDATE_USED_COUNTRIES',
			country: mockCountry
		}
		const newState = usedCountriesReducer([], mockAction);
		expect(newState).toEqual([mockCountry]);
	});
})
;