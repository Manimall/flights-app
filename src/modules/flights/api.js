// const url = 'https://4aab5557-c19e-4a0a-8316-849c4a3de166.mock.pstmn.io/api/flights';
const url = 'https://demo5797349.mockable.io/api/flights';


export const fetchFlights = (direction) => {
	const FETCH_URL = `${url}/${direction}`;

	return fetch(FETCH_URL)
		.then(
			response =>
				response.status !== 200 ? Promise.reject(response) : response.json()
		)
};
