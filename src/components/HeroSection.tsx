import { IMAGES } from '../constants/images';
import { DownloadButton } from './Header';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function HeroSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="section hero">
      <div className="container">
        <h1 className="hero__title">
          ‘오늘은 해야지’
          <br />
          말만 하는 친구 있죠?
        </h1>
        <p className="hero__desc">
          서로를 콕 찔러 깨우고,
          <br />
          사진 한 장으로 간편하게 인증해요.
        </p>
        <DownloadButton />
      </div>
      <div 
        ref={ref} 
        className={`hero__visual ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      >
        <img className="hero__star" src={IMAGES.star} alt="" aria-hidden="true" />
        <img className="hero__phone hero__phone--back" src={IMAGES.heroBack} alt="Kogme 내 기록 화면" />
        <img className="hero__phone hero__phone--front" src={IMAGES.heroFront} alt="Kogme 메인 화면" />
      </div>
    </section>
  );
}
