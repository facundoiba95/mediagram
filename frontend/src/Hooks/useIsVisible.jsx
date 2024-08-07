import React, { useEffect, useState } from 'react'

//@params refElement = ref HTML element
//@params optionalCondition = Boolean
const useIsVisible = ({refElement, optionalCondition}) => {
    const [ isVisible, setIsVisible ] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting && optionalCondition) {
                setIsVisible(true)
              } else {
                setIsVisible(false)
              }
            });
          },
          {
            root: null, // null significa que la raíz es el viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% del elemento visible
          }
        );
    
        if (refElement.current) {
          observer.observe(refElement.current);
        }
    
        return () => {
          if (refElement.current) {
            observer.unobserve(refElement.current);
          }
        };
      }, [refElement])

  return isVisible;
}

export default useIsVisible