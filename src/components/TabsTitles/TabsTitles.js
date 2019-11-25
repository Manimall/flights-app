import React, { useCallback, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Tab from "components/Tabs";
import { useGetFlights } from "hooks/use-get-flights";

import './TabsTitles.css'


const TabsTitles = ({ direction }) => {
	const tabsWrapperInlineStyles = {
		transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
		transitionDuration: '1000ms',
		transform: 'translate(0px, 0px) translateZ(0px)',
	};

	const history = useHistory();

	const { requestFlights } = useGetFlights();

	const handleTabClick = useCallback(
		(_event) => {
			history.push(`/timetable/${direction}`)
		}, [direction, history]);

	useEffect(() => {
		requestFlights(direction);
	}, [requestFlights, direction]);

	return (
		<div
			className="flight-type-toggle"
			style={tabsWrapperInlineStyles}
		>

			<Tab
				className="flight-type-toggle__link"

				devicetapanimation
				queryparamshandling="merge"
				routerlinkactive="active"

				value={'departure'}
				isActive={direction === 'departure'}
				onClick={handleTabClick}
			>
				Вылет
			</Tab>

			<Tab
				className="flight-type-toggle__link"

				devicetapanimation
				queryparamshandling="merge"
				routerlinkactive="active"

				value={'arrival'}
				isActive={direction === 'arrival'}
				onClick={handleTabClick}
			>
				Прилет
			</Tab>

		</div>
	)
};

export default TabsTitles
