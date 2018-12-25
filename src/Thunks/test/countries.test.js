import { setCurrentCountry } from '../../actions/countryActions';
import { updateUsedCountries } from '../../actions/usedCountryActions';
import * as Fetch from '../../utilities/Fetch';
import { getCurrentCountry } from '../countries.js';
import { hasErrored } from '../../actions/hasErroredAction';

describe('getCurrentCountry', () => {
	let mockDispatch;
	let mockId;
	let mockUsedCountries;
	let mockCurrentCountry;

	beforeEach(() => {
		mockDispatch = jest.fn();
		mockId = 91;
		mockUsedCountries = ['Mongolia', 'Sweden', 'Denmark', 'Hungary']
	});

	it('should call getCurrentCountry with correct parameters', () => {
		Fetch.fetchCorrectCountry = jest.fn();
		const thunk = getCurrentCountry(mockId, mockUsedCountries);
		thunk(mockDispatch);
		expect(Fetch.fetchCorrectCountry).toHaveBeenCalledWith(mockId, mockUsedCountries)
	})

	it('should call dispatch with setCurrentCountry', async () => {
		Fetch.fetchCorrectCountry = jest.fn(() => 
			Promise.resolve({
				name: 'Austria',
			})
		);
		const mockAction = setCurrentCountry({ name: 'Austria' });

		const thunk = await getCurrentCountry(mockId, mockUsedCountries);
		await thunk(mockDispatch);
		expect(mockDispatch).toHaveBeenCalledWith(mockAction);
	});
	
	it('should call dispatch with updateUsedCountries', async () => {
		Fetch.fetchCorrectCountry = jest.fn(() => 
			Promise.resolve({
				name: 'Austria',
			})
		);
		const mockAction = updateUsedCountries('Austria');

		const thunk = await getCurrentCountry(mockId, mockUsedCountries);
		await thunk(mockDispatch);
		expect(mockDispatch).toHaveBeenCalledWith(mockAction);
	})
	
	it('should show error if thunk has failed', async () => {
		Fetch.fetchCorrectCountry = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 404,
        json: () =>
          Promise.reject({
            error: { message: '404' },
          }),
      })
    );

    const thunk = await getCurrentCountry(mockId, mockUsedCountries);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true));
	});
});
