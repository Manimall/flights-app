import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from "react-redux";
import cn from 'classnames';
import { useHistory } from "react-router";

import { searchFlight } from "modules/search";

import { SearchIcon } from "./SearchIcon";
import { CancelSearchButton } from "./CancelSearchIcon";
import { RightTipButtons } from './RightTipButtons';

import './Search.css';


const Search = () => {

	const dispatch = useDispatch();

	const initialFormValue = '';

	const [formValue, setFormValue] = useState(initialFormValue);
	const [active, setActiveClass] = useState(false);
	const inputRef = useRef(null);
	const [focus, setFocus] = useState(false);

	const history = useHistory();
	const { pathname } = history.location;

	const toggleClass = useCallback((classez) => cn(classez, {
		active: setActiveClass(!active)
	}), [active]);

	const lineClassez = cn({
		'filters-underline__fill': true,
		active: active
	});

	const handleChange = ({ target: { value } }) => {
		setFormValue(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formValue === initialFormValue) return;
		console.log(formValue);
		dispatch(searchFlight(formValue));

		history.push(`${pathname}?search=${formValue}`);
	};

	const onFocus = () => {
		setFocus(true);
		toggleClass(lineClassez);
	};

	const onBlur = () => {
		setFocus(false);
		toggleClass(lineClassez);
	};

	useEffect(() => {
		inputRef.current.addEventListener("focus", onFocus);
		inputRef.current.addEventListener("blur", onBlur);
	});

	const resetSearchTerm = () => {
		setFormValue(initialFormValue);
		dispatch(searchFlight(initialFormValue))
	};

	const drawIconOnTerms = () => {
		if (focus || formValue === initialFormValue) return <SearchIcon />;
		return <CancelSearchButton resetSearchTerm={resetSearchTerm}/>
	};

	return (
		<section className="ng-tns-c27-14">
			<div className="ng-tns-c27-14 stickable hasPlaceholder">
				<div className="ng-tns-c2-0">
					<div className="page-filters-wrapper ng-tns-c27-14">
						<form
							className="filters ng-untouched ng-valid ng-dirty"
							onSubmit={handleSubmit}
						>
							<div
								className="ng-trigger ng-tns-c27-14"
								data-attr={'search-field'}
							>
								<span className="search-field typeahead twitter-typeahead" style={{position: 'relative', display: 'inline-block'}}>
									<input
										placeholder="Поиск по номеру рейса, городу и авиакомпании"
										className="ng-untouched ng-pristine ng-valid tt-input ng-star-inserted"
										autoComplete="off"
										spellCheck="false"
										dir="auto"
										type="text"
										name="search"
										value={formValue}
										ref={inputRef}
										onChange={handleChange}
										maxLength={'50'}
										style={{position: 'relative', verticalAlign: 'top', backgroundColor: 'transparent'}}
									/>
									<span className="search-icon ng-star-inserted">
										{drawIconOnTerms()}
									</span>
								</span>
							</div>

							{focus && <RightTipButtons removeFocus={onBlur}/>}
						</form>

						<div className="underline-container">
							<div className="filters-underline">
								<div className="ng-tns-c27-14 ng-tns-c32-15 progress-bar"/>
								<div className={lineClassez} />
							</div>
						</div>

						<div className="filters-placeholder ng-tns-c27-14 ng-star-inserted"/>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Search
