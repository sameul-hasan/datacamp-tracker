import { useState } from 'react';
import { useTracker } from './hooks/useTracker';

// CSS
import './styles/design-tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';

// Layout Components
import Banner from './components/Layout/Banner';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import BadgeToast from './components/BadgeToast';

// Page Components
import Dashboard from './components/Dashboard/Dashboard';
import Roadmap from './components/Roadmap/Roadmap';
import Courses from './components/Pages/Courses';
import Certs from './components/Pages/Certs';
import Rewards from './components/Pages/Rewards';
import Projects from './components/Pages/Projects';
import Interview from './components/Pages/Interview';
import Setup from './components/Pages/Setup';
import Practice from './components/Pages/Practice';
import Showcase from './components/Pages/Showcase';
import Guide from './components/Pages/Guide';
import Market from './components/Pages/Market';
import Builder from './components/Pages/Builder';

export default function App() {
  const [tab, setTab] = useState('dashboard');
  const tracker = useTracker();

  return (
    <>
      <BadgeToast badge={tracker.newBadge} />
      <Banner level={tracker.currentLevel} xp={tracker.xp} />
      <Navbar tab={tab} setTab={setTab} />

      <main className="container">
        {tab === 'dashboard' && <Dashboard tracker={tracker} />}
        {tab === 'roadmap' && <Roadmap tracker={tracker} />}
        {tab === 'courses' && <Courses tracker={tracker} />}
        {tab === 'certs' && <Certs tracker={tracker} />}
        {tab === 'rewards' && <Rewards tracker={tracker} />}
        {tab === 'projects' && <Projects />}
        {tab === 'interview' && <Interview />}
        {tab === 'setup' && <Setup />}
        {tab === 'practice' && <Practice />}
        {tab === 'showcase' && <Showcase />}
        {tab === 'guide' && <Guide />}
        {tab === 'market' && <Market />}
        {tab === 'builder' && <Builder />}
      </main>

      <Footer />
    </>
  );
}
