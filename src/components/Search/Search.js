import cn from "classnames";
import React, { useState, useCallback, memo } from 'react';

import { SearchIcon } from "./SearchIcon";
import { CancelSearchButton } from "./CancelSearchIcon";
import { RightTipButtons } from './RightTipButtons';

import { useSearch } from "hooks/use-search";

import './Search.css';


let Search = () => {

	const [active, setActiveClass] = useState(false);

	const {
		focus,
		formValue,
		initialFormValue,

		btnRef,
		inputRef,
		searchIconRef,

		resetSearchTerm,
		handleSubmit,
		handleChange,
	} = useSearch();

	const toggleClass = (classez) => cn(classez, {
		active: setActiveClass(!active)
	});

	const lineClassez = cn({
		'filters-underline__fill': true,
		active: active
	});

	const drawIconOnTerms = useCallback(() => {
		if (focus || formValue === initialFormValue) return <SearchIcon ref={searchIconRef} />;
		return <CancelSearchButton resetSearchTerm={resetSearchTerm}/>
	},[focus, formValue, initialFormValue, resetSearchTerm, searchIconRef]);

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
										onFocus={() => toggleClass(lineClassez)}
										onBlur={() => toggleClass(lineClassez)}
										maxLength={'50'}
										style={{position: 'relative', verticalAlign: 'top', backgroundColor: 'transparent'}}
									/>
									<span className="search-icon ng-star-inserted">
										{drawIconOnTerms()}
									</span>
								</span>
							</div>

							{focus && <RightTipButtons ref={btnRef} />}
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

Search = memo(Search);

export default Search
