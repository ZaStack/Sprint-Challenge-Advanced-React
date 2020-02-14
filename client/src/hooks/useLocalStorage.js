import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

// With this hook, we can set certain values in the app to be stored client side so that things maintain their state, even after a refresh. Values have to be stringified to be stored locally, meaning that when they are called up again they have to be parsed back into their original state.