import { useEffect, useRef } from "react";
const useClickOutside = (isOpen, onClose, ignoreElements = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const isIgnoredElement = ignoreElements.some((ignoreElement) => {
          if (typeof ignoreElement === "string") {
            return (
              event.target.matches(ignoreElement) ||
              event.target.closest(ignoreElement)
            );
          } else if (ignoreElement && ignoreElement.current) {
            return ignoreElement.current.contains(event.target);
          }
          return false;
        });
        if (!isIgnoredElement) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, ignoreElements]);

  return ref;
};

export default useClickOutside;
