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
import Settings from './components/Pages/Settings';

function OnboardingModal({ onClose }) {
  return (
    <div className="modal-overlay" style={{zIndex:9999}}>
      <div className="modal-container onboarding-modal" style={{maxWidth:600}}>
        <div className="modal-header">
          <div className="modal-title" style={{fontSize:22}}>Welcome to Your AI/ML Journey 🚀</div>
        </div>
        <div className="modal-body" style={{lineHeight:1.6}}>
          <p style={{marginBottom:16}}>You are about to start a comprehensive 168-session professional journey from Python beginner to Job-Ready AI Engineer.</p>
          
          <div style={{background:'rgba(255,255,255,0.03)', padding:16, borderRadius:8, marginBottom:16, borderLeft:'4px solid var(--accent)'}}>
            <h4 style={{margin:'0 0 8px 0', color:'var(--accent)'}}>1. Pace Yourself (Sessions, not Days)</h4>
            <p style={{margin:0, fontSize:14, color:'var(--text-2)'}}>Do not rush! Each of the 168 boxes is a <strong>Session</strong>, taking ~3-4 hours. You can do 1 session a day, or stretch it over several days. Mastery is more important than speed.</p>
          </div>

          <div style={{background:'rgba(255,255,255,0.03)', padding:16, borderRadius:8, marginBottom:16, borderLeft:'4px solid var(--gold)'}}>
            <h4 style={{margin:'0 0 8px 0', color:'var(--gold)'}}>2. Use the Buffer Days</h4>
            <p style={{margin:0, fontSize:14, color:'var(--text-2)'}}>Throughout the curriculum, you will see "Buffer Days". Use these to catch up on any incomplete courses without feeling guilty.</p>
          </div>

          <div style={{background:'rgba(255,255,255,0.03)', padding:16, borderRadius:8, marginBottom:24, borderLeft:'4px solid var(--green)'}}>
            <h4 style={{margin:'0 0 8px 0', color:'var(--green)'}}>3. Math & Theory</h4>
            <p style={{margin:0, fontSize:14, color:'var(--text-2)'}}>Don't skip the "Daily Theory" blocks on the Roadmap tab. Click the 📎 Resources to watch the recommended videos.</p>
          </div>

          <button className="btn outline" style={{width:'100%', padding:16, fontSize:16, fontWeight:'bold'}} onClick={onClose}>
            I understand. Let's begin!
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('dashboard');
  const tracker = useTracker();
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return !localStorage.getItem('dc-tracker-onboarded');
  });

  const handleCloseOnboarding = () => {
    localStorage.setItem('dc-tracker-onboarded', 'true');
    setShowOnboarding(false);
  };

  return (
    <>
      {showOnboarding && <OnboardingModal onClose={handleCloseOnboarding} />}
      <BadgeToast badge={tracker.newBadge} />
      <Banner level={tracker.currentLevel} xp={tracker.xp} />
      <Navbar tab={tab} setTab={setTab} />

      <main className="container">
        {tab === 'dashboard' && <Dashboard tracker={tracker} />}
        {tab === 'roadmap' && <Roadmap tracker={tracker} setTab={setTab} />}
        {tab === 'courses' && <Courses tracker={tracker} />}
        {tab === 'certs' && <Certs tracker={tracker} />}
        {tab === 'rewards' && <Rewards tracker={tracker} />}
        {tab === 'projects' && <Projects />}
        {tab === 'interview' && <Interview />}
        {tab === 'setup' && <Setup />}
        {tab === 'practice' && <Practice />}
        {tab === 'showcase' && <Showcase />}
        {tab === 'guide' && <Guide />}
        {tab === 'settings' && <Settings />}
        {tab === 'market' && <Market />}
        {tab === 'builder' && <Builder />}
      </main>

      <Footer />
    </>
  );
}
