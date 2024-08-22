import { useEffect, useRef } from "react";

const useIntersectionAnimation = ({ animation }: { animation: string }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animation);
          } else {
            entry.target.classList.remove(animation);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;

    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [animation]);

  return elementRef;
};

export default useIntersectionAnimation;
