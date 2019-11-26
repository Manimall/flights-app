import cn from "classnames";
import { useState, useRef, useCallback, useEffect } from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";

import { searchFlight } from "modules/search";

export const useSearch = () => {
	const dispatch = useDispatch();

	const initialFormValue = '';

	const [formValue, setFormValue] = useState(initialFormValue);
	const [focus, setFocus] = useState(false);
	const [active, setActiveClass] = useState(false);

	const inputRef = useRef(null);
	const btnRef= useRef(null);
	const searchIconRef = useRef(null);

	const history = useHistory();
	const { pathname } = history.location;

	const handleChange = ({ target: { value } }) => {
		setFormValue(value);
	};

	const handleSubmit = (e) => {
		e && e.preventDefault();

		if (formValue === initialFormValue) return;
		dispatch(searchFlight(formValue));
		history.push(`${pathname}?search=${formValue}`);

		setFocus(false);
	};

	const toggleClass = useCallback((classez) => cn(classez, {
		active: setActiveClass(!active)
	}), [active]);

	const lineClassez = cn({
		'filters-underline__fill': true,
		active: active
	});

	const onFocus = () => {
		setFocus(true);
		toggleClass(lineClassez);
	};

	const onBlur = (e) => {
		if (searchIconRef.current === e.relatedTarget || btnRef.current === e.relatedTarget) handleSubmit();
		if (e.relatedTarget && e.relatedTarget.type === 'reset') {
			resetSearchTerm();
			return;
		}
		setFocus(false);
		toggleClass(lineClassez);
	};

	useEffect(() => {
		const refNode = inputRef.current;
		refNode.addEventListener("focus", onFocus);
		refNode.addEventListener("blur", onBlur);

		return () => {
			refNode.removeEventListener("focus", onFocus);
			refNode.removeEventListener("blur", onBlur);
		};
	});

	const resetSearchTerm = () => {
		setFormValue(initialFormValue);
		dispatch(searchFlight(initialFormValue))
	};

	return {
		focus,
		formValue,
		initialFormValue,

		btnRef,
		inputRef,
		searchIconRef,
		lineClassez,

		resetSearchTerm,
		handleSubmit,
		handleChange,
	}
};
