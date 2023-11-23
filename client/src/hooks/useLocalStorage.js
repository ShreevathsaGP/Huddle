import { useEffect, useState } from "react";

const PREFIX = "huddle-";

export default function useLocalStorage(key, initialValue) {
	const actualKey = PREFIX + key;

	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(actualKey);

		// if exists return
		if (jsonValue != null) {
			return JSON.parse(jsonValue);
		}

		if (typeof initialValue == "function") {
			return initialValue();
		} else {
			return initialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(actualKey, JSON.stringify(value));
	}, [actualKey, value]);

	return [value, setValue];
}
