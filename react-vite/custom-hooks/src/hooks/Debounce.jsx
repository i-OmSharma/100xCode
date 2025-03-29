import { useEffect, useState } from "react";

function useDebounce(value, timeOut) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceValue(value);
    }, timeOut);

    return () => {
        clearTimeout(handle)
    }
  }, [value]);
  return debounceValue;
}

function Debounce() {
  const [value, setValue] = useState(0);
  const debounceValue = useDebounce(value, 500);

  return (
    <>
      Debounce Value is {debounceValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default Debounce;
