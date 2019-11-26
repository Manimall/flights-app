import React from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';

let Tab = (props) => {
	const { className, children, value: direction, isActive, onClick } = props;

	const handleButtonClick = event => {
		onClick(event, direction);
	};

	const classes = cn(className, {
		active: isActive
	});

	return (
		<Link
			to={`/timetable/${direction}`}
			className={classes}
			children={children}
			onClick={handleButtonClick}
		/>
	);
};

Tab = React.memo(Tab);

export default Tab
