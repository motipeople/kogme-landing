import '../src/App.css';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { NotificationSection } from './components/NotificationSection';
import { KokSection } from './components/KokSection';
import { RecordSection } from './components/RecordSection';
import { FriendsSection } from './components/FriendsSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <main className="page">
      <Header />
      <HeroSection />
      <NotificationSection />
      <KokSection />
      <RecordSection />
      <FriendsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
