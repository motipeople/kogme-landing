import { useState, useEffect } from 'react';
import { IMAGES, APP_DOWNLOAD_URL } from '../constants/images';

interface DownloadButtonProps {
  size?: 'small' | 'large';
}

export function DownloadButton({ size = 'large' }: DownloadButtonProps) {
  return (
    <a
      className={`download-btn download-btn--${size}`}
      href={APP_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>앱 다운로드</span>
    </a>
  );
}

export function Header() {
  const [bgClass, setBgClass] = useState('header--bg-yellow');

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero');
      if (heroElement) {
        // header is usually around 60-80px tall
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        if (heroBottom > 80) {
          setBgClass('header--bg-yellow');
        } else {
          setBgClass('header--bg-white');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header header--fixed ${bgClass}`}>
      <a href="/" className="header__logo" aria-label="Kogme 홈">
        <img src={IMAGES.logo} alt="Kogme" />
      </a>
      <DownloadButton size="small" />
    </header>
  );
}
