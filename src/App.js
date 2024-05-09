import React, { useEffect, useRef, useState } from 'react';
import Container from './component/Container'
import GlobalStyle from './component/GlobalStyle';

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container ref={targetRef} isIntersecting={isIntersecting}/>
    </>
  );
}

export default App;
