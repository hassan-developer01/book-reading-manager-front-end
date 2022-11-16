import {useState} from "react";

function useStorage({key, initialValue = undefined, type = 'local'}: {key: string, initialValue?: any, type?: 'local' | 'session'}) {
  let storage = type === 'local' ? window.localStorage : window.sessionStorage;

  const [storedValue, setStoredValue] = useState(() => {
    if (storage instanceof Storage) {
      const item = storage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } else {
      console.log('Something is wrong with storage.');

      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        storage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  function remove() {
    try {
      setStoredValue(undefined);
      if (typeof window !== "undefined") {
        storage.removeItem(key);
      }
    } catch (error) {
      console.log(error);
    }

  }

  return [storedValue, setValue, remove];
}

export default useStorage