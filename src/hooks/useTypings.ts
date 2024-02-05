import { useCallback, useEffect, useRef, useState } from "react";

function isKeyboardCodeAllowed(code: string) {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
}

function useTypings(enabled: boolean) {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState<string>("");

  const totalTyped = useRef(0);

  const keyboardHandler = useCallback(
    ({ key, code, metaKey }: KeyboardEvent) => {
      if (!enabled || !isKeyboardCodeAllowed(code) || metaKey) return;

      switch (key) {
        case "Backspace":
          setTyped((prev) => prev.slice(0, -1));
          setCursor((cursor) => cursor - 1);
          totalTyped.current -= 1;
          break;
        default:
          setTyped((prev) => prev.concat(key));
          setCursor((cursor) => cursor + 1);
          totalTyped.current += 1;
      }
    },
    [enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0);
  }, []);

  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler);

    return () => window.removeEventListener("keydown", keyboardHandler);
  }, [keyboardHandler]);

  return {
    typed,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped: totalTyped.current,
  };
}

export default useTypings;
