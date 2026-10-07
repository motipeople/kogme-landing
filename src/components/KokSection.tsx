import { IMAGES } from '../constants/images';
import { FeatureSection } from './FeatureSection';

export function KokSection() {
  return (
    <FeatureSection
      className="feature--kok"
      title={
        <>
          <strong>서로가 주고받은 콕이</strong>
          <br />
          <strong>차곡차곡 쌓여요</strong>
        </>
      }
      customVisual={
        <div
          className="feature__visual feature__visual--kok"
          style={{
            position: 'relative',
            width: '66%',
            maxWidth: '422px',
            margin: '36px auto 0',
            aspectRatio: '242 / 475',
            padding: 0,
          }}
        >
          <img
            className="kok-layer kok-layer--left"
            src={IMAGES.kokCardLeft}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              height: 'auto',
              zIndex: 1,
              top: '32%',
              left: '-30%',
              width: '81%',
            }}
          />
          <img
            className="kok-layer kok-layer--phone"
            src={IMAGES.kokPhone}
            alt="주고받은 콕 화면"
            style={{
              position: 'absolute',
              height: 'auto',
              zIndex: 2,
              top: '0',
              left: '0%',
              width: '100%',
            }}
          />
          <img
            className="kok-layer kok-layer--right"
            src={IMAGES.kokCardRight}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              height: 'auto',
              zIndex: 3,
              top: '21%',
              right: '-35%',
              width: '88%',
            }}
          />
        </div>
      }
    />
  );
}
