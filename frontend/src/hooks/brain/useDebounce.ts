import { useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => void> (
    fn : T,
    delay : number,
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (...args: Parameters<T>) => {
    if(timerRef.current){
        clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
