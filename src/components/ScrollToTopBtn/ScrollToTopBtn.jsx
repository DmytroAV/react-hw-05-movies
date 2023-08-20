import { useEffect, useState } from 'react';
import { BtnScrollTo } from './ScrollToTopBtn.styled';
import { GoMoveToTop } from 'react-icons/go';

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      {isVisible && (
        <BtnScrollTo type="button" onClick={scrollToTop}>
          <GoMoveToTop />
        </BtnScrollTo>
      )}
    </>
  );
};

export default ScrollToTopBtn;
