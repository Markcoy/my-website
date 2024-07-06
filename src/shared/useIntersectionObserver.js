// useIntersectionObserver.js
import { useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
  const elementsRef = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, options);

    elementsRef.current.forEach((element) => {
      if (element) observer.current.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.current.unobserve(element);
      });
    };
  }, [options]);

  const addElement = (element) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };

  return addElement;
};

export default useIntersectionObserver;
