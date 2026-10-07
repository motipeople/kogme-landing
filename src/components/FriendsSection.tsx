import { IMAGES } from '../constants/images';
import { FeatureSection } from './FeatureSection';

export function FriendsSection() {
  return (
    <FeatureSection
      className="feature--friends"
      title={
        <>
          <strong>친구들과 함께라면</strong>
          <br />
          <strong>포기하지 않을 거예요</strong>
        </>
      }
      image={IMAGES.friends}
      imageAlt="친구들과 함께하는 Kogme 화면"
    />
  );
}
