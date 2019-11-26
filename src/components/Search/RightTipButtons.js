import React from 'react';

export const RightTipButtons = React.forwardRef(({ removeFocus, handleSubmit }, btnRef) => {

	React.useEffect(() => {
		const refNode = btnRef.current;
		refNode.addEventListener('click', handleSubmit);

		return () => refNode.removeEventListener('click', handleSubmit);
	});

	return (
		<div className="tip-buttons__wrapper">
			<button onClick={removeFocus} type="button" className="tip-button tip-button--reset">
				Отменить
			</button>
			<button ref={btnRef} type="button" className="tip-button tip-button--search">
				Искать
			</button>
		</div>
	)
});
