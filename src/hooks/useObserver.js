import { useEffect, useState } from 'react';

export default function useObserver(id) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let observer;

    const element = document.getElementById(id);

    const onChange = ([entry]) => {
      if (entry.isIntersecting === false) {
        setIntersecting(false);
      } else {
        setIntersecting(true);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange);
      if (element) observer.observe(element);
    });
    return () => observer && observer.disconnect();
  });

  return isIntersecting;
}
