import { useDispatch, useSelector } from "react-redux";
import { useCallback } from 'react';

import { getFlightsWithSearch, getIsLoading, getError, getPage, getDirection } from "modules/flights";
import { fetchFlightsStart } from "modules/flights";


export const useGetFlights = () => {
	const { flights, isLoading, error, page, direction } = useSelector((state) => ({
		flights: getFlightsWithSearch(state),
		isLoading: getIsLoading(state),
		error: getError(state),
		page: getPage(state),
		direction: getDirection(state),
	}));

	const dispatch = useDispatch();
	const requestFlights = useCallback((attr) => {
		dispatch(fetchFlightsStart({ direction: attr }));
	}, [dispatch]);

	return {
		flights,
		isLoading,
		error,
		page,
		direction,

		requestFlights,
	}
};
