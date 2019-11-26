import React from 'react';

export const RightTipButtons = React.forwardRef((_props, ref) => {
	return (
		<div className="tip-buttons__wrapper">
			<button type="reset" className="tip-button tip-button--reset">
				Отменить
			</button>
			<button ref={ref} type="button" className="tip-button tip-button--search">
				Искать
			</button>
		</div>
	)
});
