import React from 'react';

export const CancelSearchButton = ({ resetSearchTerm }) => (
	<button onClick={resetSearchTerm} className={'search-icon__button'} type="button">
		<svg viewBox="0 0 11 11" id="close" xmlns="http://www.w3.org/2000/svg">
			<g fillRule="evenodd" transform="translate(-7 -7)">
				<path
					id="aha"
					d="M13.207 12.5l4.243 4.243-.707.707-4.243-4.243-4.243 4.243-.707-.707 4.243-4.243L7.55 8.257l.707-.707 4.243 4.243 4.243-4.243.707.707-4.243 4.243z"
				/>
			</g>
		</svg>
	</button>
);

