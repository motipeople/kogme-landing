import { IMAGES } from '../constants/images';
import { FeatureSection } from './FeatureSection';

export function RecordSection() {
  return (
    <FeatureSection
      className="feature--record"
      title={
        <>
          매일 하지 않아도 괜찮아요
          <br />
          <strong>내가 정한 목표 횟수만큼만 해요</strong>
        </>
      }
      customVisual={
        <div
          className="feature__visual feature__visual--record"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '560px',
            margin: '36px auto 0',
            aspectRatio: '500 / 560',
            padding: 0,
          }}
        >
          <img
            className="record-layer record-layer--bg"
            src={IMAGES.recordBg}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              height: 'auto',
              zIndex: 2,
              top: '4%',
              left: '36%',
              width: '13%',
            }}
          />
          <img
            className="record-layer record-layer--left"
            src={IMAGES.recordPhoneLeft}
            alt="내 기록 캘린더 화면"
            style={{
              position: 'absolute',
              height: 'auto',
              zIndex: 1,
              top: '0%',
              left: '-2%',
              width: '56%',
            }}
          />
          <img
            className="record-layer record-layer--right"
            src={IMAGES.recordPhoneRight}
            alt="인증 사진 확인 화면"
            style={{
              position: 'absolute',
              height: 'auto',
              zIndex: 3,
              top: '0%',
              right: '-2%',
              width: '56%',
            }}
          />
        </div>
      }
    />
  );
}
