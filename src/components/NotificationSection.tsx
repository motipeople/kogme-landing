import { IMAGES } from '../constants/images';
import { FeatureSection } from './FeatureSection';

export function NotificationSection() {
  return (
    <FeatureSection
      className="feature--notification"
      title={
        <>
          <strong>친구를 콕 찔러</strong>
          <br />
          <strong>알림을 보내보세요</strong>
        </>
      }
      image={IMAGES.notification}
      imageAlt="민지님이 콕! 찔렀어요 알림 화면"
    />
  );
}
