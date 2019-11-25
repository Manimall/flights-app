import React from 'react';

export const RightTipButtons = ({ removeFocus }) => (
	<div className="tip-buttons__wrapper">
		<button onClick={removeFocus} type="button" className="tip-button tip-button--reset">
			Отменить
		</button>
		<button type="button" className="tip-button tip-button--search">
			Искать
		</button>
	</div>
);
