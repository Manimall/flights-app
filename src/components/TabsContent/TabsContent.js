import React, { useMemo } from 'react';

import {useGetFlights} from "hooks/use-get-flights";
import Flight from "components/Flight";

import './TabsContent.css'


const Tabscontent = () => {

	const { flights = [], isLoading, error, page, requestFlights, direction } = useGetFlights();

	const renderSingleFlight = useMemo(() => (
		flights.map((flight, i) => (
			<Flight key={flight.i_id} flight={flight} direction={direction} />
		))
	), [direction, flights]);

	if (isLoading) return (
		<div>!!!loading!!!</div>
	);

	if (error) return (
		<div className="alert alert-danger" role="alert">
			smth gone wrong, <code>{error}</code>
		</div>
	);

	const noSearchResults = () => {
		if (!isLoading && flights.length === 0) return (
			<div className="wrapper" style={{willChange: 'transform', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
				<div className="marquee-line is-init" data-speed="1">
					<div
						className="marquee3k__wrapper"
						style={{whiteSpace: 'nowrap', transform: 'translate(0px, 0px) translateZ(0px)'}}
					>
						<p className="marquee__copy" style={{display: 'inline-block'}}>
							По вашему запросу ничего не найдено.
						</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="page-layout__content">

			<div
				className="ng-tns-c34-16 ng-star-inserted"
				style={{ display: 'block', opacity: '1', transform: 'translateY(0px)' }}
				customattribute="timetable"
			>
				<div className="ng-tns-c34-16" scrolledtobottom="true">
					<ul className="magic-for-wrapper" >
						{flights.length > 0 && renderSingleFlight}
						{noSearchResults()}
					</ul>
				</div>
			</div>
		</div>
	)
};

export default Tabscontent
