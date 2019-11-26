import React from 'react';

export const RightTipButtons = React.forwardRef(({ removeFocus, resetSearchTerm }, btnRef) => {

	const cleanUpSearch = () => {
		removeFocus();
		resetSearchTerm();
	};

	return (
		<div className="tip-buttons__wrapper">
			<button onClick={cleanUpSearch} type="button" className="tip-button tip-button--reset">
				Отменить
			</button>
			<button ref={btnRef} type="button" className="tip-button tip-button--search">
				Искать
			</button>
		</div>
	)
});
