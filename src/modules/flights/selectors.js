import { createSelector } from 'reselect';

export const getIsLoading = (state) => state.flights.isLoading;
export const getError = (state) => state.flights.error;
export const getFlights = (state) => state.flights.records;
export const getPage = (state) => state.flights.page;
export const getDirection = (state) => state.flights.direction;

const getSearchTerm = (state) => state.search.searchTerm;



const directions = {
	'departure': (element) => element.mar2,
	'arrival': (element) => element.mar1,
};

const applySearch = (item, value) => item.toLowerCase().includes(value.toLowerCase());

const searchOnMultipleParams = (arrToFilter, searchTerm) => {
	const filtersValues = ['flt', 'co.name', 'mar.city'];
	const arrWithFilterValuesAndSearchTerm = filtersValues.map(el => [el, searchTerm]);

	return arrToFilter.filter((item) => (
		arrWithFilterValuesAndSearchTerm.map(([key, value]) => {
			let keyToSearch;

			if (item[key] === undefined) {
				const [firstKey, secKey] = key.split('.');
				keyToSearch = item[firstKey][secKey];
			}

			else keyToSearch = item[key];

			return applySearch(keyToSearch, value);
		}).some(Boolean))
	);
};

export const getFlightsWithSearch = createSelector(
	[ getFlights, getPage, getDirection, getSearchTerm, ],
	(allFlights, page, direction, searchTerm) => {

		const fromRaw = (el) => directions[direction](el);

		let data;
		if (allFlights) {
			data = allFlights.map((flight) => ({
				mar: fromRaw(flight),
				...flight,
			}));
		}

		data = searchTerm === ''
			? data
			:	searchOnMultipleParams(data, searchTerm);

		const [list,chuckSize] = [ data, 25 ];
		const arrayDevidedOnChunks = new Array(Math.ceil(list.length / chuckSize)).fill().map(_ => list.splice(0, chuckSize));

		return arrayDevidedOnChunks[page - 1];
	}
);
