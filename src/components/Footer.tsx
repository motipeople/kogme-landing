import { IMAGES } from '../constants/images';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo-wrap">
          <img src={IMAGES.logo} alt="Kogme" className="footer__logo" />
          <span className="footer__logo-text">Kogme</span>
        </div>
        
        <div className="footer__links">
          <a href="#">이용약관</a>
          <span className="footer__divider">|</span>
          <a href="#">개인정보처리방침</a>
        </div>
        
        <div className="footer__info">
          <p>상호 모티피플 · 대표자 김무관 · 사업자등록번호 783-34-01846</p>
          <p>서울특별시 노원구 동일로71길 27, 1층</p>
          <p>E-mail: motipeople.official@gmail.com</p>
        </div>
        
        <p className="footer__copy">© 2026 Kogme. All rights reserved.</p>
      </div>
    </footer>
  );
}
