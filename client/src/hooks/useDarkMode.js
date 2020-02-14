import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (darkMode === true) {
            return document.querySelector('body').classList.add('dark-mode');
        } else {
            return document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};  

// The hook just creates a toggle that can be attached to a button which adds or removes the dark-mode class, which I have set to swap the background and font colors. By also setting the state to useLocalStorage, we make it so that it maintain your preference upon revisiting the site or reloading th page.