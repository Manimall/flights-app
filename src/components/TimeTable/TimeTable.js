import React from 'react';

import Search from "components/Search";
import TabsTitles from "components/TabsTitles";
import TimeTableContent from 'components/TabsContent'

import './TimeTable.css'

export const TimeTableHeader = ({ direction }) => (
	<div className="page-layout__header">
		<div className="page-layout__fill">
			<TabsTitles direction={direction} />
			<Search/>
		</div>
	</div>
);


const TimeTable = ({ direction }) => {
	return (
		<div className="page-layout">
			<TimeTableHeader direction={direction} />
			<TimeTableContent/>
		</div>
	)
};

export default TimeTable
