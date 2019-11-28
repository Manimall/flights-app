import { useState, useRef, useCallback, useEffect } from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";

import { searchFlight } from "modules/search";

export const useSearch = () => {
	const dispatch = useDispatch();

	const initialFormValue = '';

	const [formValue, setFormValue] = useState(initialFormValue);
	const [focus, setFocus] = useState(false);

	const inputRef = useRef(null);
	const btnRef= useRef(null);
	const searchIconRef = useRef(null);

	const history = useHistory();
	const { pathname } = history.location;


	const handleChange = useCallback(({ target: { value } }) => {
		setFormValue(value);
	}, []);


	const handleSubmit = useCallback((e) => {
		e && e.preventDefault();

		if (formValue === initialFormValue) return;
		dispatch(searchFlight(formValue));
		history.push(`${pathname}?search=${formValue}`);

		setFocus(false);
	}, [dispatch, formValue, history, pathname]);


	const resetSearchTerm = useCallback(() => {
		setFormValue(initialFormValue);
		dispatch(searchFlight(initialFormValue))
	}, [dispatch]);


	const onFocus = useCallback(() => {
		setFocus(true);
	}, []);


	const onBlur = useCallback((e) => {
		if (searchIconRef.current === e.relatedTarget || btnRef.current === e.relatedTarget) handleSubmit();
		if (e.relatedTarget && e.relatedTarget.type === 'reset') {
			resetSearchTerm();
			return;
		}
		setFocus(false);
	}, [handleSubmit, resetSearchTerm]);


	useEffect(() => {
		const refNode = inputRef.current;

		refNode.addEventListener("focus", onFocus);
		refNode.addEventListener("blur", onBlur);

		return () => {
			refNode.removeEventListener("focus", onFocus);
			refNode.removeEventListener("blur", onBlur);
		};
	});

	return {
		focus,
		formValue,
		initialFormValue,

		btnRef,
		inputRef,
		searchIconRef,

		resetSearchTerm,
		handleSubmit,
		handleChange,
	}
};
